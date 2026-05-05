export const SITE = {
  name: "Digital Marketing",
  shortName: "Digital Marketing",
  domain: "https://example.com", // ← replace before launch
  description:
    "SEO specialist in Manila helping ambitious brands win compounding organic growth.",
  location: {
    city: "Manila",
    region: "Metro Manila",
    country: "Philippines",
  },
  // ⚠ Placeholders — replace before launch
  contact: {
    email: "hello@example.com",
    phone: "+63 000 000 0000",
  },
};

export type FAQ = { q: string; a: string };

export type PageSeo = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intent:
    | "informational"
    | "commercial"
    | "transactional"
    | "local-commercial"
    | "local-informational";
  primaryKeyword: string;
  secondaryKeywords: string[];
  outline: string[];
  faqs?: FAQ[];
  internalLinks: string[];
  cta: { label: string; href: string };
  noIndex?: boolean;
};

export const seo = {
  home: {
    slug: "/",
    title: "SEO Specialist in Manila | Digital Marketing",
    description:
      "Technical SEO and content strategy for brands in Manila. Clear reporting, measured wins, rankings that hold.",
    h1: "SEO that compounds.",
    intent: "local-commercial",
    primaryKeyword: "seo specialist manila",
    secondaryKeywords: [
      "digital marketing agency manila",
      "search engine optimization philippines",
      "technical seo services",
      "content strategy manila",
      "local seo philippines",
    ],
    outline: [
      "What we do",
      "How rankings compound",
      "Recent results",
      "Pricing at a glance",
      "Frequently asked",
    ],
    internalLinks: ["/services", "/pricing", "/case-studies"],
    cta: { label: "Book a free audit", href: "/contact" },
  },
  services: {
    slug: "/services",
    title: "SEO Services in Manila — Technical, On-Page, Content | Digital Marketing",
    description:
      "Technical audits, on-page optimization, content strategy, and link building. Built for measurable organic growth in Manila.",
    h1: "Services, end to end.",
    intent: "commercial",
    primaryKeyword: "seo services manila",
    secondaryKeywords: [
      "technical seo audit philippines",
      "on-page seo manila",
      "content seo strategy",
      "link building services",
      "local seo manila",
    ],
    outline: [
      "What's included",
      "How we work",
      "Who it's for",
      "Pricing factors",
      "Frequently asked",
    ],
    faqs: [
      {
        q: "How long until I see ranking improvements?",
        a: "Technical wins land in 2–4 weeks. Content and authority signals compound from month 3 onward, with the steepest gains around month 6.",
      },
      {
        q: "Do you work with brands outside Manila?",
        a: "Yes. We're based in Manila and work with clients across the Philippines, Southeast Asia, and remote-first teams in any time zone.",
      },
      {
        q: "Will you write content, or just brief it?",
        a: "Both. We can produce briefs your team writes from, or deliver finished long-form, location, and product pages end-to-end.",
      },
      {
        q: "Do you guarantee a #1 ranking?",
        a: "No one credible does. We guarantee a clear strategy, transparent reporting, and steady measurable progress against agreed KPIs.",
      },
    ],
    internalLinks: ["/pricing", "/case-studies", "/contact"],
    cta: { label: "Get a free audit", href: "/contact" },
  },
  pricing: {
    slug: "/pricing",
    title: "SEO Pricing in Manila — Transparent Monthly Plans | Digital Marketing",
    description:
      "Three monthly SEO retainers built around your stage of growth. Transparent pricing, fixed deliverables, no surprise fees.",
    h1: "Plans that match your stage.",
    intent: "transactional",
    primaryKeyword: "seo pricing manila",
    secondaryKeywords: [
      "seo retainer cost philippines",
      "monthly seo packages",
      "affordable seo services manila",
      "seo agency rates",
    ],
    outline: [
      "Plans",
      "What's included per plan",
      "What changes the price",
      "Common questions",
    ],
    faqs: [
      {
        q: "Is there a minimum contract length?",
        a: "Three months minimum so that work can compound. After that we run month-to-month — cancel any time with 30 days' notice.",
      },
      {
        q: "What's not included?",
        a: "Paid media, social, web development, and design. We collaborate with vendors on these, but our scope is search.",
      },
      {
        q: "Do you offer one-off audits?",
        a: "Yes. Standalone technical audits start at a fixed fee — useful before committing to a retainer.",
      },
    ],
    internalLinks: ["/services", "/contact"],
    cta: { label: "Book a strategy call", href: "/contact" },
  },
  caseStudies: {
    slug: "/case-studies",
    title: "Case Studies — Manila SEO Results | Digital Marketing",
    description:
      "Selected results from local Manila brands and regional clients. Compounding traffic, ranking, and pipeline outcomes.",
    h1: "Results, in the open.",
    intent: "commercial",
    primaryKeyword: "seo case studies manila",
    secondaryKeywords: [
      "digital marketing results philippines",
      "seo agency case studies",
      "local seo success",
    ],
    outline: ["Selected case studies", "What changed", "What we learned"],
    internalLinks: ["/services", "/contact"],
    cta: { label: "Start your project", href: "/contact" },
  },
  blog: {
    slug: "/blog",
    title: "Blog — SEO Insights for Manila Brands | Digital Marketing",
    description:
      "Practical SEO writing for Manila brands and regional teams — audits, timelines, local search, and content strategy without the fluff.",
    h1: "Notes on search.",
    intent: "informational",
    primaryKeyword: "seo blog manila",
    secondaryKeywords: [
      "seo insights philippines",
      "search engine optimization blog",
      "digital marketing blog manila",
    ],
    outline: ["Latest posts", "Categories"],
    internalLinks: ["/services", "/contact"],
    cta: { label: "Talk to a specialist", href: "/contact" },
  },
  about: {
    slug: "/about",
    title: "About — SEO Specialists in Manila | Digital Marketing",
    description:
      "A small team of SEO specialists in Manila focused on long-term organic growth for brands that take search seriously.",
    h1: "Built for compounding work.",
    intent: "informational",
    primaryKeyword: "seo agency manila about",
    secondaryKeywords: [
      "manila seo specialists",
      "digital marketing team philippines",
    ],
    outline: ["How we started", "How we work", "Who we work with"],
    internalLinks: ["/services", "/case-studies", "/contact"],
    cta: { label: "Work with us", href: "/contact" },
  },
  contact: {
    slug: "/contact",
    title: "Contact — Book a Free SEO Audit in Manila | Digital Marketing",
    description:
      "Tell us about your site and goals. We'll send a free audit summary within 3 business days.",
    h1: "Tell us about your site.",
    intent: "transactional",
    primaryKeyword: "contact seo agency manila",
    secondaryKeywords: ["free seo audit philippines", "book seo consultation"],
    outline: ["What to include", "What happens next"],
    internalLinks: ["/services", "/pricing"],
    cta: { label: "Send brief", href: "#brief" },
  },
} as const satisfies Record<string, PageSeo>;

export type SeoKey = keyof typeof seo;

export const allPages = Object.values(seo);
