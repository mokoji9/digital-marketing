import type { CoverVariant, CoverPalette } from "./services";
import type { FAQ } from "./seo";

export type Section =
  | { type: "p"; body: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; body: string }
  | { type: "quote"; body: string; attribution?: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readMinutes: number;
  category: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  cover: { variant: CoverVariant; palette: CoverPalette };
  content: Section[];
  faqs?: FAQ[];
  related: string[]; // slugs of related posts
};

export const posts: Post[] = [
  {
    slug: "seo-audit-checklist-manila-brands",
    title:
      "SEO Audit Checklist for Manila Brands: 12 Things to Check First",
    description:
      "A 12-point SEO audit checklist for Manila brands — what to check first, why it matters, and what each finding tells you about your search health.",
    excerpt:
      "Most SEO audits over-index on technical issues and under-index on content gaps. This checklist runs in the right order — quick wins first, compounding work after.",
    date: "2026-04-22",
    readMinutes: 7,
    category: "Audits",
    primaryKeyword: "seo audit checklist manila",
    secondaryKeywords: [
      "seo audit philippines",
      "technical seo audit",
      "local seo audit manila",
      "site audit checklist",
    ],
    cover: { variant: "grid", palette: "violet" },
    content: [
      {
        type: "p",
        body:
          "An SEO audit is only as useful as the order you run it in. Before you crack open Search Console or fire up a crawler, decide what you're trying to learn — and put the cheapest, highest-signal checks first.",
      },
      {
        type: "p",
        body:
          "Below is the checklist we use for Manila brands at the start of every engagement. It moves from foundations (crawl, index, schema) to content depth, to local SEO. Quick wins surface in the first three sections; compounding work shows up in the last two.",
      },
      { type: "h2", text: "Foundations: crawl, index, render", id: "foundations" },
      {
        type: "ol",
        items: [
          "Crawlability: confirm robots.txt isn't blocking high-value sections, and that the sitemap.xml is fresh and submitted in Search Console.",
          "Indexation: pull the Pages report — count valid vs. excluded URLs, and look for crawl-bloat patterns (faceted URLs, infinite parameters, staging leaks).",
          "Render: spot-check key templates with the URL Inspection tool — if Googlebot can't see your hero copy or product price, neither can your rankings.",
        ],
      },
      { type: "h2", text: "On-page: titles, headings, intent", id: "on-page" },
      {
        type: "ol",
        items: [
          "Titles: every page has one ≤60-char title with the primary keyword near the start. No duplicates across the site.",
          "Headings: one H1 per page, distinct from the title, with logical H2/H3 nesting. Headings should describe the section, not be clever.",
          "Intent match: the page actually answers the query it's targeting. A 'buy' query needs prices and a CTA, not a 1,500-word essay.",
        ],
      },
      { type: "h2", text: "Schema and structured data", id: "schema" },
      {
        type: "p",
        body:
          "Schema.org markup is one of the cheapest credibility signals you can ship. For Manila businesses, three types do most of the work: LocalBusiness on the home page, Service for each service page, and FAQPage where you have real questions and answers.",
      },
      {
        type: "callout",
        body:
          "If you're a multi-location brand, use a separate LocalBusiness entity per location page — not one fat block on the home page.",
      },
      { type: "h2", text: "Content depth and topical authority", id: "content" },
      {
        type: "ol",
        items: [
          "Topic clusters: every commercial page should have 2–4 supporting articles linking back to it with descriptive anchor text.",
          "Coverage: search your core topics in Google. Are you missing pages for queries competitors rank for?",
          "Refresh cadence: which posts are decaying? Refresh the top 10% before publishing anything new.",
        ],
      },
      { type: "h2", text: "Local SEO for Metro Manila", id: "local" },
      {
        type: "ol",
        items: [
          "Google Business Profile is filled out, verified, and posted to weekly.",
          "Citations on local directories use consistent NAP (Name, Address, Phone).",
          "Location-specific landing pages exist for the city or barangay you actually serve — not a single 'Locations' dump.",
          "Reviews are recent and replied to, including the negative ones.",
        ],
      },
      {
        type: "p",
        body:
          "If you're working through this on your own, start with sections one and three — they reveal the highest-leverage problems fastest. Sections four and five take longer to fix but compound the most.",
      },
    ],
    faqs: [
      {
        q: "How long should an SEO audit take?",
        a: "A focused audit takes 5–10 working days. Anything longer and the report is usually stale before the team can act on it.",
      },
      {
        q: "Should I run an audit if I'm already getting traffic?",
        a: "Yes — especially then. Audits surface what's holding back the next 50% of growth, not just what's broken.",
      },
      {
        q: "Do I need a paid tool to run this?",
        a: "Search Console + a free crawler (Screaming Frog up to 500 URLs) covers 80% of it. Paid tools speed up the rest.",
      },
    ],
    related: ["how-long-does-seo-take", "local-seo-metro-manila-guide"],
  },
  {
    slug: "how-long-does-seo-take",
    title: "How Long Does SEO Take to Work? An Honest Timeline",
    description:
      "Realistic SEO timelines from month 1 to month 12 — what changes early, what compounds, and the milestones to watch in between.",
    excerpt:
      "The honest answer is months, not weeks. Here's what to expect at month one, month three, and month six — and what milestones tell you it's working.",
    date: "2026-04-08",
    readMinutes: 5,
    category: "Strategy",
    primaryKeyword: "how long does seo take",
    secondaryKeywords: [
      "seo timeline",
      "when does seo work",
      "seo results month",
      "expected seo results",
    ],
    cover: { variant: "chart", palette: "blue" },
    content: [
      {
        type: "p",
        body:
          "SEO takes longer than paid acquisition and pays off longer. That's the trade. The question isn't whether it works — it's whether you can fund the patience.",
      },
      {
        type: "p",
        body:
          "Here's an honest month-by-month view of what to expect when the work is consistent and the strategy is sound.",
      },
      { type: "h2", text: "Month 1: foundations land" },
      {
        type: "p",
        body:
          "Technical fixes — crawlability, indexation, schema, Core Web Vitals — ship in the first 3–4 weeks. You won't see big ranking shifts yet, but you'll see Search Console data clean up: crawl errors drop, indexed pages stabilize, impressions inch up on long-tail queries.",
      },
      { type: "h2", text: "Month 3: authority signals shift" },
      {
        type: "p",
        body:
          "By the end of month three, the first content cohort has been live for 6–8 weeks and the internal linking has had time to flow PageRank. You'll start seeing position 20-30 queries break into the top 10, and impressions on commercial keywords climb meaningfully.",
      },
      {
        type: "callout",
        body:
          "If month three feels slow, double-check intent fit. Most plateaus aren't authority problems — they're 'wrong page targeting wrong query' problems.",
      },
      { type: "h2", text: "Month 6+: the curve gets steep" },
      {
        type: "p",
        body:
          "This is when SEO starts to feel like a system. Topic clusters reinforce each other, branded search lifts, and the cost-per-acquisition story finally beats paid. The steepest growth typically arrives between months 6 and 12 — not at month 3 like most decks promise.",
      },
      { type: "h2", text: "What if it isn't working?" },
      {
        type: "ul",
        items: [
          "Pages are indexed but not ranking → intent or depth mismatch.",
          "Pages aren't indexed at all → crawl/render or quality threshold issue.",
          "Rankings move but traffic doesn't → titles and snippets, not rankings.",
          "Traffic moves but pipeline doesn't → bottom-of-funnel content gap.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I see results in 30 days?",
        a: "Sometimes — for branded queries or thin-competition long-tail. Don't plan around it. Plan for month three as the first inflection.",
      },
      {
        q: "Should I pause SEO if results lag at month two?",
        a: "Almost never. Month two is when content is most likely to be in 'discovery' mode — pausing now writes off the next four months of compounding.",
      },
    ],
    related: ["seo-audit-checklist-manila-brands", "local-seo-metro-manila-guide"],
  },
  {
    slug: "local-seo-metro-manila-guide",
    title: "Local SEO for Metro Manila: A Practical Guide",
    description:
      "How local SEO actually works in Metro Manila — Google Business Profile, location pages, citations, and the regional signals that move rankings.",
    excerpt:
      "Local SEO in Metro Manila isn't just GBP — it's a stack of signals. Here's the order to fix them in, and the regional details that matter most.",
    date: "2026-03-25",
    readMinutes: 6,
    category: "Local SEO",
    primaryKeyword: "local seo metro manila",
    secondaryKeywords: [
      "local seo philippines",
      "google business profile manila",
      "manila citation building",
      "local search optimization",
    ],
    cover: { variant: "map", palette: "cyan" },
    content: [
      {
        type: "p",
        body:
          "Local SEO in Metro Manila looks the same as anywhere else on the surface — but the ranking signals are weighted differently, and the competitive shape is unusual. Here's a practical sequence we run for clients across the NCR.",
      },
      { type: "h2", text: "Start with Google Business Profile" },
      {
        type: "p",
        body:
          "GBP is the single highest-leverage local asset. Fill out every field, verify with a real address, post weekly, and reply to every review — the good ones in two sentences, the bad ones with a calm, factual answer.",
      },
      { type: "h2", text: "Build location pages — barangay, not just city" },
      {
        type: "p",
        body:
          "If you serve Makati, Taguig, and Pasig, that's three location pages — not one. Each should mention nearby barangays, common landmarks, and service-specific details. Avoid duplicating boilerplate; Google flags it fast.",
      },
      { type: "h2", text: "Citations and NAP consistency" },
      {
        type: "ul",
        items: [
          "List on the major Philippines directories (Yellow Pages PH, Yelp PH, Foursquare).",
          "Use the exact same Name, Address, Phone format everywhere — punctuation included.",
          "Audit and clean up old citations from previous brand names or addresses.",
        ],
      },
      { type: "h2", text: "Reviews are a ranking signal" },
      {
        type: "p",
        body:
          "Recency matters as much as count. Aim for 2–4 fresh reviews a month, asked for at the moment of delivered value (not in a generic post-purchase email a week later).",
      },
      {
        type: "callout",
        body:
          "Don't gate reviews behind ratings. Filtering for 5-stars only is a Google policy violation and the lift you'd get isn't worth the risk.",
      },
    ],
    faqs: [
      {
        q: "How long does local SEO take in Metro Manila?",
        a: "GBP optimization shows movement in 2–4 weeks. Citation cleanup and review velocity compound over 3–6 months.",
      },
      {
        q: "Do I need separate pages for every Metro Manila city?",
        a: "Only for cities you actually serve and have content depth for. A thin page per city is worse than no page.",
      },
    ],
    related: ["seo-audit-checklist-manila-brands", "how-long-does-seo-take"],
  },
];

export const postBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

export const adjacentPosts = (slug: string) => {
  const i = posts.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? posts[i - 1] : null,
    next: i < posts.length - 1 ? posts[i + 1] : null,
  };
};

export const relatedPosts = (slug: string) => {
  const post = postBySlug(slug);
  if (!post) return [];
  return post.related
    .map((s) => postBySlug(s))
    .filter((p): p is Post => Boolean(p));
};
