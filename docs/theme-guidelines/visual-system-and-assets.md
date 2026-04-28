# Visual System And Assets

Visual assets are evidence. They must show the actual Obsidian theme and the real workflows Sacred Geometry Systems supports.

## Catalog Screenshot

Required file:

```text
assets/screenshot-catalog.png
```

Requirements:

- Real Obsidian capture with Sacred Geometry Systems enabled.
- 16:9 aspect ratio.
- Prefer `512x288`.
- Dark mode.
- No generated mockup as final proof.
- No private vault data.
- No personal information in visible filenames, notes, tabs, or graph labels.
- Must remain legible at small thumbnail size.

## Recommended Preview Assets

```text
assets/preview-notes.png
assets/preview-canvas.png
assets/preview-graph.png
assets/preview-callouts.png
assets/preview-mobile.png
```

Each preview should show a different promise:

- Notes: typography, headings, links, lists, tables, code, blockquotes.
- Canvas: mission, core system, agents, resources, interactions, knowledge, decisions, outcomes.
- Graph: node/edge contrast and focus state.
- Callouts: info, flow, decision, warning, knowledge.
- Mobile: sidebars, editor, toolbar, and readable text in a narrow viewport.

## Screenshot Capture Rules

- Use a demo vault or sanitized vault.
- Use the current release branch.
- Set Obsidian base color scheme to dark.
- Disable unrelated CSS snippets unless the screenshot is specifically documenting snippets.
- Include enough UI chrome to prove it is Obsidian.
- Avoid oversized decorative backgrounds that obscure readability.
- Crop only after confirming the screenshot still shows the real product.

## Asset Naming

Use lowercase, hyphenated names:

```text
screenshot-catalog.png
preview-canvas.png
preview-notes.png
preview-graph.png
```

Avoid:

- Spaces in filenames.
- Dates in filenames.
- Tool-generated names.
- Ambiguous names like `final.png`.

## Asset Policy

- No remote assets in CSS.
- No externally hosted fonts.
- No CDN images.
- No user-private vault assets in screenshots.
- Embedded assets must be license-compatible and documented.
- If a generated image is used as a brand illustration in docs, label it as illustrative and do not use it as catalog proof.

## Visual Language Rules

Sacred Geometry Systems uses geometry as structure, not decoration.

| Visual cue | Meaning | Allowed use |
| --- | --- | --- |
| Gold | Structure, focus, priority | Headings, focus rings, active system centers. |
| Signal cyan | Flow, activity, live state | Links, active paths, data/task movement. |
| Copper | Boundaries, decisions, risk | Decision nodes, warnings, constraints. |
| Deep indigo | Nested depth | Panels, grouped content, quiet layers. |
| Ivory | Text and contrast | Body copy, important labels. |
| Violet orbit | Relationship and knowledge clusters | Secondary semantic groups. |

Glows are reserved for state. Do not use glow as generic decoration.

## Preview Acceptance Criteria

The preview set passes when:

- A new user can understand the theme mood in 10 seconds.
- A reviewer can see actual Obsidian UI.
- Canvas semantics are visible without reading the full README.
- Text remains readable at thumbnail and full size.
- No preview relies on private, sensitive, or unrelated content.
