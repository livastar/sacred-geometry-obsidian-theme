# Optional Obsidian Publish Support

Obsidian Publish support is optional for Sacred Geometry Systems. Do not advertise it or add `"publish": true` to the Community Themes catalog entry until `publish.css` exists and passes QA.

## Publish Is A Separate Context

The Obsidian app and Obsidian Publish share CSS variables, but they are different UI environments.

Rules:

- Build `publish.css` deliberately; do not dump app CSS into it.
- Keep it small.
- Avoid app-specific selectors such as workspace, ribbon, and Canvas internals.
- Avoid large embedded assets.
- Use conservative CSS features because visitors may use a wider browser range.

## Required File

If implemented, place this file at the repository root:

```text
publish.css
```

## Catalog Entry

Only after testing:

```json
{
  "name": "Sacred Geometry Systems",
  "author": "Stas",
  "repo": "livastar/sacred-geometry-obsidian-theme",
  "screenshot": "assets/screenshot-catalog.png",
  "modes": [
    "dark"
  ],
  "publish": true
}
```

## Publish CSS Scope

Publish CSS may style:

- Published page background.
- Text, headings, links, code, tables, blockquotes.
- Side navigation and outline.
- Search.
- Callouts.
- Graph or backlinks if present.

Publish CSS must not style:

- Obsidian desktop workspace internals.
- Editor-only CodeMirror selectors.
- Canvas-only internals unless Publish supports them.
- Plugin UI that is not available on Publish.

## QA Requirements

Before setting `"publish": true`:

- Test `publish.css` on a real or public Obsidian Publish site.
- Verify desktop and mobile browser widths.
- Verify readable notes, navigation, search, links, code, callouts, and tables.
- Verify no heavy flash of unstyled content from oversized CSS.
- Verify no remote network assets.
- Verify app theme remains unaffected.

## Template

Start from [templates/publish.template.css](templates/publish.template.css).
