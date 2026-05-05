import Link from "next/link";
import { SITE } from "@/lib/seo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-hairline">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="font-display text-lg font-semibold">
            {SITE.shortName}
            <span className="text-neon-violet">.</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted">
            SEO specialist in {SITE.location.city}. Built for compounding work.
          </p>
        </div>

        <div>
          <div className="eyebrow">Pages</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/services" className="hover:text-bright">Services</Link></li>
            <li><Link href="/pricing" className="hover:text-bright">Pricing</Link></li>
            <li><Link href="/case-studies" className="hover:text-bright">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-bright">Blog</Link></li>
            <li><Link href="/about" className="hover:text-bright">About</Link></li>
            <li><Link href="/contact" className="hover:text-bright">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{SITE.contact.email}</li>
            <li>{SITE.contact.phone}</li>
            <li>{SITE.location.city}, {SITE.location.country}</li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Get started</div>
          <Link href="/contact" className="btn-ghost mt-4 text-sm">
            Book a free audit →
          </Link>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-xs text-muted">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span className="font-mono">v0.1</span>
        </div>
      </div>
    </footer>
  );
}
