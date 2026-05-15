import fs from "node:fs";
import path from "node:path";

export const themeModules = [
  "styles/tokens.css",
  "styles/typography.css",
  "styles/canvas.css",
  "styles/callouts.css",
  "styles/graph.css",
  "styles/sacred-geometry.css",
  "styles/app.css",
];

export function buildThemeCss(repoRoot) {
  const header = `/*
 * Sacred Geometry Systems Theme
 *
 * Release CSS for Obsidian Community Themes. Source modules remain in styles/
 * for maintainability; this root file is self-contained for marketplace use.
 */
`;

  return [
    header.trimEnd(),
    ...themeModules.map((modulePath) => {
      const absolutePath = path.join(repoRoot, modulePath);
      const body = fs.readFileSync(absolutePath, "utf8").trimEnd();
      return `\n\n/* === ${modulePath} === */\n${body}`;
    }),
    "",
  ].join("\n");
}
