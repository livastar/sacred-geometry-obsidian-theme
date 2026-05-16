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

# Community Release Alignment Checklist

- [x] Read Obsidian's May 12, 2026 Community update.
- [x] Verify the live Community Themes catalog entry.
- [x] Compare catalog metadata with the released manifest.
- [x] Align manifest author with the catalog author.
- [x] Add release-check coverage for catalog author alignment.
- [x] Run `npm run build`.
- [x] Run `npm run check`.
- [x] Run `git diff --check`.
- [ ] Publish the aligned patch release.

# Release Operating System Checklist

- [x] Create a clean `origin/main` worktree for `codex/release-operating-system`.
- [x] Run baseline `npm run build`.
- [x] Run baseline `npm run check`.
- [x] Add release roadmap, release calendar, release briefs, and templates.
- [x] Add release guard scripts.
- [x] Add GitHub Actions workflows for PR guard, draft check, scheduled publish, and post-release verification.
- [x] Run `npm run build`.
- [x] Run `npm run check`.
- [x] Run release guard validation.
- [x] Run `git diff --check`.
- [x] Review final diff and open the release operating system PR.

## Result

Changed files:

- `.github/PULL_REQUEST_TEMPLATE.md`
- `.github/workflows/pr-release-guard.yml`
- `.github/workflows/release-draft-check.yml`
- `.github/workflows/scheduled-publish-release.yml`
- `.github/workflows/post-release-verify.yml`
- `docs/roadmap/`
- `docs/release/templates/`
- `tools/*release*.mjs`
- `package.json`
- `tasks/todo.md`
- `tasks/lessons.md`

Verification evidence:

- `for file in tools/*.mjs; do node --check "$file"; done` passed.
- `npm run build` passed.
- `npm run check` passed.
- `npm run check:release-os` passed.
- `node tools/check-release-os.mjs --release-system-scope` passed.
- `npx --yes github-actionlint@1.7.12 .github/workflows/*.yml` passed.
- `git diff --check` passed.
- `git diff --exit-code -- theme.css` passed.

Remaining risk:

- Scheduled publishing remains a no-op until a future feature PR updates its calendar entry to `approved` with visual QA evidence and matching release metadata.

PR:

- https://github.com/livastar/sacred-geometry-obsidian-theme/pull/4

# Image Asset Cleanup Checklist

- [x] Inspect root image files and release screenshot requirements.
- [x] Move root PNG files into `assets/` with descriptive names.
- [x] Keep `assets/screenshot-catalog.png` as the real Obsidian catalog screenshot path.
- [x] Add the new Atlas Controls artwork to README release visibility.
- [x] Record the asset cleanup in the changelog and visual-assets guide.
- [x] Verify no root PNG files remain and referenced assets exist.
