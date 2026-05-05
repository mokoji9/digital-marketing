import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-neon-violet/10 blur-3xl" />
      </div>
      <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-widest text-muted">
          404 · signal lost
        </div>
        <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          That page <span className="text-neon">drifted</span>.
        </h1>
        <p className="mt-6 max-w-xl text-bright/70">
          The URL doesn&apos;t resolve to anything we&apos;ve published. Try the home page, or jump straight into our services.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/" className="border-b border-neon-violet pb-1">
            Back to home →
          </Link>
          <Link
            href="/services"
            className="border-b border-hairline pb-1 text-bright/70 hover:text-bright"
          >
            See services →
          </Link>
        </div>
      </div>
    </section>
  );
}
