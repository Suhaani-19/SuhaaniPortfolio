import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-violet/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-muted">{project.date}</p>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-amber">{project.tagline}</p>
        </div>
      </div>

      <ul className="mt-4 space-y-2">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mint"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 font-mono text-xs">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors hover:text-violet"
        >
          Code ↗
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="text-muted transition-colors hover:text-amber"
        >
          Live demo ↗
        </a>
      </div>
    </article>
  );
}
