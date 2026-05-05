import type { Section } from "@/lib/blog";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function PostBody({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-6">
      {sections.map((s, i) => {
        switch (s.type) {
          case "h2": {
            const id = s.id ?? slugify(s.text);
            return (
              <h2
                key={i}
                id={id}
                className="mt-12 scroll-mt-24 font-display text-2xl font-semibold tracking-tight text-bright md:text-3xl"
              >
                {s.text}
              </h2>
            );
          }
          case "h3": {
            const id = s.id ?? slugify(s.text);
            return (
              <h3
                key={i}
                id={id}
                className="mt-8 scroll-mt-24 font-display text-xl font-medium tracking-tight text-bright"
              >
                {s.text}
              </h3>
            );
          }
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-bright/85">
                {s.body}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-2">
                {s.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-bright/85"
                  >
                    <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-neon-violet" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {s.items.map((it, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-4 text-bright/85"
                  >
                    <span className="font-mono text-xs text-muted">
                      {(j + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="glass my-2 rounded-lg border-l-2 border-neon-violet p-6 text-bright/85"
              >
                {s.body}
              </aside>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-2 border-l-2 border-neon-violet/60 pl-6"
              >
                <p className="font-display text-xl italic text-bright/90 md:text-2xl">
                  &ldquo;{s.body}&rdquo;
                </p>
                {s.attribution && (
                  <footer className="mt-3 text-sm text-muted">
                    — {s.attribution}
                  </footer>
                )}
              </blockquote>
            );
        }
      })}
    </div>
  );
}
