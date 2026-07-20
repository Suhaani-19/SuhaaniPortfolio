import { profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-mint">
            About
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
            Currently training on <span className="text-gradient">agentic AI</span>
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {profile.summary}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.education.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-lg border border-white/10 bg-surface/50 p-4"
              >
                <p className="font-mono text-xs text-amber">{edu.period}</p>
                <p className="mt-1 font-display text-sm font-medium text-ink">
                  {edu.degree}
                </p>
                <p className="mt-1 text-sm text-muted">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-mint">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
