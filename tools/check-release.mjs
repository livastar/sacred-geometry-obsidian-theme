import fs from "node:fs";
import path from "node:path";
import { buildThemeCss } from "./theme-build-lib.mjs";

const repoRoot = process.cwd();
const read = (filePath) => fs.readFileSync(path.join(repoRoot, filePath), "utf8");
const failures = [];

function fail(message) {
  failures.push(message);
}

function parseJson(filePath) {
  try {
    return JSON.parse(read(filePath));
  } catch (error) {
    fail(`${filePath} is not valid JSON: ${error.message}`);
    return null;
  }
}

function selectorLines(css) {
  const withoutComments = css.replace(/\/\*[\s\S]*?\*\//g, (match) => {
    const lineBreaks = match.match(/\n/g)?.length ?? 0;
    return "\n".repeat(lineBreaks);
  });
  const matches = [...withoutComments.matchAll(/(?:^|\})(\s*[^@{}][^{}]*)\{/g)];
  const results = [];

  for (const match of matches) {
    const rawSelector = match[1].trim();
    const line = css.slice(0, match.index + match[0].lastIndexOf(rawSelector)).split("\n").length;
    for (const selector of rawSelector.split(",")) {
      const normalized = selector.trim().replace(/\s+/g, " ");
      if (normalized) {
        results.push({ selector: normalized, line });
      }
    }
  }

  return results;
}

function listFilesRecursive(directoryPath, predicate) {
  const absoluteDirectory = path.join(repoRoot, directoryPath);
  if (!fs.existsSync(absoluteDirectory)) {
    return [];
  }

  const results = [];
  for (const entry of fs.readdirSync(absoluteDirectory, { withFileTypes: true })) {
    const relativePath = path.join(directoryPath, entry.name);
    if (entry.isDirectory()) {
      results.push(...listFilesRecursive(relativePath, predicate));
    } else if (predicate(relativePath)) {
      results.push(relativePath);
    }
  }
  return results;
}

function checkThemeCss() {
  const css = read("theme.css");

  if (css.includes("@import")) {
    fail("theme.css must be self-contained and must not contain @import.");
  }

  if (/url\(\s*["']?https?:/i.test(css)) {
    fail("theme.css must not load remote CSS assets.");
  }

  if (/!important\b/.test(css)) {
    fail("theme.css must not contain !important declarations.");
  }

  const unsupportedFonts = ["ui-sans-serif", "ui-monospace", "system-ui", "BlinkMacSystemFont"];
  for (const token of unsupportedFonts) {
    if (css.includes(token)) {
      fail(`theme.css uses unsupported extended system font token: ${token}`);
    }
  }

  const duplicateTargets = new Set(["body", "body.theme-light", "body.theme-dark"]);
  const seen = new Map();
  for (const { selector, line } of selectorLines(css)) {
    if (!duplicateTargets.has(selector)) {
      continue;
    }
    if (seen.has(selector)) {
      fail(`theme.css has duplicate selector "${selector}" at line ${line}; first used at line ${seen.get(selector)}.`);
    } else {
      seen.set(selector, line);
    }
  }

  if (buildThemeCss(repoRoot) !== css) {
    fail("theme.css was not up to date with styles/ source modules.");
  }
}

function checkMetadata() {
  const manifest = parseJson("manifest.json");
  const versions = parseJson("versions.json");

  if (!manifest || !versions) {
    return;
  }

  if (manifest.name !== "Sacred Geometry Systems") {
    fail('manifest.json name must be "Sacred Geometry Systems".');
  }

  if (manifest.author !== "livastar") {
    fail('manifest.json author must match the Community Themes catalog author "livastar".');
  }

  if (!/^\d+\.\d+\.\d+$/.test(manifest.version)) {
    fail("manifest.json version must use x.y.z semantic versioning.");
  }

  if (versions[manifest.version] !== manifest.minAppVersion) {
    fail("versions.json must map manifest version to manifest minAppVersion.");
  }

  const packageJson = parseJson("package.json");
  if (packageJson && packageJson.version !== manifest.version) {
    fail("package.json version must match manifest.json version.");
  }
}

function checkCanvasFiles() {
  const canvasFiles = listFilesRecursive("canvas", (filePath) => filePath.endsWith(".canvas"));

  if (canvasFiles.length === 0) {
    fail("At least one Canvas file is required under canvas/.");
  }

  for (const filePath of canvasFiles) {
    const canvas = parseJson(filePath);
    if (!canvas) {
      continue;
    }

    if (canvas.type !== "canvas") {
      fail(`${filePath} must use type "canvas".`);
    }

    if (canvas.version !== "0.2.1") {
      fail(`${filePath} must use Canvas version "0.2.1".`);
    }

    if (!Array.isArray(canvas.nodes)) {
      fail(`${filePath} must contain a nodes array.`);
      continue;
    }

    const nodeIds = new Set();
    for (const node of canvas.nodes) {
      if (!node.id || nodeIds.has(node.id)) {
        fail(`${filePath} contains a missing or duplicate node id: ${node.id ?? "(missing)"}.`);
      }
      nodeIds.add(node.id);

      if (typeof node.text === "string" && node.text.length > 260) {
        fail(`${filePath} node "${node.id}" text is too long for overview-scale scanning.`);
      }
    }

    if (!Array.isArray(canvas.edges)) {
      fail(`${filePath} must contain an edges array.`);
      continue;
    }

    const edgeIds = new Set();
    for (const edge of canvas.edges) {
      if (!edge.id || edgeIds.has(edge.id)) {
        fail(`${filePath} contains a missing or duplicate edge id: ${edge.id ?? "(missing)"}.`);
      }
      edgeIds.add(edge.id);

      if (!nodeIds.has(edge.fromNode)) {
        fail(`${filePath} edge "${edge.id}" references missing fromNode "${edge.fromNode}".`);
      }

      if (!nodeIds.has(edge.toNode)) {
        fail(`${filePath} edge "${edge.id}" references missing toNode "${edge.toNode}".`);
      }
    }
  }
}

function checkHygiene() {
  const requiredFiles = [
    "README.md",
    "CHANGELOG.md",
    "LICENSE",
    "CONTRIBUTING.md",
    "assets/screenshot-catalog.png",
    "canvas/templates/README.md",
    "canvas/templates/Agent Ecosystem.canvas",
    "canvas/templates/Project Constellation.canvas",
    "canvas/templates/Decision Tree.canvas",
    "canvas/templates/Knowledge Atlas.canvas",
    "canvas/templates/Flow Network.canvas",
    "canvas/templates/Resource Map.canvas",
    ".github/ISSUE_TEMPLATE/bug_report.yml",
    ".github/ISSUE_TEMPLATE/feature_request.yml",
  ];

  for (const filePath of requiredFiles) {
    if (!fs.existsSync(path.join(repoRoot, filePath))) {
      fail(`${filePath} is required for release hygiene.`);
    }
  }

  const gitignore = fs.existsSync(path.join(repoRoot, ".gitignore")) ? read(".gitignore") : "";
  if (!gitignore.split(/\r?\n/).includes(".DS_Store")) {
    fail(".gitignore must ignore .DS_Store.");
  }

  const readme = read("README.md");
  for (const requiredText of ["Marketplace", "Style Settings", "CONTRIBUTING.md"]) {
    if (!readme.includes(requiredText)) {
      fail(`README.md must mention ${requiredText}.`);
    }
  }
}

checkThemeCss();
checkMetadata();
checkCanvasFiles();
checkHygiene();

if (failures.length > 0) {
  console.error("Release checks failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Release checks passed.");
