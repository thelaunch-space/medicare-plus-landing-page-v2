# Vitalyf Landing Page V2

## What This Repo Delivers
- Single-page, React + TypeScript landing experience for a doctor-led GLP-1 weight-loss program aimed at executives/founders.
- Modular sections highlight the program narrative end-to-end (problem framing → proof → offer → intake form) with consistent medical-grade visual language.
- Mobile-first UX with fixed header, sticky mobile CTA, smooth-scroll navigation, and responsive sections that degrade gracefully.
- Production-ready build pipeline (Vite 5 + Tailwind 3.4) with strict TypeScript, reusable UI primitives, and lightweight animation hooks.

## Stack Snapshot
### Core
- `React 18.3` with functional components only.
- `TypeScript 5.5` in strict mode (tsconfig.app + root config).
- `Vite 5.4` dev/build server with alias `@ → src`.

### Styling & Motion
- Tailwind CSS + PostCSS + Autoprefixer.
- Custom Tailwind theme adds branded palette, typography scales, bespoke shadows, and animation keyframes (fade, slide, scale, aurora).
- `clsx` + `tailwind-merge` for deterministic class composition (`cn` helper).
- Lucide React icon set throughout (navigation, proof points, forms).
- Framer Motion available for experimental aurora background demo (`src/components/ui`).

### Tooling
- ESLint 9 with React Hooks + TypeScript rules.
- `npm run typecheck` (tsc `--noEmit`).
- Scripts: `dev`, `build`, `preview`, `lint`, `typecheck`.

## Runbook
```bash
npm install
npm run dev      # local dev server on Vite default port
npm run build    # production build to dist/
npm run preview  # serve dist/ locally
npm run lint     # ESLint over src + config files
npm run typecheck
```

## Project Layout
| Path | Purpose |
| --- | --- |
| `src/App.tsx` | Declares section order (11 live sections) and enables CSS scroll snapping. |
| `src/components/` | Header, StickyBottomCTA, shared UI primitives (Button, Card, Section), and mobile menu. |
| `src/components/sections/` | Individually themed sections (Hero, Program, Comparison, Timeline, Team, Science, Priority Access, FAQ, Contact, Footer). Additional unused-but-ready sections (CTA, Testimonials, Who) live here as well. |
| `src/components/ui/` | Aurora background + Framer Motion demo for future hero/background experiments. |
| `src/hooks/` | `useScrollAnimation` (IntersectionObserver) and `useScrollPosition` (window scroll watcher for sticky CTA). |
| `src/index.css` | Global font import, Tailwind layers, scroll-behavior, responsive helper utilities (animation delays). |
| `tailwind.config.js` | Theme extensions + plugin that exposes every Tailwind color as a CSS variable. |
| `public/` | Optimized hero imagery + team portraits (jpeg/webp). |
| `TEAM_IMAGES_REQUIRED.md` | Requirements + fallback behavior for team headshots. |

## Implementation Highlights
### Application Shell & Navigation
- Fixed, glassmorphic `Header` with smooth scroll-to-section behavior, tel-based CTA, and scroll locking in `MobileMenu` (`useEffect` toggles `document.body.style.overflow`).
- `StickyBottomCTA` (mobile only) fades up after `useScrollPosition` indicates hero is scrolled past 600px; reuses shared primary Button with `tel:` link.
- `App.tsx` wraps the page in `snap-y snap-proximity` to give gentle section snapping across modern browsers.

### Narrative Sections (current render order)
1. **HeroSection** – Two-column hero with trust chips, dual CTAs (“Learn How We Do It” tel link + scroll-to-contact), Inter typography, and responsive hero imagery (webp + png fallback, gradient edge mask).
2. **ProblemTruthSection** – Three-card narrative (What GLP-1 does, Where it falls short, How Vitalyf closes the gap) using `Card` variants and brand-consistent badges.
3. **ProgramSection** – “4-specialist team” storytelling grid with icon tiles, animation delays, and contact CTA.
4. **ComparisonSection** – Desktop table + mobile cards contrasting “GLP-1 alone” vs “Vitalyf.” Uses Check/X icon pairings and italic evidence callout.
5. **TimelineSection** – Multi-month roadmap (desktop cards with large numerals + connectors, simplified mobile stack) and final CTA.
6. **TeamSection** – Three clinician bios with image fallback (initials in gradient circle if assets fail) and collapsible long-form bios driven by `expandedId` state.
7. **ScienceSection** – Evidence cards referencing STEP trials + supporting research, emphasizing stats/ icons per card.
8. **PriorityAccessSection** – High-impact gradient CTA plus qualification grid (perfect fit vs not a fit) with check/close iconography.
9. **FAQSection** – Accessible accordion (button toggles, Chevron rotates, animated height transitions).
10. **ContactSection** – Multi-question intake form with inline `RadioButton` helper, BMI auto-calculation (`useEffect`), visual BMI feedback, disabled submit state until all prompts answered, and success card with CTA + tel fallback. Currently stores state locally only (no network request/webhook yet).
11. **Footer** – Minimal, HIPAA-safe footer copy (no compliance references) with lucide Heart icon.

