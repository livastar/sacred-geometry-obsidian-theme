# Marketplace Requirements

This file defines the publication contract for adding Sacred Geometry Systems to Obsidian Community Themes.

## Required Repository State

The public GitHub repository must contain:

- `manifest.json`
- `theme.css`
- `versions.json`
- `README.md`
- `LICENSE`
- `CHANGELOG.md`
- `assets/screenshot-catalog.png`

The catalog entry should point to `livastar/sacred-geometry-obsidian-theme`.

## Manifest Rules

The release manifest should use official theme metadata fields:

```json
{
  "name": "Sacred Geometry Systems",
  "version": "0.2.0",
  "minAppVersion": "1.5.0",
  "author": "Stas",
  "authorUrl": "https://github.com/livastar"
}
```

Rules:

- `name` is the public display name and must match the catalog entry.
- `version` must be semantic versioning in `x.y.z` form.
- `minAppVersion` must match the value in `versions.json` for the same release.
- Avoid plugin-only fields in the release manifest unless Obsidian theme review explicitly accepts them.
- If legacy fields remain in source, document why and verify that the catalog still loads the theme.

## Theme CSS Rules

Root `theme.css` is the canonical release artifact.

Rules:

- Release `theme.css` must be self-contained.
- Source imports such as `@import url("styles/tokens.css")` are allowed during development only if the release process flattens them.
- Do not load remote fonts, images, stylesheets, scripts, analytics, or any network resource.
- Do not reference vault-local user files.
- Do not use `!important` unless a short comment documents the exact Obsidian specificity issue and a reviewer approves it.
- Prefer Obsidian CSS variables over deep DOM selectors.

## Screenshot Rules

The catalog screenshot must be:

- Located at `assets/screenshot-catalog.png`.
- 16:9 aspect ratio.
- Preferably `512x288`.
- A real Obsidian screenshot with Sacred Geometry Systems enabled.
- Dark-mode, because catalog mode is `["dark"]`.
- Legible at thumbnail size.

Generated imagery can be used for ideation or brand work, but not as the final catalog screenshot.

## Community Catalog Entry

The entry to append to `community-css-themes.json` should be:

```json
{
  "name": "Sacred Geometry Systems",
  "author": "Stas",
  "repo": "livastar/sacred-geometry-obsidian-theme",
  "screenshot": "assets/screenshot-catalog.png",
  "modes": [
    "dark"
  ]
}
```

Only add `"publish": true` after `publish.css` exists and passes the checks in [publish-optional.md](publish-optional.md).

## Version Compatibility

`versions.json` must map each theme version to the minimum Obsidian version it supports:

```json
{
  "0.2.0": "1.5.0"
}
```

Update this file whenever `manifest.json` version changes.

## GitHub Release Rules

For every public release:

- The Git tag must exactly match the `manifest.json` version, for example `0.2.0`.
- The release title should match the version.
- Release notes should summarize user-facing changes and compatibility changes.
- Attach the final release `manifest.json` and final self-contained `theme.css`.
- Verify the files attached to the release match the committed files for that tag.

## Local Assets Only

Community themes must work offline and protect user privacy. Therefore:

- No remote `url("https://...")`.
- No CDN fonts.
- No externally hosted background images.
- No analytics or tracking.
- Embedded fonts/images must use data URLs and remain small enough not to make `theme.css` unwieldy.

## Mode Declaration

Sacred Geometry Systems is dark-only for the current release.

- Catalog `modes` must be `["dark"]`.
- README must say the theme is dark-only.
- QA must verify behavior when Obsidian's base color scheme is dark.
- If light mode is added later, the catalog entry becomes `["dark", "light"]` only after `.theme-light` has full coverage and visual QA passes.
