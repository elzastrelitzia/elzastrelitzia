import { site } from "@/lib/site";
import { about } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col px-[var(--gutter)] pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh] md:justify-center"
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-[var(--gutter)] w-full mx-auto md:max-w-[calc(var(--max-width)+var(--gutter)*2)]"
      >
        <div className="flex flex-col gap-6 py-4 md:gap-[var(--gutter)] md:py-0">
          <h1 className="sr-only">{site.name}</h1>

          <div
            role="img"
            aria-label="elz, star"
            className="hero-mark mx-auto md:mx-0 text-ink max-h-[18rem]"
          />

          <p className="hero-copy mx-auto mt-8 max-w-[var(--measure)] text-center text-[var(--step-1)] leading-snug text-muted md:text-left md:mt-0">
            {site.hero.line}
          </p>

          <a
            href="#projects"
            className="hero-cue mx-auto mt-10 inline-flex items-center gap-2 text-[var(--step--1)] uppercase tracking-[0.18em] underline-offset-8 hover:underline md:mx-0 md:mt-0"
          >
            {site.hero.cta}
            <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="flex flex-col gap-6 py-4 md:gap-[var(--gutter)] md:py-0">
          <section
            id="about"
            className="scroll-mt-[var(--header-height)] flex flex-col justify-center gap-4 py-4 md:py-8 rounded-xl border border-line bg-paper/50 backdrop-blur-sm p-[var(--gutter)]"
          >
            <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
              About
            </h2>
            <p className="max-w-[40ch] text-[var(--step-2)] leading-[1.15] tracking-tight">
              {about.statement}
            </p>
          </section>
          <section
            id="contact"
            className="scroll-mt-[var(--header-height)] flex flex-col justify-center gap-4 py-4 md:py-8 rounded-xl border border-line bg-paper/50 backdrop-blur-sm p-[var(--gutter)]"
          >
            <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
              Contact
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="inline-block text-[var(--step-1)] leading-none tracking-tight underline-offset-[0.18em] decoration-1 hover:underline"
            >
              {site.email}
            </a>
            <a
              href={site.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-[var(--step--1)] text-muted underline-offset-4 hover:text-ink hover:underline"
            >
              Or reach me on Telegram
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </section>
  );
}
