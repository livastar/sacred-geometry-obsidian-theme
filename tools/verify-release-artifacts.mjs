import { exists, formatFailures, parseArgs, read, sha256, validateMetadataForVersion } from "./release-os-lib.mjs";

const args = parseArgs(process.argv.slice(2));
const version = args.version ?? process.env.RELEASE_VERSION ?? process.env.GITHUB_REF_NAME;
const assetDir = args["asset-dir"] ?? "release-assets";
const failures = [];

if (!version) {
  failures.push("Pass --version x.y.z, set RELEASE_VERSION, or run from a release tag context.");
}

if (version) {
  validateMetadataForVersion(version, failures);
}

for (const filePath of ["manifest.json", "theme.css"]) {
  if (!exists(filePath)) {
    failures.push(`${filePath} is missing from the repository checkout.`);
  }
}

for (const fileName of ["manifest.json", "theme.css"]) {
  const assetPath = `${assetDir}/${fileName}`;
  if (!exists(assetPath)) {
    failures.push(`${assetPath} was not downloaded from the GitHub release.`);
    continue;
  }

  if (sha256(fileName) !== sha256(assetPath)) {
    failures.push(`${assetPath} does not match committed ${fileName}.`);
  }
}

if (exists("theme.css")) {
  const css = read("theme.css");
  if (css.includes("@import")) {
    failures.push("theme.css must not contain @import.");
  }
  if (/url\(\s*["']?https?:/i.test(css)) {
    failures.push("theme.css must not load remote assets.");
  }
  if (/!important\b/.test(css)) {
    failures.push("theme.css must not contain !important declarations.");
  }
}

if (failures.length > 0) {
  console.error(formatFailures("Release artifact verification failed", failures));
  process.exit(1);
}

console.log(`Release artifacts match committed files for ${version}.`);
