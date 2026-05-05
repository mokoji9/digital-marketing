"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import JsonLd from "./JsonLd";
import type { FAQ as FAQItem } from "@/lib/seo";

export default function FAQ({
  items,
  eyebrow = "Frequently asked",
  title = "Questions worth answering.",
}: {
  items: readonly FAQItem[];
  eyebrow?: string;
  title?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-hairline">
      <JsonLd
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((it) => ({
            "@type": "Question",
            name: it.q,
            acceptedAnswer: { "@type": "Answer", text: it.a },
          })),
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="eyebrow">{eyebrow}</div>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {title}
          </h2>
        </div>
        <div className="md:col-span-8">
          <ul className="divide-y divide-hairline border-y border-hairline">
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <li key={it.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-bright"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium md:text-xl">
                      {it.q}
                    </span>
                    <span
                      className={`mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full border border-hairline text-xs transition-transform ${
                        isOpen ? "rotate-45 border-neon-violet/50" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.21, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-base text-bright/75">
                          {it.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
