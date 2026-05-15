# Contributing to Sacred Geometry Systems

Thanks for helping improve Sacred Geometry Systems. This theme is built for Obsidian users who map complex systems, Canvas workflows, agent ecosystems, decisions, and feedback loops.

## Before You Open an Issue

Search existing issues first. If you are reporting a visual bug, include:

- Obsidian version.
- Theme version.
- Operating system and whether this is desktop or mobile.
- Base color scheme: dark or light.
- Enabled snippets and relevant plugins.
- A screenshot with private vault content removed.
- Clear steps to reproduce the issue in a small vault when possible.

## Design Principles

- Geometry is structure, not decoration.
- Canvas readability is part of the core contract.
- Gold means structure, focus, or priority.
- Signal cyan means flow, activity, or live state.
- Copper means boundary, decision, warning, or constraint.
- Violet means relationship, orbit, or knowledge cluster.
- Motion must remain optional and respect `prefers-reduced-motion`.

## Local Checks

Run these before opening a pull request:

```bash
npm run build
npm run check
git diff --check
```

`theme.css` is the release artifact. Edit source modules under `styles/`, then run `npm run build` to regenerate the root file.

## Scope Boundaries

This repository ships an Obsidian app theme and optional Canvas starter assets. It does not implement SacraMap plugin behavior, automated layout, infinite zoom, live playback, or system health computation.

Do not add remote fonts, CDN assets, telemetry, vault-local paths, or private content to the theme.
