# Digital Marketing — site

Next.js 14 + Tailwind + Framer Motion marketing site for an SEO specialist agency in Manila. Futuristic aesthetic — dark, neon, 3D hero.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000 (or the port Next.js prints).

## Stack

- Next.js 14 App Router · TypeScript strict
- Tailwind CSS 3.4
- Framer Motion 11
- React Three Fiber + drei (3D hero)
- next/font (Space Grotesk, Inter, JetBrains Mono)
- CSS + SVG gradient covers (no external images — see `components/GradientCover.tsx`)

## Structure

- `app/` — App Router pages, each exporting Next.js `metadata`
- `components/` — Nav, Hero (with `NeuralCanvas`), PageHeader, CTABand, FAQ, JsonLd, Footer, ComingSoon
- `lib/seo.ts` — single source of truth for per-page title, description, slug, primary/secondary keywords, FAQs, internal links, CTA
- `lib/services.ts` — services list, pricing tiers, case studies, plus the `aiImage()` helper

## Replacing gradient covers with real imagery

This site ships with CSS + SVG gradient covers (`components/GradientCover.tsx`) tuned to the futuristic palette. They look sharp on every reload and don't depend on external services. To swap in real photography or 3D renders later:

1. Drop JPGs / WEBPs into `public/` (e.g. `public/services/technical-seo.jpg`)
2. In `lib/services.ts`, change each entry's `cover` from `{ variant, palette }` to `{ src: "/services/technical-seo.jpg", alt: "..." }` — and update the consumer pages (`app/page.tsx`, `app/services/page.tsx`) to render `<Image>` instead of `<GradientCover>`
3. The image whitelist in `next.config.mjs` is already configured for `image.pollinations.ai` if you ever want to plug in AI-generated imagery again

## SEO checklist before launch

- [ ] Replace placeholder `email` and `phone` in `lib/seo.ts` (`SITE.contact`)
- [ ] Replace `SITE.domain` with your production URL — `metadataBase` reads from this
- [ ] Swap AI image `alt` text for descriptions of real photos
- [ ] Add an OG image (`public/og.png`, 1200×630) and reference it in `app/layout.tsx`
- [ ] Verify the site in Google Search Console, submit `/sitemap.xml`
- [ ] Review every page's primary keyword usage — natural, not stuffed
- [ ] Replace the placeholder JSON-LD `@type: ProfessionalService` with `LocalBusiness` if you want full local schema (NAP must be production values first)
- [ ] Wire the `/contact` form to a real backend (Resend, Formspree, or your own API route)

## Build out the stubbed pages

`/case-studies`, `/about`, `/contact` ship as `ComingSoon` stubs. Each has a list of upcoming sections in its `page.tsx` — work through them to reach scope D (full site).
