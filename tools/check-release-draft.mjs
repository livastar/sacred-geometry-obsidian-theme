import { formatFailures, loadCalendar, parseArgs, releaseForVersion, validateChangelogForVersion, validateMetadataForVersion, validateReleaseBrief } from "./release-os-lib.mjs";

const args = parseArgs(process.argv.slice(2));
const version = args.version ?? process.env.RELEASE_VERSION;
const failures = [];

if (!version) {
  failures.push("Pass --version x.y.z or set RELEASE_VERSION.");
}

const calendar = loadCalendar(failures);
const entry = version ? releaseForVersion(calendar, version) : null;

if (version && !entry) {
  failures.push(`Release ${version} is not present in docs/roadmap/release-calendar.json.`);
}

if (entry) {
  validateReleaseBrief(entry, failures);
  validateMetadataForVersion(version, failures);
  validateChangelogForVersion(version, failures);

  if (args["require-approved"] && entry.status !== "approved") {
    failures.push(`Release ${version} must have calendar status approved before scheduled publishing.`);
  }
}

if (failures.length > 0) {
  console.error(formatFailures("Release draft checks failed", failures));
  process.exit(1);
}

console.log(`Release draft checks passed for ${version}.`);
