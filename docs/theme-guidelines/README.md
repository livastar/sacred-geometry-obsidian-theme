# Sacred Geometry Systems Theme Guidelines

This folder is the publish-readiness operating manual for **Sacred Geometry Systems**, a dark Obsidian theme for living systems maps, Canvas workflows, and agent ecosystems.

The goal is simple: every theme change should preserve the brand language, remain installable from Obsidian's Community Themes catalog, and leave future project/plugin work with stable visual contracts.

## Current Defaults

| Field | Value |
| --- | --- |
| Theme name | `Sacred Geometry Systems` |
| Catalog modes | `["dark"]` |
| Repository | `livastar/sacred-geometry-obsidian-theme` |
| Current version | `0.2.0` |
| Minimum Obsidian version | `1.5.0` |
| Catalog screenshot | `assets/screenshot-catalog.png` |
| Publish support | Optional-ready, not required for app theme release |
| Creator | `Stanislav Ivanov` |

## Public Useful Links

These links belong in the public README theme page and any future README-derived theme page:

- [Tripmindful](https://tripmindful.nl/)
- [Livastar Observer](https://livastar.observer)
- [LinkedIn](https://www.linkedin.com/in/ivanostanis)
- [Buy Me a Coffee](https://buymeacoffee.com/livastar)

## Navigation

| File | Purpose |
| --- | --- |
| [reference-theme-analysis.md](reference-theme-analysis.md) | Lessons from Nord, Wasp, ITS, Things, and Blue Topaz. |
| [marketplace-requirements.md](marketplace-requirements.md) | Exact Community Themes catalog and release requirements. |
| [theme-structure.md](theme-structure.md) | Required repo anatomy and release artifact rules. |
| [readme-blueprint.md](readme-blueprint.md) | Strict README order and content requirements. |
| [visual-system-and-assets.md](visual-system-and-assets.md) | Screenshot, preview, naming, and asset rules. |
| [canvas-project-ecosystem.md](canvas-project-ecosystem.md) | Canvas role system, templates, and future project compatibility. |
| [accessibility-compatibility.md](accessibility-compatibility.md) | Accessibility, mobile, selector, and CSS safety rules. |
| [release-and-evolution.md](release-and-evolution.md) | Versioning, changelog, token stability, and roadmap governance. |
| [publish-optional.md](publish-optional.md) | Optional `publish.css` support rules. |
| [checklists/preflight.md](checklists/preflight.md) | Static checks before submission or release. |
| [checklists/visual-qa.md](checklists/visual-qa.md) | Manual visual QA scenarios. |
| [checklists/release.md](checklists/release.md) | Release and catalog submission checklist. |

## Definition Of Done

A release is not publish-ready until all of these are true:

- Root `manifest.json`, `theme.css`, `README.md`, `LICENSE`, `CHANGELOG.md`, and `versions.json` exist.
- `versions.json` maps the current manifest version to the current minimum Obsidian version.
- Release `theme.css` is self-contained. Source modules under `styles/` are allowed, but the released root file must not depend on missing imported files.
- CSS makes no remote network calls, uses no remote fonts/images, and contains no `!important` declarations unless a reviewer approves a documented exception.
- Catalog screenshot is a real Obsidian capture at `assets/screenshot-catalog.png`, 16:9, preferably `512x288`.
- Community catalog entry uses `name: "Sacred Geometry Systems"`, `repo: "livastar/sacred-geometry-obsidian-theme"`, `screenshot: "assets/screenshot-catalog.png"`, and `modes: ["dark"]`.
- README follows [readme-blueprint.md](readme-blueprint.md) and includes creator context, useful links, install, customization, Canvas usage, accessibility, roadmap, feedback, credits, and license sections.
- Canvas starter, snippets, templates, and `BRAND_BOOK.md` agree on the same semantic roles and public `--sg-*` tokens.
- Visual QA has passed for notes, Canvas, graph view, callouts, modals, command palette, tabs, sidebars, and a mobile-sized viewport.
- Accessibility QA has passed for contrast, focus visibility, reduced motion, and non-color state cues.

## Current Repo Actions Before Catalog Submission

- Keep `manifest.json` normalized to official theme metadata fields and aligned with the public repository name `livastar/sacred-geometry-obsidian-theme`.
- Add `assets/screenshot-catalog.png` from a real Obsidian screenshot. Existing generated images can be references, but not the final catalog proof.
- Decide the release packaging path: either flatten modular CSS into root `theme.css`, or include an automated release step that always produces a self-contained `theme.css`.
- Treat Style Settings support as a roadmap item unless a valid `/* @settings */` block is added and tested.
- Keep Obsidian Publish support optional until `publish.css` is created, tested, and cataloged with `"publish": true`.

## Source Links

- [Obsidian sample theme](https://github.com/obsidianmd/obsidian-sample-theme)
- [Submit your theme](https://docs.obsidian.md/Themes/App+themes/Submit+your+theme)
- [Theme guidelines](https://docs.obsidian.md/Themes/App+themes/Theme+guidelines)
- [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
- [Embed fonts and images](https://docs.obsidian.md/Themes/App+themes/Embed+fonts+and+images+in+your+theme)
- [Manifest reference](https://docs.obsidian.md/Reference/Manifest)
- [Community theme catalog JSON](https://github.com/obsidianmd/obsidian-releases/blob/master/community-css-themes.json)
- [Style Settings plugin](https://github.com/mgmeyers/obsidian-style-settings)
