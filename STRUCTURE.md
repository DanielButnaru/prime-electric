<!-- LANDING PAGE STRUCTURE - Comentarii explicative -->
# Structura proiectului pentru landing page

Acest fișier descrie structura recomandată pentru landing page și ce face fiecare fișier/folder. Folosește-l ca referință când modifici/adaugi componente — explică scopul fiecărui fișier la nivel de echipă.

## Regulă generală
- Componente mici, single-responsibility. Props tipate în `types/`.
- Fișiere interactive (formular, hamburger menu, acordeon) marchează `use client`.

## Top-level (în repo)
- `app/` — Pagina principală (Next.js App Router). Păstrează `page.tsx` foarte simplă: importă secțiuni din `components/`.
- `components/` — componente UI reutilizabile (organizează pe sub-foldere: `nav/`, `hero/`, `features/`, `layout/` etc.).
- `types/` — tipuri TypeScript pentru contracte (props/data shapes).
- `public/` — imagini, logo-uri, assets statice.

## Fișiere/Folder explicate (fișier -> ce face)

- `components/nav/Navbar.tsx`
  - Navbar principal. Conține logo, nav links și CTA. Responsiv: variante desktop și mobile (hamburger).
  - Comportament: toggle meniu mobil, aria-expanded pe butonul hamburger.
  - Props: `links`, `onCTAClick`.

- `components/ui/CTAButton.tsx`
  - Buton reutilizabil (primary/secondary/ghost). Acceptă `href` sau `onClick`.
  - Asigură accesibilitate (role, aria-disabled) și states vizuale.

- `components/hero/Hero.tsx`
  - Secțiunea hero: titlu, subtitlu, 1-2 CTA, media (imagine/ilustrație/video).
  - Minimal: arată fallback text dacă media lipsă.

- `components/features/FeatureCard.tsx`
  - Card simplu cu icon, titlu și descriere.
  - Folosit în `FeaturesGrid`.

- `components/features/FeaturesGrid.tsx`
  - Grid responsiv de `FeatureCard`. Primește array de feature items.

- `components/testimonials/Testimonial.tsx`
  - Afișează quote, autor, rol și avatar. Placeholder pentru rating.

- `components/pricing/PricingCard.tsx`
  - Card pentru planuri de preț. Titlu, preț, listă beneficii, CTA.

- `components/faq/FAQItem.tsx`
  - Item de tip accordion. `use client` pentru toggle. Asigură aria-expanded și aria-controls.

- `components/forms/NewsletterForm.tsx`
  - Formular scurt (email). Gestionează validare, loading și states success/error.
  - Recomandare: integrează cu un endpoint API (ex: `/api/subscribe`) sau service extern.

- `components/layout/Footer.tsx`
  - Linkuri utile, social, copyright, contact.

## Tipuri (în `types/`)
- `types/landing.ts` — conține `Feature`, `CTA`, `Testimonial`, `PricingPlan`, `FAQItem`.
  - Folosește-le în props pentru a asigura consistență între date statice și UI.

## Exemplu de workflow de dezvoltare
1. Creezi datele statice (ex: `data/features.ts`) tipate cu `types/landing.ts`.
2. Importezi `FeaturesGrid` în `app/page.tsx` și treci `items` ca prop.
3. Stilizezi componenta local (CSS Modules / Tailwind). Testează responsiv.
4. Verifici accessibility (tab navigation, aria attributes, contrast).

## Note legate de performanță
- Folosește `next/image` pentru imagini optimizate.
- Lazy-load pentru carusele și logo-strip.
- Evită render client-heavy în top-ul paginii; păstrează HTML inițial curat.

## Ce să pui în fiecare fișier când îl creezi
- `page.tsx` — compune secțiunile (Hero, Features, Testimonials, Pricing, FAQ, Footer).
- `components/*` — export default component, props tipate, fallback-uri pentru date lipsă.
- `types/landing.ts` — exportează tipurile; păstrează-le simple și reusabile.

---

Păstrează acest fișier actualizat pe măsură ce adaugi componente noi sau modifici contractele.
