import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTABand from "@/components/CTABand";
import FAQ from "@/components/FAQ";
import { seo } from "@/lib/seo";
import { tiers } from "@/lib/services";

const page = seo.pricing;

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

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        h1={page.h1}
        lede="Three monthly retainers in Philippine Pesos. Three-month minimum, then month-to-month. Cancel any time with 30 days' notice."
      />

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <article
              key={t.name}
              className={`glass relative flex flex-col rounded-lg p-8 ${
                t.featured ? "shadow-glow ring-1 ring-neon-violet/40" : ""
              }`}
            >
              {t.featured && (
                <div className="absolute -top-3 left-8 rounded-full border border-neon-violet/40 bg-ink px-3 py-1 text-[10px] uppercase tracking-widest text-neon-violet">
                  Most picked
                </div>
              )}
              <div className="font-mono text-xs uppercase tracking-widest text-muted">
                {t.name}
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-4xl font-semibold tracking-tight">
                  {t.price}
                </span>
                {t.cadence && (
                  <span className="text-sm text-muted">{t.cadence}</span>
                )}
              </div>
              <p className="mt-3 text-bright/75">{t.pitch}</p>

              <ul className="mt-8 space-y-3 text-sm text-bright/85">
                {t.includes.map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-neon-violet" />
                    {line}
                  </li>
                ))}
              </ul>

              <Link
                href={t.cta.href}
                className={`mt-10 ${t.featured ? "btn-neon" : "btn-ghost"} justify-center text-sm`}
              >
                {t.cta.label}
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* What's included per plan */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="eyebrow">What&apos;s included per plan</div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Compared, side by side.
          </h2>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-hairline text-xs uppercase tracking-widest text-muted">
                  <th className="py-3 font-mono font-normal">Item</th>
                  <th className="py-3 font-mono font-normal">Foundation</th>
                  <th className="py-3 font-mono font-normal">Compound</th>
                  <th className="py-3 font-mono font-normal">Scale</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["Technical audit", "Quarterly", "Monthly", "Monthly"],
                  ["Keyword targets / mo", "10", "25", "Custom"],
                  ["Content briefs / mo", "4", "8", "Custom"],
                  ["Ghostwritten pieces / mo", "—", "4", "Custom"],
                  ["Local SEO + GBP", "—", "Included", "Included"],
                  ["Internal linking + schema", "—", "Included", "Included"],
                  ["Calls", "Async", "Bi-weekly", "Weekly"],
                ].map((row) => (
                  <tr
                    key={row[0]}
                    className="border-b border-hairline last:border-0"
                  >
                    {row.map((cell, i) => (
                      <td
                        key={i}
                        className={`py-4 ${i === 0 ? "text-bright/90" : "text-bright/70"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What changes the price */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow">What changes the price</div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Four levers — only the ones that move you forward.
            </h2>
          </div>
          <div className="md:col-span-7">
            {[
              { k: "Site size", v: "Crawl depth and number of indexable pages." },
              { k: "Competition", v: "How aggressive the SERP is for your queries." },
              { k: "Content velocity", v: "Brief-only vs. ghostwriting cadence." },
              { k: "Geographic scope", v: "Single-city Manila vs. multi-region rollouts." },
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
      </section>

      <FAQ items={page.faqs ?? []} eyebrow="Common questions" />

      <CTABand
        title="Not sure which plan fits?"
        subtitle="A 20-minute call usually answers it. Bring your goals — we&apos;ll bring a recommendation."
        primary={{ label: "Book a strategy call", href: "/contact" }}
        secondary={{ label: "See services", href: "/services" }}
      />
    </>
  );
}
