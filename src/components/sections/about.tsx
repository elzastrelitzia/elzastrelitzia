import { about } from "@/lib/content";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[var(--header-height)] px-[var(--gutter)] pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh]"
    >
      <div className="mx-auto flex h-full max-w-[var(--max-width)] flex-col">
        <div className="flex shrink-0 items-baseline justify-between gap-6 py-8">
          <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
            About
          </h2>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-12 py-12 md:gap-16">
          <p className="max-w-[40ch] text-[var(--step-2)] leading-[1.15] tracking-tight">
            {about.statement}
          </p>

          <dl className="grid w-full max-w-[32rem] grid-cols-[auto_1fr] gap-x-8 gap-y-2 text-[var(--step--1)]">
            {about.meta.map((entry) => (
              <div key={entry.label} className="contents">
                <dt className="uppercase tracking-[0.18em] text-muted">
                  {entry.label}
                </dt>
                <dd>{entry.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
