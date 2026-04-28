# Canvas Project Ecosystem

Sacred Geometry Systems is Canvas-first, but Canvas assets remain optional. The base theme must work without them.

## Purpose

Canvas support should help users map complex systems:

- Origin and mission.
- Core system logic.
- Agents and capabilities.
- Resources and tools.
- Interactions and channels.
- Knowledge clusters.
- Decisions and outcomes.
- Feedback loops and evolution over time.

## Semantic Roles

| Role | Meaning | Visual cue |
| --- | --- | --- |
| `mission` | North star or purpose | Gold focus, centered hierarchy. |
| `core-system` | Routing, orchestration, architecture | Gold structure, raised panel. |
| `agent` | Human, model, automation, or tool acting in the system | Signal cyan flow. |
| `resource` | Data, prompt, asset, reference, reusable input | Ivory/gold resource cue. |
| `interaction` | Where work crosses people, tools, or decisions | Signal cyan link/flow cue. |
| `knowledge` | Memory, sources, insights, learned material | Violet orbit cue. |
| `decision` | Choice point, constraint, tradeoff | Copper boundary cue. |
| `outcome` | Result, signal, quality, health, feedback | Gold/cyan completion cue. |

## Required Optional Assets

The optional Canvas ecosystem should include:

- `canvas/Sacred Atlas Starter.canvas`
- `templates/map-node.md`
- `snippets/SG Canvas Cards.css`

These must stay synchronized with `BRAND_BOOK.md`.

## Template Rules

Canvas and note templates must:

- Use the same role names as this document.
- Include a short summary that remains readable from overview scale.
- Support relationships, decisions, outcomes, and references.
- Avoid hard-coding private paths or vault-specific assumptions.
- Keep SacraMap references conceptual unless a separate plugin implements them.

## Snippet Rules

Snippets must:

- Use public `--sg-*` tokens.
- Add optional semantic roles without breaking the base theme.
- Avoid remote assets.
- Respect `prefers-reduced-motion`.
- Remain readable if custom classes are absent.

## Project Evolution

Future projects may use this theme as their visual foundation. To keep that viable:

- Do not change semantic role names casually.
- Add new role names only when they represent a distinct workflow concept.
- Keep backward-compatible class aliases for at least one minor release.
- Document role changes in `CHANGELOG.md`.
- Keep demo Canvas maps small enough for users to inspect and adapt.

## SacraMap Boundary

SacraMap is a future separate plugin concept. The theme may provide visual language for it, but must not claim implemented behavior such as:

- Infinite zoom.
- Automated layout.
- Live data playback.
- System health computation.
- Plugin panels or commands.

README wording must say SacraMap is a future concept unless and until a separate plugin exists.