### CTA & Proof System
- Tel-based CTAs appear in header, hero, sticky CTA, priority card, and contact confirmation ensuring consistent conversion paths.
- Secondary CTAs scroll to `#contact` using DOM queries for a smoother single-page experience.
- Testimonials, CTA, and Who Sections remain in the repo for potential reuse but are not imported in `App.tsx` after the latest content pass.

### UI Primitives & Hooks
- `Button` enforces 48px height, rounded corners, icon slot, and variant palette (gold primary, outlined secondary). Accepts `type`, `disabled`, `className`.
- `Card` centralizes elevation/hover treatment; handles optional clickability and variant backgrounds.
- `Section` standardizes padding/container width and keeps background variants available for future theming.
- `useScrollAnimation` wraps IntersectionObserver per-section for single-run fade/slide reveals with configurable threshold.
- `useScrollPosition` tracks `window.scrollY` and exposes both raw value + boolean for CTA triggers.

### Styling System
- Tailwind plugin (`addVariablesForColors`) creates CSS variables for every palette entry, enabling gradient/aurora utilities.
- Custom shadows: `shadow-soft`, `shadow-soft-lg`, and button 3D stacks for premium look.
- Animations defined in config with matching `.animation-delay-{n}` helpers in `index.css`.
- Global CSS enforces smooth scrolling, `Inter` typography, and disables horizontal overflow to avoid layout shifts.

### Assets & Content
- `public/hero-image.{webp,png}` + `logo.png` for hero/branding; hero uses `<picture>` for best format.
- Team portraits: `/s-kannan.jpg`, `/sheryl.jpeg`, `/dr-venkatesh.jpg`. Missing files fall back to initials thanks to logic in `TeamSection`.
- `TEAM_IMAGES_REQUIRED.md` documents required filenames/specs for future uploads to keep cards visually consistent.

### Integrations & Limits
- `@supabase/supabase-js` dependency is present but unused; form currently does not hit any backend/webhook.
- No router or external data fetching. All copy lives inline for deterministic renders.
- Accessibility: buttons vs anchors chosen based on semantics (anchors for tel links), accordion uses actual buttons, labels tied to radio inputs.

## Quality & Dev Tooling
- TypeScript strict mode, JSX in `.tsx`.
- ESLint config (see `eslint.config.js`) covers JS/TS, React Hooks, and React Refresh-friendly rules.
- `optimizeDeps.exclude = ['lucide-react']` in `vite.config.ts` to avoid double-bundling heavy icon exports.
- `tsconfig.app.json` isolates app compilation; root tsconfig used for tooling.

## Known Gaps / Next Opportunities
1. Wire the contact intake to a backend (Supabase, webhook, CRM) and persist BMI + answers.
2. Surface validation errors inline (currently relies on button disable + required inputs).
3. Replace placeholder aurora demo with production usage or remove dependency on Framer Motion if unnecessary.
4. Decide whether to reintroduce `WhoSection`, `TestimonialsSection`, `CTASection` or remove to reduce bundle size.
5. Add analytics + SEO metadata (meta tags, OG, schema) at the `index.html` level.
6. Provide privacy/terms routes if legal review requires them.

## Recent Change Trail
- `c2138fd` (2025‑11‑10): Remove HIPAA reference and simplify footer copy.
- `b00e52b` (2025‑11‑10): Streamline ContactSection messaging + UX.
- `56b9394` (2025‑11‑10): Refresh PriorityAccess and Who section storytelling.
- `e522987` (2025‑11‑10): Redesign ScienceSection with concise clinical evidence cards.
- `d470feb` (2025‑11‑10): Update TeamSection headings/messaging.
- `85b3d83` (2025‑11‑10): Rework TimelineSection structure + copy.
- `dfd3d83` (2025‑11‑10): Update ProblemTruthSection content strategy.
- `27fe95c` (2025‑11‑10): Revise hero headline/body copy (Chicago style capitalization).

_Last reviewed: 2025‑11‑10_
