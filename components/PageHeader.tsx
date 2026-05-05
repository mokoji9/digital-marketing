"use client";

import { motion } from "framer-motion";

const ease = [0.21, 1, 0.36, 1] as const;

export default function PageHeader({
  eyebrow,
  h1,
  lede,
}: {
  eyebrow: string;
  h1: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-[400px] w-[600px] rounded-full bg-neon-violet/10 blur-3xl" />
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-24 md:grid-cols-12 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-7"
        >
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {h1}
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          className="self-end text-base text-bright/75 md:col-span-5 md:text-lg"
        >
          {lede}
        </motion.p>
      </div>
    </section>
  );
}
