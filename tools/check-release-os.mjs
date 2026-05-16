import { execFileSync } from "node:child_process";
import { exists, formatFailures, loadCalendar, parseArgs, read, releaseForVersion, validateReleaseBrief } from "./release-os-lib.mjs";

const failures = [];
const args = parseArgs(process.argv.slice(2));
const calendar = loadCalendar(failures);

if (calendar?.releases) {
  for (const entry of calendar.releases.filter((release) => release.kind === "release")) {
    validateReleaseBrief(entry, failures);
  }
}

const requiredFiles = [
  "docs/roadmap/README.md",
  "docs/roadmap/release-calendar.json",
  "docs/release/templates/release-brief-template.md",
  "docs/release/templates/release-notes-template.md",
  ".github/PULL_REQUEST_TEMPLATE.md",
  ".github/workflows/pr-release-guard.yml",
  ".github/workflows/release-draft-check.yml",
  ".github/workflows/scheduled-publish-release.yml",
  ".github/workflows/post-release-verify.yml",
  "tools/release-os-lib.mjs",
  "tools/check-release-os.mjs",
  "tools/check-release-draft.mjs",
  "tools/select-scheduled-release.mjs",
  "tools/extract-release-notes.mjs",
  "tools/verify-release-artifacts.mjs",
];

for (const filePath of requiredFiles) {
  if (!exists(filePath)) {
    failures.push(`${filePath} is required for the release operating system.`);
  }
}

if (exists(".github/PULL_REQUEST_TEMPLATE.md")) {
  const template = read(".github/PULL_REQUEST_TEMPLATE.md");
  for (const requiredText of [
    "## Why",
    "## Brand Alignment",
    "## User Value",
    "## Screenshots / Visual Proof",
    "## Validation",
    "## Release Decision",
    "## Risks / Follow-Up",
    "npm run build",
    "npm run check",
    "git diff --check",
  ]) {
    if (!template.includes(requiredText)) {
      failures.push(`.github/PULL_REQUEST_TEMPLATE.md must include ${requiredText}.`);
    }
  }
}

const workflowExpectations = [
  {
    path: ".github/workflows/pr-release-guard.yml",
    required: ["pull_request:", "permissions:", "contents: read", "npm run check:release-os", "npm run build", "npm run check", "git diff --exit-code -- theme.css"],
  },
  {
    path: ".github/workflows/release-draft-check.yml",
    required: ["workflow_dispatch:", "version:", "node tools/check-release-draft.mjs", "node tools/extract-release-notes.mjs"],
  },
  {
    path: ".github/workflows/scheduled-publish-release.yml",
    required: ["schedule:", "0 8 * * 5", "contents: write", "node tools/select-scheduled-release.mjs", "gh release create"],
  },
  {
    path: ".github/workflows/post-release-verify.yml",
    required: ["release:", "published", "node tools/verify-release-artifacts.mjs"],
  },
];

for (const workflow of workflowExpectations) {
  if (!exists(workflow.path)) {
    continue;
  }
  const body = read(workflow.path);
  for (const requiredText of workflow.required) {
    if (!body.includes(requiredText)) {
      failures.push(`${workflow.path} must include ${requiredText}.`);
    }
  }
}

for (const version of ["0.5.0", "0.6.0", "0.7.0", "0.8.0"]) {
  if (!releaseForVersion(calendar, version)) {
    failures.push(`Release calendar must include ${version}.`);
  }
}

if (args["release-system-scope"]) {
  try {
    const changedFiles = new Set();
    for (const diffArgs of [
      ["diff", "--name-only", "origin/main...HEAD"],
      ["diff", "--name-only", "--cached"],
      ["diff", "--name-only"],
    ]) {
      for (const filePath of execFileSync("git", diffArgs, { encoding: "utf8" }).split(/\r?\n/).filter(Boolean)) {
        changedFiles.add(filePath);
      }
    }
    const forbiddenForReleaseSystem = [...changedFiles].filter((filePath) => /^(styles|assets|canvas|snippets|templates)\//.test(filePath) || filePath === "theme.css");
    if (forbiddenForReleaseSystem.length > 0) {
      failures.push(`Release operating system PR must not touch visual implementation paths: ${forbiddenForReleaseSystem.join(", ")}.`);
    }
  } catch (error) {
    failures.push(`Unable to inspect release operating system diff: ${error.message}`);
  }
}

if (failures.length > 0) {
  console.error(formatFailures("Release operating system checks failed", failures));
  process.exit(1);
}

console.log("Release operating system checks passed.");
