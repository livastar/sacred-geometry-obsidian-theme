# Theme Structure

Sacred Geometry Systems has two structures: the contributor structure and the release structure.

## Required Release Structure

These files must exist at the repository root before catalog submission:

```text
manifest.json
theme.css
versions.json
README.md
CHANGELOG.md
LICENSE
assets/screenshot-catalog.png
```

The release package that GitHub exposes to Obsidian must include at least `manifest.json` and self-contained `theme.css`.

## Recommended Contributor Structure

```text
.
  BRAND_BOOK.md
  CHANGELOG.md
  LICENSE
  README.md
  manifest.json
  theme.css
  versions.json
  assets/
    screenshot-catalog.png
    preview-notes.png
    preview-canvas.png
    preview-graph.png
  styles/
    tokens.css
    typography.css
    canvas.css
    callouts.css
    graph.css
    sacred-geometry.css
  snippets/
    SG Canvas Cards.css
  templates/
    map-node.md
  canvas/
    Sacred Atlas Starter.canvas
  docs/
    theme-guidelines/
  publish.css
```

`publish.css` is optional. Do not add it to the catalog entry until it is implemented and tested.

## File Responsibilities

| File or folder | Responsibility |
| --- | --- |
| `BRAND_BOOK.md` | Source of truth for intention, tone, forms, palette, Canvas semantics, and SacraMap boundary. |
| `theme.css` | Canonical release CSS. It must be self-contained for public releases. |
| `styles/` | Development source modules. These can stay modular, but must be flattened for release. |
| `obsidian.css` | Optional local compatibility shim only. Do not rely on it for the official release path. |
| `manifest.json` | Release metadata. Keep it aligned with catalog name, version, min app version, and author. |
| `versions.json` | Compatibility map from theme version to minimum Obsidian version. |
| `README.md` | Public landing page and user install guide. |
| `CHANGELOG.md` | Chronological release history and public token changes. |
| `assets/` | Catalog screenshot and README preview media. |
| `snippets/` | Optional CSS snippets that extend the base theme. |
| `templates/` | Optional note templates for Canvas-backed workflows. |
| `canvas/` | Optional starter Canvas and demo maps. |
| `docs/theme-guidelines/` | Maintainer and contributor publication rules. |

## Release CSS Policy

During development, modular CSS is allowed:

```css
@import url("styles/tokens.css");
@import url("styles/typography.css");
```

For release, produce a root `theme.css` that contains the imported CSS directly. Obsidian's release flow expects `theme.css` to be available as a single release artifact, so imports must not point to missing files.

## Token Policy

Public theme tokens use the `--sg-*` prefix.

Rules:

- New semantic tokens are preferred over raw color reuse.
- Existing public tokens must not be removed in a patch or minor release.
- If a token is renamed, keep an alias for at least one minor release.
- Document token additions, removals, and aliases in `CHANGELOG.md`.
- Snippets and templates should use semantic tokens, not hard-coded hex colors.

## Optional Assets And Demos

Snippets, starter Canvas files, and templates are useful for Sacred Geometry Systems because the theme has a workflow language. They must remain optional:

- Installing only the theme must still produce a complete, readable Obsidian UI.
- README must distinguish base theme behavior from optional snippets/templates.
- Demo vault files must never be required for marketplace installation.
