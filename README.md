# Sacred Geometry Systems Theme for Obsidian

**Sacred Geometry Systems** is a dark Obsidian theme for complex knowledge maps, Canvas systems, and agent ecosystems. It turns the language of sacred geometry into a practical interface grammar: intersections, origins, ecosystems, architecture, progression, and feedback loops.

This repo contains the theme, a maintainable brand book, Canvas starter material, a map-node template, and semantic Canvas snippets.

## What This Theme Solves

Large Obsidian vaults and Canvas maps can become visually flat: everything has the same weight, flow is hard to trace, and the center of a system disappears. Sacred Geometry Systems gives complex work a darker, luminous structure with clear focus states, readable cards, meaningful edge colors, and repeatable map roles.

The focus is functional, not mystical. Geometry is used as a way to reveal hidden structure and help humans move between overview and detail.

## Brand System

The source of truth lives in [BRAND_BOOK.md](BRAND_BOOK.md). It defines:

- Core intention and tone.
- Sacred geometry language.
- Visual palette and typography.
- Obsidian Canvas usage.
- Live-map animation principles.
- Template library.
- The future SacraMap plugin concept.

## Features

- **Dark obsidian palette** with ivory text, gold structure, copper boundaries, deep indigo panels, and signal-cyan flow.
- **Canvas-first styling** for luminous cards, focused nodes, active links, and semantic map roles.
- **Geometry helpers** for rings, flower-of-life fields, spirals, circles, live-flow cues, and framed system panels.
- **Graph and callout styling** aligned with the same semantic colors.
- **Accessible motion behavior** through `prefers-reduced-motion`.
- **Starter artifacts** under `canvas/`, `templates/`, and `snippets/`.

## Installation

1. Copy this repository folder into your vault's `.obsidian/themes/` directory.
2. Restart Obsidian.
3. Open **Settings > Appearance** and select **Sacred Geometry Systems**.
4. Optional: copy the starter Canvas and template into a working vault and enable `snippets/SG Canvas Cards.css` under **Settings > Appearance > CSS snippets**.

## Working With Canvas

Use the starter Canvas as a model for systems maps:

- Mission / north star.
- Core system.
- Agents.
- Resources.
- Interactions.
- Knowledge clusters.
- Decisions and outcomes.
- Flow tracing and decision paths.

Use `templates/map-node.md` for reusable note-backed nodes. Use snippet classes such as `.node-agent`, `.node-resource`, `.node-decision`, `.node-system`, and `.node-knowledge` to give cards semantic styling.

## Customization

The main brand tokens live in `styles/tokens.css`. Stable public tokens include:

```css
:root {
  --sg-obsidian: #03080d;
  --sg-ivory: #f5ead6;
  --sg-gold: #d8a84f;
  --sg-copper: #b87345;
  --sg-deep-indigo: #12122d;
  --sg-signal-cyan: #16c7e8;
}
```

Backward-compatible aliases from the original DS-Light theme remain available so older snippets keep rendering.

## Accessibility

The theme keeps body text high contrast on dark surfaces, uses state color with borders instead of color alone where practical, and disables decorative motion when the user requests reduced motion.

## Roadmap

- Expand the Canvas template library with separate Agent Ecosystem, Project Constellation, Decision Tree, Knowledge Atlas, Flow Network, and Resource Map examples.
- Add a demo vault that shows the full brand language in real notes.
- Explore the SacraMap concept as a separate plugin project. SacraMap is documented here as a product direction, not implemented in this theme repo.

## License

This project is licensed under the MIT License; see `LICENSE` for details.
