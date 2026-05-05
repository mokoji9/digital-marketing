import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogCard from "@/components/BlogCard";
import CTABand from "@/components/CTABand";
import { seo } from "@/lib/seo";
import { posts } from "@/lib/blog";

const page = seo.blog;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
  openGraph: {
    title: page.title,
    description: page.description,
    url: page.slug,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.date) - +new Date(a.date),
  );
  const [feature, ...rest] = sorted;

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        h1={page.h1}
        lede="Practical SEO writing for Manila brands and regional teams. Audits, timelines, local search, and content strategy — without the fluff."
      />

      {/* Latest posts */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Latest</div>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Recent posts
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-hairline px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {feature && (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <BlogCard post={feature} feature />
            {rest.slice(0, 1).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}

        {rest.length > 1 && (
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.slice(1).map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>

      <CTABand
        eyebrow="Work with us"
        title="Want this work running on your site?"
        subtitle="We pair the strategies in these posts with hands-on execution. Free audit covers technical health, content gaps, and a 90-day plan."
        primary={{ label: "Book a free audit", href: "/contact" }}
        secondary={{ label: "See services", href: "/services" }}
      />
    </>
  );
}
