import fs from "node:fs";
import path from "node:path";
import { extractChangelogSection, formatFailures, parseArgs, repoRoot } from "./release-os-lib.mjs";

const args = parseArgs(process.argv.slice(2));
const version = args.version ?? process.env.RELEASE_VERSION;
const output = args.output ?? process.env.RELEASE_NOTES_OUTPUT;
const failures = [];

if (!version) {
  failures.push("Pass --version x.y.z or set RELEASE_VERSION.");
}

const section = version ? extractChangelogSection(version, failures) : "";

if (section.includes("TODO") || section.includes("TBD") || /^-\s*$/m.test(section)) {
  failures.push(`Release notes for ${version} contain placeholder content.`);
}

if (failures.length > 0) {
  console.error(formatFailures("Release note extraction failed", failures));
  process.exit(1);
}

const notes = `# Sacred Geometry Systems ${version}\n\n${section}\n\n## Release Files\n\n- manifest.json\n- theme.css\n`;

if (output) {
  fs.mkdirSync(path.dirname(path.join(repoRoot, output)), { recursive: true });
  fs.writeFileSync(path.join(repoRoot, output), notes);
  console.log(`Wrote release notes to ${output}.`);
} else {
  process.stdout.write(notes);
}
