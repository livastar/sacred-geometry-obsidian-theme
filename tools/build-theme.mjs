import fs from "node:fs";
import path from "node:path";
import { buildThemeCss, themeModules } from "./theme-build-lib.mjs";

const repoRoot = process.cwd();
const output = buildThemeCss(repoRoot);

fs.writeFileSync(path.join(repoRoot, "theme.css"), output);
console.log(`Built theme.css from ${themeModules.length} source modules.`);
