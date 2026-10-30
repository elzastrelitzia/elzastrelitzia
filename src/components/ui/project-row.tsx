import type { MouseEvent } from "react";

import type { Project } from "@/lib/content";

type ProjectRowProps = {
  project: Project;
  index: number;
  onMouseEnter?: (event: MouseEvent<HTMLLIElement>) => void;
};

export function ProjectRow({
  project,
  index,
  onMouseEnter,
}: ProjectRowProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <li className="border-t border-line" onMouseEnter={onMouseEnter}>
      <article className="group grid gap-4 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-x-8 md:py-10">
        <p className="flex items-center gap-2 whitespace-nowrap text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
          <span className="tabular-nums">{number}</span>
          <span aria-hidden="true">—</span>
          <span>{project.kind}</span>
        </p>

        <h3 className="text-[var(--step-3)] leading-[0.95] tracking-tight motion-safe:transition-transform motion-safe:group-hover:translate-x-2">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-8 hover:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <div className="md:justify-self-end md:text-right">
          <p className="text-[var(--step-1)] text-muted">{project.role}</p>
          <p className="mt-1 text-[var(--step--1)] tabular-nums text-muted">
            {project.year}
          </p>
          <ul className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-[var(--step--1)] uppercase tracking-[0.18em] text-muted md:justify-end">
            {project.tags.map((tag, tagIndex) => (
              <li key={tag} className="flex items-center gap-2">
                {tagIndex > 0 ? <span aria-hidden="true">·</span> : null}
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}
