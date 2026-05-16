# Atlas Controls Implementation Checklist

- [x] Read Atlas Controls handoff files.
- [x] Confirm `0.4.0` is not tagged or released.
- [x] Create clean `origin/main` implementation worktree.
- [x] Add Style Settings source module.
- [x] Wire Style Settings module into the release build.
- [x] Update README Style Settings and public roadmap sections.
- [x] Update `CHANGELOG.md` for the pending `0.4.0` release.
- [x] Update theme-guidelines Style Settings documentation/template.
- [x] Regenerate root `theme.css`.
- [x] Run `npm run build`.
- [x] Run `npm run check`.
- [x] Run `git diff --check`.
- [x] Review final diff.

## Result

Changed files:

- `styles/style-settings.css`
- `tools/theme-build-lib.mjs`
- `theme.css`
- `README.md`
- `CHANGELOG.md`
- `docs/theme-guidelines/README.md`
- `docs/theme-guidelines/templates/style-settings-block.template.css`
- `tasks/todo.md`
- `tasks/lessons.md`

Verification evidence:

- `npm run build` passed.
- `npm run check` passed.
- `git diff --check` passed.

Remaining risk:

- Manual Obsidian visual QA with the Style Settings plugin still needs to be run before release tagging.
