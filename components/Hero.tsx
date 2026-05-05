"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false });

const ease = [0.21, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-neon-violet/10 blur-3xl" />
        <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-neon-blue/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 pt-24 lg:grid-cols-12 lg:gap-12 lg:pt-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.05 },
            },
          }}
          className="lg:col-span-7"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="eyebrow"
          >
            SEO · Manila · Since 2021
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
          >
            SEO that <span className="text-neon">compounds</span>.
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="mt-6 max-w-xl text-lg text-bright/80"
          >
            Technical SEO and content strategy for ambitious brands in Manila and beyond. Clear reporting, measured wins, and rankings that hold.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
            }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link href="/contact" className="btn-neon">
              Book a free audit
            </Link>
            <Link href="/services" className="btn-ghost">
              See services
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
            }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted"
          >
            <span>Trusted by Metro Manila brands</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted/40 md:inline-block" />
            <span>Transparent monthly retainers</span>
            <span className="hidden h-1 w-1 rounded-full bg-muted/40 md:inline-block" />
            <span>3+ years compounding wins</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="glass relative aspect-square overflow-hidden rounded-lg shadow-glow">
            <NeuralCanvas />
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between">
              <div className="font-mono text-[10px] uppercase tracking-widest text-bright/60">
                Live · indexing
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-neon-violet" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-bright/60">
                  +312% YoY
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
