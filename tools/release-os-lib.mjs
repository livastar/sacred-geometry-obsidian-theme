import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

export const repoRoot = process.cwd();
export const calendarPath = "docs/roadmap/release-calendar.json";

export function read(filePath) {
  return fs.readFileSync(path.join(repoRoot, filePath), "utf8");
}

export function exists(filePath) {
  return fs.existsSync(path.join(repoRoot, filePath));
}

export function parseJson(filePath, failures) {
  try {
    return JSON.parse(read(filePath));
  } catch (error) {
    failures.push(`${filePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

export function parseArgs(argv) {
  const args = {};
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) {
      continue;
    }
    const key = arg.slice(2);
    const next = argv[index + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
    } else {
      args[key] = next;
      index += 1;
    }
  }
  return args;
}

export function semverPattern() {
  return /^\d+\.\d+\.\d+$/;
}

export function sha256(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(path.join(repoRoot, filePath))).digest("hex");
}

export function formatFailures(title, failures) {
  return [`${title}:`, ...failures.map((failure) => `- ${failure}`)].join("\n");
}

export function loadCalendar(failures) {
  const calendar = parseJson(calendarPath, failures);
  if (!calendar) {
    return null;
  }

  if (calendar.timezone !== "Europe/Amsterdam") {
    failures.push(`${calendarPath} timezone must be Europe/Amsterdam.`);
  }

  if (calendar.scheduledPublishCron !== "0 8 * * 5") {
    failures.push(`${calendarPath} scheduledPublishCron must be 0 8 * * 5.`);
  }

  if (!Array.isArray(calendar.releases)) {
    failures.push(`${calendarPath} must contain a releases array.`);
    return calendar;
  }

  const versions = new Set();
  const releaseDates = new Set();

  for (const entry of calendar.releases) {
    if (!["release", "buffer"].includes(entry.kind)) {
      failures.push(`Calendar entry "${entry.title ?? "untitled"}" must have kind release or buffer.`);
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.releaseDate ?? "")) {
      failures.push(`Calendar entry "${entry.title ?? "untitled"}" must use releaseDate in YYYY-MM-DD format.`);
    } else if (releaseDates.has(entry.releaseDate)) {
      failures.push(`Calendar releaseDate ${entry.releaseDate} is duplicated.`);
    } else {
      releaseDates.add(entry.releaseDate);
    }

    if (!/^\d{2}:\d{2}$/.test(entry.localTime ?? "")) {
      failures.push(`Calendar entry "${entry.title ?? "untitled"}" must use localTime in HH:MM format.`);
    }

    if (entry.kind !== "release") {
      continue;
    }

    if (!semverPattern().test(entry.version ?? "")) {
      failures.push(`Release entry "${entry.title ?? "untitled"}" must use x.y.z version format.`);
    } else if (versions.has(entry.version)) {
      failures.push(`Release version ${entry.version} is duplicated.`);
    } else {
      versions.add(entry.version);
    }

    if (!entry.branch?.startsWith(`codex/v${entry.version}-`)) {
      failures.push(`Release ${entry.version} branch must start with codex/v${entry.version}-.`);
    }

    if (!entry.releaseBrief || !exists(entry.releaseBrief)) {
      failures.push(`Release ${entry.version} release brief is missing at ${entry.releaseBrief}.`);
    }

    if (!["planned", "approved", "released", "paused"].includes(entry.status)) {
      failures.push(`Release ${entry.version} status must be planned, approved, released, or paused.`);
    }

    if (entry.status === "approved" && entry.visualQaRequired && !entry.visualQaEvidence) {
      failures.push(`Release ${entry.version} is approved but missing visualQaEvidence.`);
    }
  }

  return calendar;
}

export function releaseForVersion(calendar, version) {
  return calendar?.releases?.find((entry) => entry.kind === "release" && entry.version === version);
}

export function validateReleaseBrief(entry, failures) {
  if (!entry?.releaseBrief || !exists(entry.releaseBrief)) {
    failures.push(`Release ${entry?.version ?? "unknown"} release brief is missing.`);
    return;
  }

  const brief = read(entry.releaseBrief);
  const requiredHeadings = [
    "## Why This Release Exists",
    "## User Problem",
    "## Brand Alignment",
    "## Public Hook",
    "## Scope",
    "## Non-Goals",
    "## Files Expected To Change",
    "## QA Plan",
    "## Release Notes Draft",
    "## Risks",
  ];

  for (const heading of requiredHeadings) {
    if (!brief.includes(heading)) {
      failures.push(`${entry.releaseBrief} must include ${heading}.`);
    }
  }

  const forbidden = [
    "{{",
    "}}",
    "State the user-facing reason",
    "Describe the concrete",
    "Write one public-facing",
    "List the exact",
    "Short user-facing summary",
    "TODO",
    "TBD",
  ];

  for (const token of forbidden) {
    if (brief.includes(token)) {
      failures.push(`${entry.releaseBrief} contains placeholder text: ${token}.`);
    }
  }

  if (/^-\s*$/m.test(brief)) {
    failures.push(`${entry.releaseBrief} contains an empty bullet.`);
  }
}

export function validateMetadataForVersion(version, failures) {
  const manifest = parseJson("manifest.json", failures);
  const versions = parseJson("versions.json", failures);
  const packageJson = parseJson("package.json", failures);

  if (!manifest || !versions || !packageJson) {
    return;
  }

  if (manifest.version !== version) {
    failures.push(`manifest.json version ${manifest.version} does not match release ${version}.`);
  }

  if (packageJson.version !== version) {
    failures.push(`package.json version ${packageJson.version} does not match release ${version}.`);
  }

  if (versions[version] !== manifest.minAppVersion) {
    failures.push(`versions.json must map ${version} to manifest minAppVersion ${manifest.minAppVersion}.`);
  }
}

export function validateChangelogForVersion(version, failures) {
  const changelog = read("CHANGELOG.md");
  const escapedVersion = version.replaceAll(".", "\\.");
  const heading = new RegExp(`^## ${escapedVersion} - \\d{4}-\\d{2}-\\d{2}$`, "m");
  if (!heading.test(changelog)) {
    failures.push(`CHANGELOG.md must contain a dated heading for ${version}.`);
  }

  const section = extractChangelogSection(version, failures);
  if (!section) {
    return;
  }

  if (section.includes("TODO") || section.includes("TBD") || /^-\s*$/m.test(section)) {
    failures.push(`CHANGELOG.md section for ${version} contains placeholder content.`);
  }
}

export function extractChangelogSection(version, failures = []) {
  const changelog = read("CHANGELOG.md");
  const heading = new RegExp(`^## ${version.replaceAll(".", "\\.")} - \\d{4}-\\d{2}-\\d{2}$`);
  const nextHeading = /^## \d+\.\d+\.\d+(?:\s|-)/;
  const lines = changelog.split(/\r?\n/);
  const start = lines.findIndex((line) => heading.test(line));

  if (start === -1) {
    failures.push(`CHANGELOG.md section for ${version} was not found.`);
    return "";
  }

  const end = lines.findIndex((line, index) => index > start && nextHeading.test(line));
  return lines.slice(start + 1, end === -1 ? undefined : end).join("\n").trim();
}

export function localDateInAmsterdam(now = new Date()) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return formatter.format(now);
}
