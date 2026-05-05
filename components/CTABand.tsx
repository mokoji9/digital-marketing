"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.21, 1, 0.36, 1] as const;

export default function CTABand({
  eyebrow = "Get started",
  title,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-violet/10 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease }}
        className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32"
      >
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-bright/75">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href={primary.href} className="btn-neon">
            {primary.label}
          </Link>
          {secondary && (
            <Link href={secondary.href} className="btn-ghost">
              {secondary.label}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
