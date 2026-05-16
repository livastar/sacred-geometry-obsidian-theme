import { formatFailures, loadCalendar, localDateInAmsterdam, parseArgs } from "./release-os-lib.mjs";

const args = parseArgs(process.argv.slice(2));
const failures = [];
const calendar = loadCalendar(failures);
const localDate = args.date ?? process.env.RELEASE_DATE_OVERRIDE ?? localDateInAmsterdam();

function output(name, value) {
  console.log(`${name}=${String(value).replaceAll("\n", "%0A")}`);
}

if (failures.length > 0) {
  console.error(formatFailures("Scheduled release selection failed", failures));
  process.exit(1);
}

const due = calendar.releases.filter((entry) => entry.kind === "release" && entry.releaseDate === localDate);

if (due.length === 0) {
  output("found", "false");
  output("reason", `No release is scheduled for ${localDate} Europe/Amsterdam.`);
  process.exit(0);
}

if (due.length > 1) {
  console.error(`Multiple releases are scheduled for ${localDate}: ${due.map((entry) => entry.version).join(", ")}`);
  process.exit(1);
}

const [entry] = due;

if (entry.status !== "approved") {
  output("found", "false");
  output("reason", `Release ${entry.version} is scheduled for ${localDate}, but status is ${entry.status}.`);
  process.exit(0);
}

output("found", "true");
output("version", entry.version);
output("title", entry.title);
output("release_brief", entry.releaseBrief);
output("reason", `Release ${entry.version} is approved for ${localDate} Europe/Amsterdam.`);
