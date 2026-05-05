import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import CTABand from "@/components/CTABand";
import GradientCover from "@/components/GradientCover";
import { seo } from "@/lib/seo";
import { services, caseStudies } from "@/lib/services";

export const metadata: Metadata = {
  title: seo.home.title,
  description: seo.home.description,
  alternates: { canonical: seo.home.slug },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.home.slug,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* What we do */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">What we do</div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              Search work that doesn&apos;t fade.
            </h2>
            <p className="mt-5 max-w-md text-bright/70">
              Four practice areas, run as one engagement. We pick the mix that fits your stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-hairline md:col-span-8 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                href="/services"
                className="group relative bg-ink p-8 transition-colors hover:bg-elevated"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  {s.slug}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-bright/70">{s.short}</p>
                <span className="mt-6 inline-block border-b border-hairline pb-1 text-sm text-bright/60 transition-colors group-hover:border-neon-violet group-hover:text-bright">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How rankings compound */}
      <section className="border-y border-hairline bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="eyebrow">How rankings compound</div>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Quick wins land in weeks. The real curve starts at month three.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                phase: "Month 1",
                label: "Foundation",
                body: "Crawl, index, schema, and Core Web Vitals fixes. Quick wins that compound.",
              },
              {
                phase: "Month 3",
                label: "Authority",
                body: "Topic clusters and internal linking begin to lift adjacent queries.",
              },
              {
                phase: "Month 6+",
                label: "Compounding",
                body: "Steepest gains arrive as content + authority signals reinforce each other.",
              },
            ].map((p, i) => (
              <div key={p.phase} className="relative">
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  {p.phase}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  <span className="text-neon">{p.label}</span>
                </h3>
                <p className="mt-3 max-w-sm text-bright/70">{p.body}</p>
                {i < 2 && (
                  <span className="absolute right-0 top-2 hidden font-mono text-xs text-muted/60 md:inline">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent results */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="flex items-end justify-between">
          <div>
            <div className="eyebrow">Recent results</div>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
              A look at what we ship.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="hidden border-b border-hairline pb-1 text-sm text-bright/70 hover:border-neon-violet hover:text-bright md:inline-block"
          >
            All case studies →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <article key={c.slug} className="glass overflow-hidden rounded-lg">
              <div className="relative aspect-[4/5] overflow-hidden">
                <GradientCover variant={c.cover.variant} palette={c.cover.palette} />
              </div>
              <div className="p-8">
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  {c.industry}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                  {c.client}
                </h3>
                <p className="mt-3 text-neon">{c.result}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">Pricing at a glance</div>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Plans built for your <span className="text-neon">stage</span>.
              </h2>
              <p className="mt-5 max-w-md text-bright/70">
                Three monthly retainers, transparent pricing, no surprise fees. Three-month minimum.
              </p>
              <Link
                href="/pricing"
                className="mt-8 inline-block border-b border-neon-violet pb-1 text-sm"
              >
                See full pricing →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-px bg-hairline md:col-span-7 md:grid-cols-3">
              {[
                { name: "Foundation", price: "₱45k" },
                { name: "Compound", price: "₱85k", featured: true },
                { name: "Scale", price: "Custom" },
              ].map((t) => (
                <div
                  key={t.name}
                  className={`bg-ink p-8 ${t.featured ? "shadow-glow" : ""}`}
                >
                  <div className="font-mono text-xs uppercase tracking-widest text-muted">
                    {t.name}
                  </div>
                  <div className="mt-4 font-display text-3xl font-semibold tracking-tight">
                    {t.price}
                    <span className="ml-1 text-sm text-muted">/ mo</span>
                  </div>
                  {t.featured && (
                    <div className="mt-3 inline-block rounded-full border border-neon-violet/40 px-3 py-1 text-[10px] uppercase tracking-widest text-neon-violet">
                      Most picked
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Start the work"
        title="Let's see what your search can do."
        subtitle="Free audit covers technical health, content opportunities, and a 90-day plan. No commitment."
        primary={{ label: "Book a free audit", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </>
  );
}
