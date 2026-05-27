# Accessibility & Edge Cases — Checklist

Acest fișier conține checklistul de accesibilitate și note per-component pentru landing page. Folosește-l înainte de PR pentru a te asigura că fiecare componentă respectă bune practici.

## General checklist (aplicabil la nivel de pagină)
- All interactive elements must be reachable and usable with keyboard (Tab, Enter/Space, Esc where relevant).
- Use semantic HTML where possible (button, nav, header, main, footer, form, label).
- Ensure color contrast >= 4.5:1 for normal text, >= 3:1 for large text.
- Provide focus styles for interactive elements and ensure they are visible on all themes.
- Images conveying information must have meaningful alt text; decorative images should have empty alt (alt="").
- Forms must have labels (visible or sr-only) and provide error messages and success states.
- Use ARIA only when semantic HTML is insufficient. Keep ARIA attributes minimal and correct (aria-controls, aria-expanded, role).
- For dynamic content updates (carousels, AJAX loads), use `aria-live` or other announcements where appropriate.
- Test with reduced-motion preference (prefers-reduced-motion) and honor it for animations.

## Performance & network edge cases
- Lazy-load non-critical images (below the fold) and use low-quality placeholders if needed.
- Provide size attributes or layout placeholders to avoid layout shift (CLS).
- Handle slow networks: show skeleton or loading states for components that fetch data.
- Offline/failed requests: show retry and clear error message.

## Localization & content edge cases
- Allow text wrapping; avoid fixed-width containers that truncate important content.
- Prepare for longer translations (DE, FR) — spacing and layout must handle +30% text length.
- Dates, numbers, currency should be localizable via helper functions.

## Per-component notes

- `Navbar`
  - Hamburger must have `aria-expanded` and `aria-controls` attributes.
  - Links must be anchor elements with href, keyboard-focusable.
  - Ensure skip-to-content link is available for keyboard users (optional but recommended).

- `CTAButton` (ui/CTAButton.tsx)
  - If rendered as `<a>` ensure role and tabindex are correct; otherwise use `<button>`.
  - Provide `aria-disabled` when disabled and disable pointer events.

- `Hero`
  - Headline uses heading hierarchy (h1 on hero only once per page).
  - Media (image/video): provide descriptive alt text or aria-hidden if decorative.

- `FeatureCard` / `FeaturesGrid`
  - If cards are clickable, ensure the whole card uses an accessible link/button.
  - Provide accessible names for icons (aria-hidden on decorative icons).

- `FAQItem` (accordion)
  - Each trigger button must have `aria-expanded` and `aria-controls`.
  - The content region should have `role="region"` and `aria-labelledby` when helpful.
  - Manage focus: when opening long content on small screens, ensure user stays oriented.

- `NewsletterForm`
  - Input should have `<label>` and the submit must be keyboard accessible.
  - Show inline validation messages and associate them with inputs via `aria-describedby`.

- `Footer`
  - Links grouped with headings (visually or via sr-only) for screen reader navigation.

## Testing suggestions
- Run automated axe-core accessibility checks in CI (e.g., jest-axe or cypress-axe).
- Manual tests:
  - Tab through page, operate all controls with keyboard.
  - Use VoiceOver (macOS) or NVDA/JAWS (Windows) to verify reading order.
  - Test with color-blindness simulators and contrast checkers.

## Quick checklist to run before PR
1. Typecheck (tsc) — no errors in exported props.
2. Run linters (eslint + style/lint rules) — fix warnings where possible.
3. Run automated accessibility checks (axe) and address high/critical issues.
4. Smoke test keyboard navigation and forms.
5. Verify responsive breakpoints (mobile, tablet, desktop).
