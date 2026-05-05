import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import GradientCover from "@/components/GradientCover";
import { seo } from "@/lib/seo";
import { services } from "@/lib/services";

const page = seo.services;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.slug,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        h1={page.h1}
        lede="Four practice areas — technical SEO, on-page, content strategy, and local SEO. Picked à la carte or run as one engagement, calibrated for the Manila market."
      />

      {/* What's included */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="eyebrow">What&apos;s included</div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.slug}
              className="glass overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <GradientCover variant={s.cover.variant} palette={s.cover.palette} />
                <div className="absolute inset-x-6 bottom-6 z-10">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-bright/70">
                    {s.slug}
                  </div>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
                    {s.title}
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-bright/80">{s.detail}</p>
                <ul className="mt-6 space-y-2 text-sm text-bright/75">
                  {s.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-neon-violet" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="eyebrow">How we work</div>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            One short discovery, then a steady cadence.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-4">
            {[
              { step: "01", label: "Audit", body: "Two-week audit of your stack, content, and competitors." },
              { step: "02", label: "Plan", body: "A 90-day roadmap with clear KPIs and a sprint cadence." },
              { step: "03", label: "Ship", body: "Deliverables every two weeks, reviewed in a live call." },
              { step: "04", label: "Compound", body: "Quarterly reviews to retire stale work and double down on what's pulling weight." },
            ].map((p) => (
              <div key={p.step}>
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  {p.step}
                </div>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                  {p.label}
                </h3>
                <p className="mt-3 text-bright/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Who it&apos;s for</div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Brands that take search seriously.
            </h2>
          </div>
          <ul className="md:col-span-8 md:border-l md:border-hairline md:pl-10">
            {[
              "Local Manila businesses competing for high-intent buyer queries.",
              "Regional SaaS and B2B brands ranking across Southeast Asia.",
              "DTC and ecommerce teams building topical authority around their categories.",
              "In-house marketing leads who want a senior partner, not a vendor.",
            ].map((line) => (
              <li
                key={line}
                className="border-b border-hairline py-4 text-bright/85"
              >
                {line}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="border-t border-hairline bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">Pricing factors</div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                What changes the price.
              </h2>
              <p className="mt-5 max-w-md text-bright/70">
                Retainers are scoped against four levers — pick higher-impact ones first and the work pays for itself faster.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-block border-b border-neon-violet pb-1 text-sm"
              >
                See plans →
              </Link>
            </div>

            <div className="md:col-span-7">
              {[
                { k: "Site size", v: "Pages crawled, content depth, technical surface area." },
                { k: "Competition", v: "How saturated your queries are in Metro Manila and beyond." },
                { k: "Content velocity", v: "Briefs only vs. fully-ghostwritten production." },
                { k: "Locations", v: "Single-city vs. multi-region or international scope." },
              ].map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-12 gap-6 border-b border-hairline py-5"
                >
                  <div className="col-span-12 font-mono text-xs uppercase tracking-widest text-muted md:col-span-3">
                    {row.k}
                  </div>
                  <div className="col-span-12 text-bright/85 md:col-span-9">
                    {row.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ items={page.faqs ?? []} />

      <CTABand
        title="Want a free audit on your site?"
        subtitle="Three business days. No commitment. We&apos;ll send technical findings, content opportunities, and a 90-day plan."
        primary={{ label: "Get a free audit", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
