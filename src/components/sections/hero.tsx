import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="flex h-[calc(100svh-var(--header-height)-var(--footer-height))] flex-col justify-center px-[var(--gutter)]"
    >
      <h1 className="sr-only">{site.name}</h1>

      <div
        role="img"
        aria-label="elz, star"
        className="hero-mark mx-auto text-ink"
      />

      <p className="hero-copy mx-auto mt-10 max-w-[var(--measure)] text-center text-[var(--step-1)] leading-snug text-muted">
        {site.hero.line}
      </p>

      <a
        href="#projects"
        className="hero-cue mx-auto mt-12 inline-flex items-center gap-2 text-[var(--step--1)] uppercase tracking-[0.18em] underline-offset-8 hover:underline"
      >
        {site.hero.cta}
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  );
}
