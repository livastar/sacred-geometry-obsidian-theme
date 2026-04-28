# Preflight Checklist

Run this before opening a catalog PR or publishing a release.

## Repository

- [ ] Root `manifest.json` exists.
- [ ] Root `theme.css` exists.
- [ ] Root `versions.json` exists.
- [ ] Root `README.md` exists.
- [ ] Root `CHANGELOG.md` exists.
- [ ] Root `LICENSE` exists.
- [ ] `assets/screenshot-catalog.png` exists.
- [ ] No required release file is hidden inside a subfolder.

## Manifest

- [ ] `name` is `Sacred Geometry Systems`.
- [ ] `version` is semantic versioning in `x.y.z` form.
- [ ] `minAppVersion` is `1.5.0` or intentionally updated.
- [ ] `author` is present.
- [ ] `authorUrl` is present.
- [ ] Manifest version matches `versions.json`.
- [ ] Manifest name matches README and catalog entry.
- [ ] Any legacy `ds-light` fields are removed or documented before submission.

## Versions

- [ ] `versions.json` is valid JSON.
- [ ] Current version key exists.
- [ ] Current version maps to current `minAppVersion`.
- [ ] Older compatibility mappings are preserved.

## CSS

- [ ] Release `theme.css` is self-contained.
- [ ] No unresolved `@import` references in the release artifact.
- [ ] No remote `url("http...")` or `url("https...")`.
- [ ] No CDN fonts.
- [ ] No vault-local file references.
- [ ] No `!important`, or every use has a documented approved exception.
- [ ] `prefers-reduced-motion` is handled for decorative motion.
- [ ] Core Obsidian variables are preferred over brittle selectors.

## Catalog Asset

- [ ] Screenshot is real Obsidian UI.
- [ ] Screenshot is 16:9.
- [ ] Screenshot is preferably `512x288`.
- [ ] Screenshot is dark mode.
- [ ] Screenshot contains no private data.
- [ ] Screenshot remains legible as a thumbnail.

## README

- [ ] Follows [../readme-blueprint.md](../readme-blueprint.md).
- [ ] Has screenshot.
- [ ] Has Marketplace install section or pre-approval note.
- [ ] Has manual install section.
- [ ] Explains optional snippets/templates.
- [ ] States dark-only support.
- [ ] States Style Settings status accurately.
- [ ] Does not claim SacraMap is implemented.
- [ ] Links are not broken.

## Catalog Entry

- [ ] Uses `name: "Sacred Geometry Systems"`.
- [ ] Uses `author: "Stas"`.
- [ ] Uses `repo: "livastar/sacred-geometry-obsidian-theme"`.
- [ ] Uses `screenshot: "assets/screenshot-catalog.png"`.
- [ ] Uses `modes: ["dark"]`.
- [ ] Omits `"publish": true` unless `publish.css` passes QA.
