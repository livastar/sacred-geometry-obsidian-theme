# Accessibility And Compatibility

Accessibility is part of the theme contract, not an optional polish pass.

## Contrast

Rules:

- Body text on primary backgrounds should meet WCAG AA contrast where practical.
- Muted text must remain readable against dark panels.
- Links must be visually distinct from body text.
- Focus and active states must use more than color when practical: border, outline, contrast, underline, shadow, or shape.
- Decorative grid/geometry backgrounds must not compete with note content.

## Motion

Rules:

- Every animation must be optional or nonessential.
- Use `@media (prefers-reduced-motion: reduce)` to disable decorative pulse, glow, orbit, flow, and transition effects.
- Preserve state through color, border, contrast, or outline when motion is disabled.
- Do not animate text readability, editor layout, or controls.

## Keyboard And Focus

Rules:

- Focused interactive elements must be visible against obsidian surfaces.
- Focus style must not rely only on subtle glow.
- Command palette, menus, tabs, buttons, checkboxes, and inputs must remain usable without a mouse.
- Hover-only information is not acceptable for required state.

## Mobile

Mobile QA must include:

- Editor readability.
- File explorer and sidebars.
- Tabs and title bar.
- Command palette.
- Modals and settings panels.
- Canvas controls if available.

Rules:

- Avoid fixed widths that overflow narrow screens.
- Avoid typography that scales with viewport width.
- Keep touch targets readable and separated.
- Avoid decorative backgrounds behind dense mobile UI.

## Print And PDF

Print support is not a release blocker for `0.2.0`, but must not be hostile:

- Printed notes should not use near-black backgrounds by default.
- Links and headings should remain distinguishable.
- Future `@media print` work should strip heavy glows, shadows, and dark panels.

If print support is advertised, add explicit print QA to the release checklist.

## Selector Specificity

Rules:

- Prefer Obsidian CSS variables first.
- Use low-specificity selectors for app surfaces.
- Avoid long descendant chains tied to fragile internal DOM.
- Do not style every plugin by default; support plugin surfaces only when documented.
- Avoid `!important`.

Acceptable selector pattern:

```css
body.theme-dark {
  --background-primary: var(--sg-obsidian);
}
```

Risky selector pattern:

```css
.workspace .workspace-split .workspace-leaf .view-content div div div {
  /* too brittle */
}
```

## CSS Feature Compatibility

Obsidian app themes target modern Chromium, so modern CSS can be used carefully. Still:

- Document use of newer features such as `color-mix()`.
- Test in the current stable Obsidian desktop app.
- Test in Obsidian mobile before advertising mobile support.
- For `publish.css`, be more conservative because Publish visitors use a wider browser range.

## Disallowed Patterns

Do not publish CSS that:

- Loads remote assets.
- Sends data or telemetry.
- Depends on user vault paths.
- Hides core controls.
- Makes text unreadable in core modals.
- Breaks command palette usability.
- Requires a snippet for base readability.
- Claims support for light mode without `.theme-light` QA.
