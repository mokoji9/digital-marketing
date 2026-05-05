import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { seo } from "@/lib/seo";

const page = seo.caseStudies;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: { canonical: page.slug },
};

export default function CaseStudiesPage() {
  return (
    <ComingSoon
      eyebrow="Case studies"
      h1={page.h1}
      lede="A growing library of selected client results — local Manila brands and regional teams. Filling in over the coming weeks."
      upcoming={[
        "Regional SaaS — +312% organic sessions in 9 months",
        "Manila Clinic Network — rank 17 → top 3 for 6 service queries",
        "DTC beauty brand — pillar architecture rollout",
        "B2B fintech — multi-region content compounding",
      ]}
      primary={{ label: "Back to home", href: "/" }}
      secondary={{ label: "See services", href: "/services" }}
    />
  );
}
