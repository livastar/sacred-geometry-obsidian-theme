# Sacred Geometry Systems Theme for Obsidian

![Sacred Geometry Systems preview](assets/screenshot-catalog.png)

**Sacred Geometry Systems** is a dark and light Obsidian theme for complex knowledge maps, Canvas systems, and agent ecosystems. It turns the language of sacred geometry into a practical interface grammar: intersections, origins, ecosystems, architecture, progression, and feedback loops.

This repo contains the theme, a maintainable brand book, Canvas starter material, guided Living Map templates, a map-node template, and semantic Canvas snippets.

## What This Theme Solves

Large Obsidian vaults and Canvas maps can become visually flat: everything has the same weight, flow is hard to trace, and the center of a system disappears. Sacred Geometry Systems gives complex work a darker, luminous structure with clear focus states, readable cards, meaningful edge colors, and repeatable map roles.

The focus is functional, not mystical. Geometry is used as a way to reveal hidden structure and help humans move between overview and detail.

## About the Creator

Sacred Geometry Systems is created by **Stanislav Ivanov** as part of the Livastar Observer ecosystem. The theme is designed for people who use Obsidian to map systems, projects, agent workflows, decisions, and knowledge structures with more visual clarity.

Useful links:

- [Tripmindful](https://tripmindful.nl/) - a related mindful preparation project.
- [Livastar Observer](https://livastar.observer) - the wider research and product studio behind this work.
- [LinkedIn](https://www.linkedin.com/in/ivanostanis) - connect with Stanislav Ivanov.
- [Buy Me a Coffee](https://buymeacoffee.com/livastar) - support ongoing theme, template, and systems-mapping work.

## Brand System

The source of truth lives in [BRAND_BOOK.md](https://github.com/livastar/sacred-geometry-obsidian-theme/blob/main/BRAND_BOOK.md). It defines:

- Core intention and tone.
- Sacred geometry language.
- Visual palette and typography.
- Obsidian Canvas usage.
- Live-map animation principles.
- Template library.
- The future SacraMap plugin concept.

## Features

- **Dual dark/light palettes** with obsidian or ivory surfaces, gold structure, copper boundaries, deep indigo panels, and signal-cyan flow.
- **Canvas-first styling** for luminous cards, focused nodes, active links, and semantic map roles.
- **Geometry helpers** for rings, flower-of-life fields, spirals, circles, live-flow cues, and framed system panels.
- **Graph and callout styling** aligned with the same semantic colors.
- **Accessible motion behavior** through `prefers-reduced-motion`.
- **Starter artifacts** under `canvas/`, including guided Living Map templates, plus reusable note templates and snippets.

## Current Release

Current version: `0.5.0`, scheduled for May 22, 2026.

This release adds guided Living Map Canvas templates for projects, agents, decisions, knowledge, flow networks, and resources while preserving the current app compatibility contract: Obsidian `1.5.0` or newer, dark mode, and light mode.

The previous patch, `0.4.1`, kept the Community Themes metadata aligned with the published catalog author. The latest controls milestone, `0.4.0`, shipped Atlas Controls through Style Settings for structure gold, signal cyan, boundary copper, orbit violet, reduced glow, disabled geometry texture, and stronger focus boundaries.

Release assets are available from the [GitHub releases page](https://github.com/livastar/sacred-geometry-obsidian-theme/releases).

## Installation

### Marketplace

1. In Obsidian, open **Settings > Appearance**.
2. Select **Manage** next to Themes.
3. Search for **Sacred Geometry Systems**.
4. Install and select the theme.

### Manual Install

1. Download the latest release from [GitHub releases](https://github.com/livastar/sacred-geometry-obsidian-theme/releases).
2. Copy `manifest.json`, `theme.css`, and `versions.json` into:

   ```text
   <vault>/.obsidian/themes/Sacred Geometry Systems/
   ```

3. Restart Obsidian.
4. Open **Settings > Appearance** and select **Sacred Geometry Systems**.

Optional: copy the starter Canvas, guided templates, and map-node template into a working vault and enable `snippets/SG Canvas Cards.css` under **Settings > Appearance > CSS snippets**.

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

Use `templates/map-node.md` for reusable note-backed nodes. Use semantic classes such as `.node-mission`, `.node-core-system`, `.node-agent`, `.node-resource`, `.node-interaction`, `.node-knowledge`, `.node-decision`, and `.node-outcome` to give cards role-based styling. Older aliases such as `.node-system`, `.node-flow`, and `.node-focus` remain supported.

Guided Living Map templates live in `canvas/templates/`:

| Template | Use when |
| --- | --- |
| `Agent Ecosystem.canvas` | You need to map people, automations, models, tools, and handoffs. |
| `Project Constellation.canvas` | You need a project overview that keeps workstreams, decisions, and delivery connected. |
| `Decision Tree.canvas` | You need to compare options and leave a clear decision record. |
| `Knowledge Atlas.canvas` | You need to organize sources, concepts, evidence, gaps, and synthesis. |
| `Flow Network.canvas` | You need to trace movement of work, data, requests, or feedback. |
| `Resource Map.canvas` | You need to organize tools, references, assets, owners, and readiness. |

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
  --sg-role-mission: var(--sg-gold-bright);
  --sg-role-agent: var(--sg-signal-cyan);
  --sg-role-decision: var(--sg-copper);
}
```

Backward-compatible aliases from the original DS-Light theme remain available so older snippets keep rendering.

## Style Settings

Sacred Geometry Systems includes optional Style Settings controls for users who want to tune the theme without writing custom CSS.

Current controls include:

- Structure gold.
- Signal cyan.
- Boundary copper.
- Orbit violet.
- Reduced glow intensity.
- Disabled geometry texture.
- Stronger focus boundaries.

These controls are designed to preserve the theme's symbolic language while making the vault more comfortable for long writing sessions, dense Canvas maps, and everyday knowledge work.

## Accessibility

The theme keeps body text high contrast on dark and light surfaces, uses state color with borders instead of color alone where practical, and disables decorative motion when the user requests reduced motion.

## Compatibility

- Theme version: `0.5.0`
- Minimum Obsidian version: `1.5.0`
- Modes: dark and light
- Obsidian Publish: not currently advertised

## Contributing

Use [CONTRIBUTING.md](https://github.com/livastar/sacred-geometry-obsidian-theme/blob/main/CONTRIBUTING.md) for issue quality, design principles, local checks, and scope boundaries. Visual bugs should include Obsidian version, theme version, platform, base color scheme, enabled snippets/plugins, reproduction steps, and a sanitized screenshot.

## Roadmap

Sacred Geometry Systems will keep evolving as a practical visual language for complex thinking in Obsidian.

Planned release dates are target dates and can move if visual QA, Community Themes checks, or user feedback reveal a release blocker.

- **0.5.0 Living Map Templates** - scheduled for May 22, 2026. Start from guided Canvas patterns for projects, agents, decisions, knowledge, and feedback loops.
- **0.6.0 Semantic Note Language** - planned for May 29, 2026. Bring the same mission, decision, knowledge, and outcome cues from Canvas into everyday notes.
- **Feedback and bugfix buffer** - reserved for June 5, 2026. Use this week for user feedback, Marketplace issues, and patch releases if needed.
- **0.7.0 Constellation Graph** - planned for June 12, 2026. Make vault relationships feel more readable, intentional, and alive.
- **0.8.0 Sacred Atlas Demo Vault** - planned for June 19, 2026. Explore a working example vault built around systems mapping, project clarity, and knowledge evolution.

The full release operating plan lives in the [release roadmap](https://github.com/livastar/sacred-geometry-obsidian-theme/blob/main/docs/roadmap/README.md).

Future work will stay grounded in the same principle: geometry should reveal structure before it decorates.

## License

This project is licensed under the MIT License; see `LICENSE` for details.
