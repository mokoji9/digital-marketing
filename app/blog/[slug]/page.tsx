import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostBody";
import GradientCover from "@/components/GradientCover";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";
import BlogCard from "@/components/BlogCard";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/seo";
import { posts, postBySlug, adjacentPosts, relatedPosts } from "@/lib/blog";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = postBySlug(params.slug);
  if (!post) return {};
  const url = `${SITE.domain}/blog/${post.slug}`;
  return {
    title: `${post.title} | ${SITE.shortName}`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function PostPage({ params }: { params: Params }) {
  const post = postBySlug(params.slug);
  if (!post) notFound();

  const { prev, next } = adjacentPosts(params.slug);
  const related = relatedPosts(params.slug);

  return (
    <article>
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          author: { "@type": "Organization", name: SITE.name },
          publisher: {
            "@type": "Organization",
            name: SITE.name,
            url: SITE.domain,
          },
          mainEntityOfPage: `${SITE.domain}/blog/${post.slug}`,
        }}
      />

      {/* Cover */}
      <header className="relative overflow-hidden border-b border-hairline">
        <div className="absolute inset-0 -z-10">
          <GradientCover
            variant={post.cover.variant}
            palette={post.cover.palette}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/60 to-ink" />
        </div>
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-bright/70">
            <Link href="/blog" className="hover:text-bright">
              Blog
            </Link>
            <span className="h-1 w-1 rounded-full bg-muted/40" />
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-muted/40" />
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="mt-6 block font-mono text-xs uppercase tracking-widest text-muted"
          >
            {formatDate(post.date)}
          </time>
        </div>
      </header>

      {/* Body */}
      <section className="mx-auto max-w-3xl px-6 py-16 md:py-20">
        <p className="font-display text-xl leading-relaxed text-bright/90 md:text-2xl">
          {post.excerpt}
        </p>
        <div className="mt-12">
          <PostBody sections={post.content} />
        </div>
      </section>

      {/* FAQs (if any) */}
      {post.faqs && post.faqs.length > 0 && (
        <FAQ
          items={post.faqs}
          eyebrow="Frequently asked"
          title="Questions readers ask."
        />
      )}

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="border-t border-hairline">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px bg-hairline md:grid-cols-2">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group bg-ink p-8 transition-colors hover:bg-elevated/60"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  ← Previous
                </div>
                <div className="mt-3 font-display text-xl font-medium tracking-tight group-hover:text-neon-violet/90">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div className="bg-ink p-8" />
            )}
            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group bg-ink p-8 text-right transition-colors hover:bg-elevated/60"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-muted">
                  Next →
                </div>
                <div className="mt-3 font-display text-xl font-medium tracking-tight group-hover:text-neon-violet/90">
                  {next.title}
                </div>
              </Link>
            ) : (
              <div className="bg-ink p-8" />
            )}
          </div>
        </section>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="eyebrow">Related reading</div>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Keep going.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}

      <CTABand
        title="Want this approach on your site?"
        subtitle="We turn the ideas in posts like this into shipped work. Free audit, no commitment."
        primary={{ label: "Book a free audit", href: "/contact" }}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
    </article>
  );
}
