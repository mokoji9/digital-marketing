import Link from "next/link";
import PageHeader from "./PageHeader";

export default function ComingSoon({
  eyebrow,
  h1,
  lede,
  upcoming,
  primary,
  secondary,
}: {
  eyebrow: string;
  h1: string;
  lede: string;
  upcoming: string[];
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} h1={h1} lede={lede} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow">Coming next</div>
            <p className="mt-4 max-w-md text-bright/70">
              Sections currently being built — drop in to see them filled in over the coming weeks.
            </p>
          </div>
          <ul className="md:col-span-8 md:border-l md:border-hairline md:pl-10">
            {upcoming.map((u, i) => (
              <li
                key={u}
                className="flex items-center gap-4 border-b border-hairline py-4 text-bright/85"
              >
                <span className="font-mono text-xs text-muted">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-6 text-sm">
          <Link href={primary.href} className="border-b border-neon-violet pb-1">
            {primary.label} →
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="border-b border-hairline pb-1 text-bright/70 hover:text-bright"
            >
              {secondary.label} →
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
