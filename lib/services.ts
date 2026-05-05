export type CoverVariant = "grid" | "panels" | "ribbon" | "nodes" | "chart" | "map";
export type CoverPalette = "violet" | "blue" | "cyan" | "magenta";

export type Service = {
  slug: string;
  title: string;
  short: string;
  detail: string;
  outcomes: string[];
  cover: { variant: CoverVariant; palette: CoverPalette };
};

export const services: Service[] = [
  {
    slug: "technical-seo",
    title: "Technical SEO",
    short: "Crawl, index, and Core Web Vitals — fixed at the foundation.",
    detail:
      "We audit crawlability, indexation, schema, internal linking, and page experience. Then we ship the fixes, working alongside your engineering team or independently.",
    outcomes: [
      "Crawl + index audit",
      "Schema.org rollout",
      "Core Web Vitals improvements",
      "Internal linking architecture",
    ],
    cover: { variant: "grid", palette: "violet" },
  },
  {
    slug: "on-page-seo",
    title: "On-Page SEO",
    short: "Pages built to satisfy intent — title to last paragraph.",
    detail:
      "Keyword research, intent mapping, on-page rewrites, and content briefs. Every page targets a clear query with a clear job to do.",
    outcomes: [
      "Keyword + intent map",
      "On-page rewrites",
      "Title and meta optimization",
      "Content briefs your team can run with",
    ],
    cover: { variant: "panels", palette: "blue" },
  },
  {
    slug: "content-strategy",
    title: "Content Strategy",
    short: "Topic clusters that compound, not one-off blog posts.",
    detail:
      "We design pillar pages, sub-pillar topics, and supporting articles around the queries that grow your business. Editorial calendar included.",
    outcomes: [
      "Pillar + sub-pillar architecture",
      "Editorial calendar",
      "Briefs and outlines",
      "Optional ghostwriting",
    ],
    cover: { variant: "ribbon", palette: "magenta" },
  },
  {
    slug: "local-seo",
    title: "Local SEO — Manila",
    short: "Show up where buyers in Metro Manila are already searching.",
    detail:
      "Google Business Profile, location pages, citation cleanup, and review strategy — calibrated for Metro Manila and surrounding regions.",
    outcomes: [
      "Google Business Profile setup",
      "Location-page rollout",
      "Citation cleanup",
      "Review acquisition strategy",
    ],
    cover: { variant: "nodes", palette: "cyan" },
  },
];

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  pitch: string;
  includes: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Foundation",
    price: "₱45,000",
    cadence: "/ month",
    pitch: "For early-stage brands ready to take search seriously.",
    includes: [
      "Quarterly technical audit",
      "10 keyword targets / month",
      "4 content briefs / month",
      "Monthly performance report",
      "Slack support",
    ],
    cta: { label: "Start with Foundation", href: "/contact" },
  },
  {
    name: "Compound",
    price: "₱85,000",
    cadence: "/ month",
    pitch: "Our most-picked retainer — built to compound over 6+ months.",
    includes: [
      "Monthly technical audit",
      "25 keyword targets / month",
      "8 content briefs + 4 ghostwritten",
      "Internal linking + schema rollout",
      "Local SEO + GBP management",
      "Bi-weekly call",
    ],
    cta: { label: "Choose Compound", href: "/contact" },
    featured: true,
  },
  {
    name: "Scale",
    price: "Custom",
    cadence: "",
    pitch: "For brands with multi-region or multi-vertical search ambition.",
    includes: [
      "Dedicated team",
      "Custom KPI dashboards",
      "Multi-location strategy",
      "Programmatic + editorial content",
      "Weekly call",
    ],
    cta: { label: "Request a scope", href: "/contact" },
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  result: string;
  cover: { variant: CoverVariant; palette: CoverPalette };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "regional-saas",
    client: "Regional SaaS",
    industry: "B2B SaaS · Southeast Asia",
    result: "+312% organic sessions in 9 months",
    cover: { variant: "chart", palette: "violet" },
  },
  {
    slug: "manila-clinic",
    client: "Manila Clinic Network",
    industry: "Healthcare · Metro Manila",
    result: "From rank 17 → top 3 for 6 service queries",
    cover: { variant: "map", palette: "cyan" },
  },
];
