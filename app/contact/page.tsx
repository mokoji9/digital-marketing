import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { seo } from "@/lib/seo";

const page = seo.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function ContactPage() {
  return (
    <ComingSoon
      eyebrow="Contact"
      h1={page.h1}
      lede="Tell us about your site and goals. We'll send a free audit summary within 3 business days."
      upcoming={[
        "Brief form — site, goals, current rankings",
        "What we'll send back — audit summary + 90-day plan",
        "Direct email + phone line for urgent enquiries",
        "Response SLAs",
      ]}
      primary={{ label: "Back to home", href: "/" }}
      secondary={{ label: "See pricing", href: "/pricing" }}
    />
  );
}
