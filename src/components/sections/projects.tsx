"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";

import { ProjectRow } from "@/components/ui/project-row";
import { projects, type Project } from "@/lib/content";

export function Projects() {
  const panelRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Project | null>(null);

  const place = (clientX: number, clientY: number) => {
    const panel = panelRef.current;
    const preview = previewRef.current;
    if (!panel || !preview) return;

    const rect = panel.getBoundingClientRect();
    const x = Math.min(
      Math.max(clientX - rect.left + 24, 16),
      rect.width - preview.offsetWidth - 16,
    );
    const y = Math.min(
      Math.max(clientY - rect.top + 24, 16),
      rect.height - preview.offsetHeight - 16,
    );

    preview.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const show = (project: Project) => (event: MouseEvent<HTMLLIElement>) => {
    if (!project.image || !window.matchMedia("(hover: hover)").matches) {
      setActive(null);
      return;
    }

    place(event.clientX, event.clientY);
    setActive(project);
  };

  return (
    <section
      id="projects"
      className="pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh]"
    >
      <div
        ref={panelRef}
        className="relative mx-auto flex max-w-[var(--max-width)] flex-col px-[var(--gutter)] md:h-full"
      >
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
          onMouseMove={(event) => {
            if (active) place(event.clientX, event.clientY);
          }}
          onMouseLeave={() => setActive(null)}
          className="min-h-0 md:flex-1 md:overflow-y-auto md:overscroll-contain md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
        >
          <ol className="border-b border-line">
            {projects.map((project, index) => (
              <ProjectRow
                key={project.slug}
                project={project}
                index={index}
                onMouseEnter={show(project)}
              />
            ))}
          </ol>
          <div className="h-8" aria-hidden="true" />
        </div>

        <div
          ref={previewRef}
          aria-hidden="true"
          className={`pointer-events-none absolute left-0 top-0 z-20 hidden w-72 overflow-hidden rounded-xl border border-line bg-line motion-safe:transition-opacity motion-safe:duration-200 md:block ${
            active ? "opacity-100" : "opacity-0"
          }`}
        >
          {active?.image ? (
            <div className="relative aspect-video w-full">
              <Image
                src={active.image}
                alt=""
                fill
                sizes="18rem"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
