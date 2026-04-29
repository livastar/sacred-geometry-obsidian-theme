# Release Checklist

Use this after preflight and visual QA pass.

## Before Tagging

- [ ] `manifest.json` version is final.
- [ ] `versions.json` contains the same version.
- [ ] `CHANGELOG.md` has a dated entry for the version.
- [ ] README screenshots and links are current.
- [ ] Catalog screenshot exists.
- [ ] Release `theme.css` is self-contained.
- [ ] Style Settings status is accurate.
- [ ] Publish status is accurate.
- [ ] Working tree contains only intentional changes.

## Release Artifact

- [ ] Build or prepare final `theme.css`.
- [ ] Validate `manifest.json`.
- [ ] Validate `versions.json`.
- [ ] Confirm no remote CSS assets.
- [ ] Confirm no `!important` exceptions are undocumented.

## GitHub Release

- [ ] Create tag matching manifest version exactly, for example `0.3.0`.
- [ ] Create GitHub release with the same title.
- [ ] Add release notes from `templates/release-notes.template.md`.
- [ ] Attach final `manifest.json`.
- [ ] Attach final `theme.css`.
- [ ] Publish release.

## Catalog Submission

- [ ] Fork or branch `obsidianmd/obsidian-releases`.
- [ ] Append the entry from `templates/community-css-themes-entry.template.json` to `community-css-themes.json`.
- [ ] Verify JSON formatting.
- [ ] Open PR using the submission checklist.
- [ ] Address review comments.

## After Approval

- [ ] Update README install section from beta/manual to Marketplace-first.
- [ ] Announce release only after the theme appears in Obsidian.
- [ ] Watch issues for install, contrast, mobile, and Canvas regressions.
