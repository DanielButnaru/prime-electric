# PR Checklist pentru Landing Page

Foloseste acest checklist înainte de a deschide un Pull Request pentru o schimbare legată de landing page.

## Pre-PR (local)
- Rulează `pnpm install` / `npm install` (dacă ai modificat dependențe).
- Rulează `npm run build` sau `next build` local pentru a prinde erori de build.
- Rulează `tsc --noEmit` și corectează erorile TypeScript.
- Rulează `npm run lint` (eslint) și fixează erori/major warnings.
- Rulează testele unitare și e2e (dacă există).

## Functional
- Testează pagina `app/page.tsx` local în cele 3 viewport-uri (mobile, tablet, desktop).
- Verifică toate CTA-urile și link-urile — nu trebuie să existe `#` fără handler.
- Verifică formularul de newsletter cu succes și eșec (simulate backend).

## Accessibility
- Rulează axe core scan și rezolvă blocking issues.
- Verifică keyboard navigation (Tab, Shift+Tab, Enter, Space, Esc behaviour for modals).
- Asigură focus management când se deschid modale/accordeons.

## Performance
- Rulează Lighthouse quick audit (desktop + mobile) și verifică CLS/TTI/Speed Index.
- Folosește `next/image` pentru imagini și asigură `width`/`height` sau `fill` cu wrapper.

## Commit & PR
- Commit messages concise, de forma: `feat(landing): add Hero + Features scaffold` sau `fix(nav): keyboard focus state`.
- Include în descriere ce s-a schimbat, ce fișiere importante și cum testez local.
- Atașează screenshot-uri/gif pentru schimbările vizuale majore.

## Reviewer guidance
- Indică ce părți merită verificare manual (ex: flows, forms, animations).
- Semnalează riscuri sau tradeoffs (ex: folosirea client-side rendering pentru X component).

---

După PR: așteaptă CI checks (type/lint/tests/accessibility) și rezolvă feedback-ul înainte de merge.
