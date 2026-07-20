import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-widest text-mint">
        Work
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink">
        Things I&rsquo;ve shipped
      </h2>
      <p className="mt-2 max-w-xl text-muted">
        From multi-agent pipelines to production-deployed full-stack apps.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
