import { ProjectRow } from "@/components/ui/project-row";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <section
      id="projects"
      className="pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh]"
    >
      <div className="mx-auto flex max-w-[var(--max-width)] flex-col px-[var(--gutter)] md:h-full">
        <div className="flex shrink-0 items-baseline justify-between gap-6 py-8">
          <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
            Projects
          </h2>
          <p className="text-[var(--step--1)] tabular-nums text-muted">
            {String(projects.length).padStart(2, "0")}
          </p>
        </div>

        <div
          role="region"
          aria-label="Project list"
          tabIndex={0}
          className="min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-contain md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
        >
          <ol className="border-b border-line">
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </ol>
          <div className="h-8" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
