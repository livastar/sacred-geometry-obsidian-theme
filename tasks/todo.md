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
- [x] Publish the aligned patch release.

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

# Community Page Content Audit

- [x] Inspect live Community page overview, scorecard, updates, and image metadata.
- [x] Compare live page version with `manifest.json`, `package.json`, `versions.json`, Git tag, and GitHub release assets.
- [x] Verify catalog screenshot dimensions and source asset.
- [x] Add a current release section to `README.md`.
- [x] Replace Community-broken relative README links with absolute GitHub links.
- [x] Add dated future roadmap entries to `README.md`.
- [x] Run `npm run build`.
- [x] Run `npm run check`.
- [x] Run `git diff --check`.

## Result

Changed files:

- `README.md`
- `tasks/todo.md`
- `tasks/lessons.md`

Verification evidence:

- Live Community page showed current version `0.4.1`, 4 releases, 100% health, and review passed.
- `0.4.1` GitHub release exists with `manifest.json`, `theme.css`, `versions.json`, and `screenshot-catalog.png` assets.
- Catalog screenshot is `512x288`, matching the recommended Community directory dimensions.
- `npm run build` passed: `Built theme.css from 8 source modules.`
- `npm run check` passed: `Release checks passed.`
- `git diff --check` passed.
- `git diff --exit-code -- theme.css` passed after the build.

Remaining risk:

- The Community page will reflect the README improvements only after the repository change is pushed and the Community directory refreshes from GitHub.
