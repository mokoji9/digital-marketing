import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { seo } from "@/lib/seo";

const page = seo.about;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function AboutPage() {
  return (
    <ComingSoon
      eyebrow="About"
      h1={page.h1}
      lede="A small team of SEO specialists in Manila focused on long-term organic growth for brands that take search seriously."
      upcoming={[
        "How we started",
        "How we work — sprint cadence and review rituals",
        "Who we work with",
        "Where we work — Metro Manila and remote-first",
      ]}
      primary={{ label: "See services", href: "/services" }}
      secondary={{ label: "Talk to us", href: "/contact" }}
    />
  );
}
