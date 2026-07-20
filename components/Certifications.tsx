import { certifications } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certs" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">
        Certifications
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
        Credentials, logged
      </h2>

      <div className="mt-10 divide-y divide-white/10 rounded-xl border border-white/10 bg-surface/40">
        {certifications.map((c) => (
          <a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-2 p-5 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-display text-base font-medium text-ink">
                {c.name}
                <span className="ml-2 font-body text-sm font-normal text-muted">
                  — {c.org}
                </span>
              </p>
              <p className="mt-1 max-w-2xl text-sm text-muted">{c.detail}</p>
            </div>
            <span className="shrink-0 font-mono text-xs text-amber">
              {c.date}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
