# Reference Theme Analysis

Reviewed on 2026-04-29 against the public GitHub repositories listed below. Web content is treated as reference material only; this guideline pack is the source of truth for Sacred Geometry Systems.

## Comparison Matrix

| Theme | Repository | Useful pattern | What to reuse | What to avoid |
| --- | --- | --- | --- | --- |
| Obsidian Nord | `insanum/obsidian_nord` | Minimal root with screenshots, MIT license, simple CSS. | Keep the release surface small and obvious. | Too little onboarding for a concept-heavy theme. |
| Wasp | `santiyounger/Wasp-Obsidian-Theme` | Simple README with dark/light screenshots and install note. | Make the first preview and installation path immediately visible. | Legacy file layout without current release metadata. |
| ITS Theme | `SlRvb/Obsidian--ITS-Theme` | Large guide, snippets, images, Style Settings, `publish.css`. | Separate guide material from release CSS; document optional snippets and plugin-adjacent features. | Letting power-user docs obscure the basic install path. |
| Things | `colineckert/obsidian-things` | Polished README, feature list, supported plugins, checkbox styling, manual and marketplace install. | Use a friendly README order and explicitly list supported extras. | Over-promising plugin behavior that the theme does not own. |
| Blue Topaz | `PKM-er/Blue-Topaz_Obsidian-css` | Extensive previews, snippets, demo vault, changelog, community evolution. | Provide visual coverage and long-term evolution docs. | Shipping oversized assets or remote/background image dependencies. |

## Key Elements For Theme Creation

- A theme needs a small, reliable release surface: root `theme.css`, root `manifest.json`, root `versions.json`, root `README.md`, root `LICENSE`, and a catalog screenshot.
- A theme also needs a larger contributor surface: brand book, source CSS modules, snippets, templates, demo vault examples, visual QA scenarios, and release checklists.
- A successful README leads with a screenshot and immediate install clarity, then moves into features, customization, accessibility, support, and credits.
- Strong themes make customization explicit. If Style Settings is supported, ship a tested `/* @settings */` block; if not, say which CSS variables are stable.
- Strong themes show the real product. Catalog and README previews must come from Obsidian, not generated mockups.
- Snippets and demo assets should be optional. The base theme must remain useful when installed alone.

## Reference-Specific Takeaways

### Nord

Nord proves that a theme can be understandable with a very small root. Use this as the release baseline: every mandatory artifact should be visible without digging.

For Sacred Geometry Systems, this means release files must stay clean even if the source design system grows.

### Wasp

Wasp demonstrates the value of immediate visual proof. The README does not make users infer the mood of the theme; screenshots do that job.

For Sacred Geometry Systems, every public page should show dark notes, Canvas, and graph behavior early.

### ITS

ITS is the strongest reference for ecosystem theming: guide pages, snippets, alternate schemes, images, and Style Settings all create a living theme platform.

For Sacred Geometry Systems, use this model for Canvas roles, map templates, and future Style Settings, but keep app theme behavior separate from future SacraMap plugin behavior.

### Things

Things is a good README model: it states features, supported plugins, install options, feedback, credits, and support without making the user hunt.

For Sacred Geometry Systems, copy the ordering discipline, not the product style.

### Blue Topaz

Blue Topaz shows how a theme evolves into a community artifact: previews, snippets, demo vault material, and a visible change history.

For Sacred Geometry Systems, this supports a future demo vault and template library. Keep the catalog release lightweight and local-only.

## Reusable Pattern Checklist

- Root-level release files are easy to identify.
- Screenshots show actual Obsidian UI in the supported mode.
- README has both Marketplace and manual install instructions.
- Optional snippets are documented as optional.
- Style Settings support is either implemented or clearly listed as future work.
- Demo vault or Canvas examples are separated from core theme installation.
- Changelog tells users what changed and whether public tokens were added, changed, or deprecated.
- License is present and compatible with included assets.
