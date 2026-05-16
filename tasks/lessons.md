# Lessons

- Use `variable-themed-color` for Style Settings color controls that map to mode-specific theme tokens, so dark and light defaults remain distinct while exposing one public control per token.
- Keep the machine-readable `manifest.json` author aligned with the Community Themes catalog author. The public README can still name the human creator separately.
- Keep scheduled release automation on the default branch, use UTC cron, and gate the release against a Europe/Amsterdam calendar entry before publishing.
- Keep generated brand and release artwork in `assets/` with descriptive filenames. Do not replace `assets/screenshot-catalog.png` unless the replacement is a real Obsidian screenshot.
