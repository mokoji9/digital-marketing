import type { MetadataRoute } from "next";
import { SITE, allPages } from "@/lib/seo";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls = allPages
    .filter((p) => !p.noIndex)
    .map((p) => ({
      url: `${SITE.domain}${p.slug === "/" ? "" : p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.slug === "/" ? 1 : 0.7,
    }));

  const postUrls = posts.map((post) => ({
    url: `${SITE.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticUrls, ...postUrls];
}
