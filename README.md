# Korak Ispred — Hero Section Redesign

Redizajn hero sekcije za [korakispred.io](https://korakispred.io) — coaching program za
video editore. Vizuelni stil i UI su verno rekreirani po Dribbble dizajnu
**"Cardinal Mason"** (tamna navy/ljubičasta tema), dok je sav tekstualni sadržaj
(copy) preuzet sa postojećeg sajta.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (konfiguracija preko `@theme` u `app/globals.css`)
- Fontovi: **Space Grotesk** (headline) i **Inter** (body) preko `next/font`

## Pokretanje

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkcijski build
```

## Struktura

- `app/page.tsx` — render hero sekcije
- `app/components/Hero.tsx` — logo, headline, subtext, CTA-ovi, media kartica
- `app/components/BackgroundDecor.tsx` — koncentrični lukovi, grid, grain, floating ikonice
- `app/globals.css` — dizajn tokeni (boje, radijusi, grain, animacije)

## Napomene o dizajnu

- **Copy** je 1:1 preuzet sa korakispred.io (headline, subtext, CTA labeli).
- Cardinal Mason mikro-elementi bez odgovarajućeg teksta na sajtu su **izostavljeni**:
  stats red (`1,000+ / 4.9★`), cena (`$50.00/month`) i feature checklist.
- Originalni 3D asset-i (ikonice, promo video) nisu bili dostupni sa dizajna, pa su
  **rekreirani** kao SVG figure i CSS placeholder poster sa play dugmetom.
