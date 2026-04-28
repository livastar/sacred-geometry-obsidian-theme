# README Blueprint

The public README is a user-facing installation and trust document. It must be short enough to scan and complete enough that a reviewer can understand the theme without opening every file.

## Required Order

Use this order for `README.md`.

1. `# Sacred Geometry Systems`
2. Catalog screenshot or hero screenshot.
3. One-sentence promise.
4. Short description of who the theme is for.
5. Feature list.
6. Preview section.
7. Installation.
8. Canvas workflow.
9. Customization.
10. Style Settings status.
11. Accessibility.
12. Compatibility.
13. Roadmap.
14. Feedback and issues.
15. Credits.
16. License.

## Section Requirements

### Title

Use the exact catalog name:

```md
# Sacred Geometry Systems
```

### Screenshot

Use the catalog screenshot when available:

```md
![Sacred Geometry Systems catalog screenshot](assets/screenshot-catalog.png)
```

The image must be a real Obsidian capture.

### One-Sentence Promise

State the product clearly:

```md
Sacred Geometry Systems is a dark Obsidian theme for living systems maps, Canvas workflows, and complex knowledge ecosystems.
```

### Who It Is For

Name the audience and use case:

- Knowledge workers managing large vaults.
- Canvas users mapping systems, agents, decisions, and feedback loops.
- Builders who want a stable visual language for future project/plugin work.

### Features

Keep features concrete:

- Dark obsidian palette.
- Canvas-first styling.
- Sacred geometry helper classes.
- Semantic node roles.
- Graph and callout styling.
- Reduced-motion handling.
- Optional starter Canvas, snippets, and templates.

### Preview

Include or link these screenshots:

- Notes/editor view.
- Canvas starter map.
- Graph view.
- Callouts and code.
- Optional mobile-sized capture.

### Installation

Include both paths:

- Marketplace install after approval.
- Manual install from GitHub for pre-release users.

Manual instructions must say where the theme folder goes:

```text
<vault>/.obsidian/themes/Sacred Geometry Systems/
```

### Canvas Workflow

Explain that Canvas extras are optional. List the semantic roles:

- Mission
- Core system
- Agent
- Resource
- Interaction
- Knowledge
- Decision
- Outcome

### Customization

Point to stable public tokens in `styles/tokens.css`, especially:

```css
--sg-obsidian
--sg-ivory
--sg-gold
--sg-copper
--sg-deep-indigo
--sg-signal-cyan
```

Warn that raw internals may change unless documented as public `--sg-*` tokens.

### Style Settings Status

Use one of these exact positions:

- `Style Settings is supported.` Include a tested settings section and examples.
- `Style Settings is planned.` Explain which CSS tokens can be overridden manually today.
- `Style Settings is not currently planned.` Keep customization focused on snippets.

For current release planning, use `Style Settings is planned`.

### Accessibility

Mention:

- High contrast dark surfaces.
- Visible focus states.
- Reduced motion behavior.
- State indicated with border/shape/contrast, not color alone where practical.

### Compatibility

State:

- Current version.
- Minimum Obsidian version.
- Dark-only support.
- Whether Publish is supported.

### Roadmap

Keep roadmap honest and scoped:

- More Canvas templates.
- Demo vault.
- Style Settings support.
- Optional Publish theme.
- SacraMap as a future separate plugin concept, not implemented here.

### Feedback

Point to GitHub issues. Ask users to include:

- Obsidian version.
- Desktop or mobile.
- Operating system.
- Screenshot.
- Reproduction steps.

### Credits

Credit:

- Obsidian sample theme.
- Reference themes.
- Contributors.
- Asset authors if assets are added.

### License

Link to `LICENSE` and state MIT unless the license changes.

## README Rejection Conditions

Do not publish if the README:

- Uses an outdated theme name.
- Omits screenshot or install instructions.
- Claims light mode without `.theme-light` coverage.
- Claims Style Settings support without a valid `/* @settings */` block.
- Claims SacraMap behavior exists inside the theme.
- Uses remote images as the only preview media.
- Links to missing files.
