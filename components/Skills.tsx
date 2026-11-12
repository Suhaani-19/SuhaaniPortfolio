import { skills } from "@/lib/data";
import Reveal from "./Reveal";

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
        {Object.entries(skills).map(([category, items], i) => (
          <Reveal key={category} delay={i * 0.08}>
          <div className="h-full rounded-xl border border-line/10 bg-surface/40 p-5 transition-colors hover:border-violet/40">
            <p className="font-mono text-xs uppercase tracking-wider text-violet">
              {category}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line/10 px-3 py-1 text-xs text-muted transition-colors hover:border-mint/50 hover:text-mint"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
