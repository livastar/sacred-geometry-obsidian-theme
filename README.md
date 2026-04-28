# Sacred Geometry DS‑Light Theme for Obsidian

Welcome to the **Sacred Geometry DS‑Light** theme for Obsidian.  This theme is
inspired by the principles of sacred geometry and is designed to help you
maintain spatial clarity while working with complex knowledge maps.  It
implements a calm, neutral palette, clear card shapes, and a geometry‑aware
layout system.  The focus is on *function*, not mysticism—rings, gates and
lattices are used as navigation metaphors rather than as metaphysical claims.

## What problem this theme solves

Obsidian’s native Canvas is a powerful tool for connecting notes, but its
default styling can make large systems feel overwhelming.  The DS‑Light theme
introduces a restrained colour system and a set of geometry‑inspired
patterns—concentric rings for responsibility layers, intersecting circles for
consent gates, lattices for research evidence and a soft future band for
speculative work.  The result is an environment that invites you to zoom out
without losing context and to zoom in without distraction.

## Features

* **Calm palette** – Gold, teal, rose, ink and parchment colours balanced for
  light and dark modes.
* **Geometry tokens** – CSS custom properties for centres, rings, gates and
  lattices that you can override in your own snippets.
* **Canvas styling** – Rounded cards, subtle shadows and meaningful focus rings
  for Canvas maps; different colours for edges representing trust, flow and
  evidence relationships.
* **Semantic zoom support** – Cards are legible at all zoom levels; title,
  owner and status remain visible when you zoom out.
* **Accessible by design** – Colours meet WCAG AA contrast requirements where
  possible; motion cues can be disabled with the `prefers-reduced-motion`
  media query.
* **Templates and snippets** – A starter map node template and CSS snippets
  for Canvas cards are provided under `templates/` and `snippets/`.

## Installation

1. Copy the entire `ds-light` folder into your vault’s `.obsidian/themes/`
   directory.  Alternatively, if you plan to publish this as a Community
   Theme, package this folder as a standalone repository with this structure.
2. Restart Obsidian, open **Settings → Appearance**, and select **Sacred
   Geometry DS‑Light** from the list of available themes.
3. (Optional) Create a new Canvas and load the provided starter canvas from
   `canvas/Sacred Atlas Starter.canvas` to explore the recommended geometry
   patterns.  Use the provided `templates/map-node.md` as a frontmatter
   template when creating new nodes.

## Demo vault

This theme ships with templates and a starter canvas.  To experience the
system in action, duplicate the `canvas/` and `templates/` folders into a
fresh vault.  Create a new Canvas and insert cards from the `templates/`
folder; use the colour tokens defined in `styles/tokens.css` to customise
additional snippets.

## Style settings

The theme exposes a small set of Style Settings under the CSS variables in
`styles/tokens.css`.  You can override these in Obsidian’s **Style Settings**
plugin or by creating your own snippet.  For example, to change the centre
colour you can set:

```css
:root {
  --sg-center-color: #ffd700;
}
```

## Accessibility

We strive to make the DS‑Light theme usable by everyone.  Colours are chosen
for sufficient contrast, motion is kept meaningful and minimal, and there is
always a non‑motion alternative.  If you have feedback on accessibility or
wish to contribute improvements, please open an issue or pull request.

## Roadmap

This is an initial release.  Planned enhancements include:

- Additional Canvas templates for consent flows, research lattices and
  production rings.
- A full demo vault demonstrating agent ecosystems and systems maps.
- Integration with a future live‑map plugin that supports semantic zoom,
  lens filters and animation playback.

## License

This project is licensed under the MIT License; see `LICENSE` for details.

## Credits

This theme is based on research into Obsidian theme structures and the
principles of sacred geometry.  Special thanks to the maintainers of the Nord
theme, ITS theme, Things theme and Blue Topaz for setting high bars for
packaging, documentation and ecosystem support.
