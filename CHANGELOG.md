# Changelog

## 0.4.0 - 2026-05-15

- Fixed Community Themes scan warnings by removing unsupported extended system font tokens and consolidating duplicate `body`, `body.theme-dark`, and `body.theme-light` selectors in the release CSS.
- Added release checks and a no-dependency build script to keep root `theme.css` self-contained and aligned with the modular source files under `styles/`.
- Added public semantic role tokens for living systems maps: mission, core system, agent, resource, interaction, knowledge, decision, and outcome.
- Improved Canvas and callout role styling with clearer semantic state cues, reduced-motion behavior, and backward-compatible Canvas snippet aliases.
- Added contributor hygiene with `CONTRIBUTING.md`, issue templates, and `.DS_Store` ignore rules.
- Updated README installation, Style Settings status, compatibility, and contribution guidance now that the theme is available in the Community Themes catalog.

## 0.3.0 - 2026-04-29

- Added full light mode support with an ivory atlas palette, adapted text contrast, Canvas, graph, callout, code, and Obsidian app shell states.
- Moved Obsidian app shell styling into `styles/app.css` and regenerated the self-contained release `theme.css`.
- Removed the legacy `obsidian.css` compatibility shim so Community Themes validation no longer warns about legacy theme files.
- Updated release metadata and documentation for dual dark/light catalog support.
- Replaced the catalog screenshot with a multi-use-case Obsidian preview.

## 0.2.0 - 2026-04-29

- Regenerated the public brand from Sacred Geometry DS-Light to Sacred Geometry Systems.
- Added `BRAND_BOOK.md` as the source-of-truth brand book.
- Rebuilt the CSS token system around obsidian, ivory, gold, copper, deep indigo, and signal cyan.
- Converted the theme to dark mode and refreshed notes, Canvas, callouts, graph view, and geometry helpers.
- Reworked Canvas snippets, the starter Canvas, and the map-node template around agent ecosystems, flow tracing, knowledge clusters, decisions, and outcomes.
- Added README creator context and useful links for Tripmindful, Livastar Observer, LinkedIn, and Buy Me a Coffee.
- Documented SacraMap as a future commercial plugin concept only.

## 0.1.0

- Initial release of Sacred Geometry DS-Light.
- Included modular CSS files for tokens, typography, Canvas styling, callouts, graph view, and sacred-geometry helper classes.
- Included a starter Canvas file and a node template for map cards.
