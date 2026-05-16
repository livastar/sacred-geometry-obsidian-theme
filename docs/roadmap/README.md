# Sacred Geometry Systems Release Roadmap

This roadmap is the public operating plan for the next feature releases. It keeps the theme moving in small, testable steps while protecting the Community Themes release contract.

## Release Rule

One feature becomes one branch, one pull request, and one release. Release branches start from the latest `origin/main` in an isolated worktree.

Each feature release must include:

- A release brief under `docs/roadmap/releases/`.
- Version updates in `manifest.json`, `package.json`, and `versions.json`.
- A dated `CHANGELOG.md` entry.
- Updated README or docs when the public behavior changes.
- Regenerated root `theme.css`.
- Evidence from `npm run build`, `npm run check`, and `git diff --check`.
- Visual QA notes or screenshots when the changed surface is visual.

## Scheduled Release Train

GitHub release publishing is guarded and scheduled. The scheduled workflow runs on Fridays at `08:00 UTC` and publishes only when today's Europe/Amsterdam release date matches a calendar entry with `status: "approved"` and all release guards pass. Feature PRs move their own entry from `planned` to `approved` only after implementation, release metadata, changelog, regenerated CSS, and visual QA are ready.

| Version | Date | Feature | Public Hook |
| --- | --- | --- | --- |
| `0.5.0` | 2026-05-22 | Living Map Templates | Start from guided Canvas patterns for projects, agents, decisions, knowledge, and feedback loops. |
| `0.6.0` | 2026-05-29 | Semantic Note Language | Bring mission, decision, knowledge, and outcome cues into everyday notes. |
| Buffer | 2026-06-05 | Feedback and bugfix window | Use this week for user feedback, Marketplace issues, and patch releases if needed. |
| `0.7.0` | 2026-06-12 | Constellation Graph | Make vault relationships feel more readable, intentional, and alive. |
| `0.8.0` | 2026-06-19 | Sacred Atlas Demo Vault | Explore a working example vault built around systems mapping, project clarity, and knowledge evolution. |

The machine-readable schedule lives in `docs/roadmap/release-calendar.json`.

## What Stays Manual

The workflows automate checks, release-note extraction, tags, GitHub releases, and release assets. They do not automate public announcements, Marketplace messaging, or final visual approval. Visual themes can pass static checks and still feel wrong, so visual judgment remains part of the release gate.

## Recently Shipped

- `0.4.0`: Atlas Controls and release-quality foundation.
- `0.4.1`: Community Themes metadata alignment.
