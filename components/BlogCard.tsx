import Link from "next/link";
import GradientCover from "./GradientCover";
import type { Post } from "@/lib/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export default function BlogCard({
  post,
  feature = false,
}: {
  post: Post;
  feature?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group glass block overflow-hidden rounded-lg transition-colors hover:bg-elevated/50 ${
        feature ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${feature ? "aspect-[16/9]" : "aspect-[4/3]"}`}
      >
        <GradientCover
          variant={post.cover.variant}
          palette={post.cover.palette}
        />
        <div className="absolute inset-x-6 top-6 z-10 flex items-center gap-2">
          <span className="rounded-full border border-hairline bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-bright/70 backdrop-blur">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-muted/40" />
          <span>{post.readMinutes} min read</span>
        </div>

        <h3
          className={`mt-4 font-display font-semibold leading-tight tracking-tight transition-colors group-hover:text-neon-violet/90 ${
            feature ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {post.title}
        </h3>

        <p className="mt-4 max-w-2xl text-bright/70">{post.excerpt}</p>

        <span className="mt-6 inline-block border-b border-hairline pb-1 text-sm text-bright/60 transition-colors group-hover:border-neon-violet group-hover:text-bright">
          Read article →
        </span>
      </div>
    </Link>
  );
}
