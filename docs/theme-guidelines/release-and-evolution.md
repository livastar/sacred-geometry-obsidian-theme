# Release And Evolution

Sacred Geometry Systems should evolve like a design system: stable where users build on it, flexible where the visual language grows.

## Version Policy

Use semantic versioning:

- Patch: bug fixes, contrast fixes, minor selector repairs, documentation updates.
- Minor: new public tokens, new Canvas roles, new snippets, new templates, Style Settings support.
- Major: breaking token changes, major role vocabulary changes, removal of public aliases, large visual redesigns.

Current version:

```json
{
  "0.3.0": "1.5.0",
  "0.2.0": "1.5.0"
}
```

## Changelog Policy

Every release entry in `CHANGELOG.md` should include:

- Theme identity changes.
- CSS surface changes.
- Public token additions or deprecations.
- Canvas/template/snippet changes.
- Accessibility fixes.
- Compatibility changes.
- Known limitations.

Use clear dates in `YYYY-MM-DD` format.

## Compatibility Mapping

Update `versions.json` whenever `manifest.json` version changes.

Rules:

- Key is the theme version.
- Value is the minimum compatible Obsidian version.
- Do not remove old mappings unless intentionally ending support.
- If a release requires a newer Obsidian feature, update both `manifest.json` and `versions.json`.

## Public Token Stability

Public tokens are all documented `--sg-*` variables.

Rules:

- Do not remove a public token in patch releases.
- Prefer aliases when renaming.
- Keep deprecated aliases for at least one minor release.
- Document replacement tokens.
- Snippets and templates must use semantic tokens instead of raw hex colors when possible.

## Roadmap Gates

Before adding a feature to the public roadmap, assign it one of these states:

- `Exploring`: idea is plausible, no commitment.
- `Planned`: accepted for a future release, no user-facing promise date.
- `In progress`: actively being implemented.
- `Released`: shipped and documented.

Current roadmap defaults:

- More Canvas templates: `Planned`.
- Demo vault: `Planned`.
- Style Settings support: `Planned`.
- Optional Publish theme: `Exploring`.
- SacraMap plugin: `Exploring`, separate project.

## Style Settings Evolution

Style Settings support should be added only when:

- A valid `/* @settings */` block exists.
- Setting ids are stable and namespaced.
- Defaults match the base theme.
- Settings are tested with the Style Settings plugin installed and disabled.
- README says exactly which controls are available.

Use `templates/style-settings-block.template.css` as the starting point.

## Breaking Change Policy

A change is breaking if it:

- Removes or renames a public `--sg-*` token without alias.
- Changes semantic Canvas role names.
- Removes a documented snippet or template.
- Changes supported mode claims.
- Removes a documented customization hook.

Breaking changes require:

- Major version bump.
- Changelog warning.
- README migration note.
- Compatibility check against old snippets/templates.

## Feedback Loop

Issues should ask for:

- Obsidian version.
- Theme version.
- Operating system.
- Desktop or mobile.
- Enabled snippets/plugins.
- Screenshot.
- Reproduction steps.

High-priority feedback categories:

- Readability and contrast.
- Canvas usability.
- Broken Obsidian core UI.
- Mobile regressions.
- Release installation failures.
