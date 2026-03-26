# Destruktura — CLAUDE.md

## Projekt

Strona portfolio i landing page fundacji **Fundacja Destruktura** (wcześniej Misjonarze PTGA).
- **URL produkcja:** destruktura.pl (hostowana na Vercel)
- **Repo GitHub:** github.com/biaerti/destruktura
- **Vercel:** podpięty do brancha `main` — każdy push = automatyczny deploy
- **Framework:** Next.js 16 (Pages Router, nie App Router), TypeScript, Tailwind CSS v4

## Stack

- **Next.js 16** z Turbopack (domyślny w v16)
- **Tailwind CSS v4** — używa `@import "tailwindcss"` w globals.css, nie `@tailwind base` itp.
- **GSAP** (ScrollTrigger, TextPlugin) — animacje
- **@tsparticles/react v3** + `tsparticles` v3 — cząsteczki w hero sekcjach
- **Resend** — wysyłanie emaili z formularza kontaktowego
- **lottie-react** — animacja "Coming Soon" w ProjectsGrid
- **react-icons** (fa, si), **@heroicons/react** — ikony

## Struktura

```
src/
  pages/          # Next.js Pages Router
    index.tsx     # strona główna
    o-nas.tsx     # o nas
    thank-you.tsx # po wysłaniu formularza
    privacy-policy.tsx
    api/
      contact.ts  # endpoint Resend — wysyła na kontakt@destruktura.pl
    projects/
      wolne-kible.tsx
      misjonarze-ptga.tsx
      abotax.tsx
      slamslot.tsx
  components/
    Header.tsx, Footer.tsx
    GlitchHero.tsx        # hero głównej strony z animacją tekstu
    HeroParticles.tsx     # cząsteczki (tsparticles v3)
    ProjectsGrid.tsx      # siatka projektów z Lottie "Coming Soon"
    ProcessStepper.tsx    # 4-krokowy proces z animacją GSAP + inline SVG ikony
    ProcessSectionWrapper.tsx  # wrapper z bg-image process-strip.png
    ContactForm.tsx       # formularz → /api/contact → Resend
    StickyStrip.tsx       # sekcja pod hero z opisem kolektywu
    DynamicBracketLogo.tsx
    TitleParticles.tsx
  styles/
    globals.css    # Tailwind + custom animacje
    particles.css
public/
  logo.svg, misjonarze_ptga.svg, wolne_kible.svg, slamslot.svg (tekstowe SVG)
  draze_misjonarze.png, mockup_wolne_kible.png, process-strip.png
  vlad.jpg, misjonarz_mateusz.png (duże pliki — rozważ kompresję)
```

## Dane fundacji

- **Nazwa:** Fundacja Destruktura (poprzednio Misjonarze PTGA)
- **KRS:** 0001060535
- **NIP:** 9562387256
- **REGON:** 526476936
- **Adres:** Lotników 9B/7, 87-100 Toruń
- **Email:** kontakt@destruktura.pl
- **Zarząd:** Bartosz Kuniński (Prezes), Vladyslav Panchenko (Wiceprezes od 26.05.2025)

## Projekty na stronie

1. **Wolne Kible** — kampania o darmowych toaletach na PKP
2. **Misjonarze PTGA** — eksperyment społeczny (tożsamość, konflikt wewnętrzny)
3. **Abotax / Fundusz Rekompensaty Społecznej** — inicjatywa obywatelska, abotax.pl
4. **SlamSlot** — narzędzie do zapisów na slamy poetyckie, slamslot.pl

## Zmienne środowiskowe

```
RESEND_API_KEY=...   # klucz Resend do wysyłania emaili
```

Lokalnie w `.env.local` (gitignored). Na Vercelu w Settings → Environment Variables.

Formularz wysyła `from: kontakt@destruktura.pl`, `to: kontakt@destruktura.pl`.
Domena destruktura.pl jest zweryfikowana w Resendzie.

## Ważne decyzje techniczne

### Turbopack (Next.js 16)
Next.js 16 używa Turbopack domyślnie. **@svgr/webpack nie działa z Turbopack.**
Dlatego SVG ikony muszą być inline JSX, nie importowane jako komponenty.
Przykład: `ProcessStepper.tsx` ma `ExplosionIcon` jako `React.forwardRef` z inline SVG.

### Static export wyłączony
Wcześniej projekt był na static export (`output: "export"`) dla Hostingera.
Teraz jest na Vercelu — output usunięty, działa SSR/SSG normalnie.
API routes (`/api/contact`) działają tylko na Vercelu, nie na static export.

### tsparticles v3
Używamy wyłącznie `@tsparticles/react` v3 i `tsparticles` v3.
Stare paczki v2 (`react-tsparticles`, `tsparticles-engine`, `tsparticles-slim`) zostały usunięte.
`FooterParticles.tsx` (v2 API) został usunięty — był nieużywany.

### Logo SlamSlot w karcie projektu
Zamiast pliku SVG, karta SlamSlot używa czystego tekstu CSS (`Arial Black`, biały, bold).
`image: null` w tablicy `projects` w `ProjectsGrid.tsx` → renderuje `<span>` z nazwą.

### ProcessSectionWrapper
Background image: `/process-strip.png` (w public/, nie w /img/).
Tylko na `lg:` breakpoincie, ze skosem `skew-y-[-4deg]`.

## Często popełniane błędy

- **Nie dodawać `output: "export"`** do next.config.ts — zepsuje API routes
- **Nie importować SVG jako komponentów** — Turbopack tego nie obsługuje, używać inline JSX
- **Nie używać tsparticles v2 API** — projekt jest na v3
- **Backup pliki** (`*.backup.tsx`) są w `.gitignore`

## Deploy

```bash
git add .
git commit -m "opis"
git push origin main   # Vercel deployuje automatycznie
```

Build lokalnie: `npm run build` (sprawdza TypeScript i kompiluje).
Dev: `npm run dev` (Turbopack, hot reload).
