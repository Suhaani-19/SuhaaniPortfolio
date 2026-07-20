import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">
        Stack
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
        What I build with
      </h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-white/10 bg-surface/40 p-5"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-violet">
              {category}
            </p>
            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
