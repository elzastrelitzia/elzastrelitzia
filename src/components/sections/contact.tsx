"use client";

import { useEffect, useRef } from "react";

import { site } from "@/lib/site";

const EASING = "cubic-bezier(0.2, 0.6, 0.2, 1)";
const FLIGHT_MS = 600;
const FADE_MS = 360;
const TRIGGER = 0.4;

function canAnimate() {
  return (
    window.matchMedia("(min-width: 768px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Contact() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    const footerEmail = document.getElementById("footer-email");
    if (!link || !footerEmail) return;

    let inView = false;
    let footerAnim: Animation | undefined;
    let linkAnim: Animation | undefined;

    const stop = () => {
      footerAnim?.cancel();
      linkAnim?.cancel();
      footerAnim = undefined;
      linkAnim = undefined;
    };

    // FLIP illusion: the big email starts at the footer link's box and
    // travels to its own position while the footer copy fades out.
    const morph = (entering: boolean) => {
      stop();

      const footerRect = footerEmail.getBoundingClientRect();
      const linkRect = link.getBoundingClientRect();
      if (!linkRect.height) return;

      const scale = footerRect.height / linkRect.height;
      const dx = footerRect.left - linkRect.left;
      const dy = footerRect.top - linkRect.top;
      const away = `translate(${dx}px, ${dy}px) scale(${scale})`;

      footerAnim = footerEmail.animate(
        entering ? [{ opacity: 1 }, { opacity: 0 }] : [{ opacity: 0 }, { opacity: 1 }],
        { duration: FADE_MS, easing: "linear", fill: "both" },
      );

      linkAnim = link.animate(
        entering
          ? [{ transform: away }, { transform: "none" }]
          : [
              { transform: "none", opacity: 1 },
              { transform: away, opacity: 0 },
            ],
        entering
          ? { duration: FLIGHT_MS, easing: EASING }
          : { duration: FLIGHT_MS, easing: EASING, fill: "both" },
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const next = entry.isIntersecting && entry.intersectionRatio >= TRIGGER;
        if (next === inView) return;
        inView = next;

        if (canAnimate()) morph(next);
        else stop();
      },
      { threshold: [0, TRIGGER, 1] },
    );

    observer.observe(link);

    const reobserve = () => {
      if (canAnimate()) return;
      stop();
      inView = false;
      observer.disconnect();
      observer.observe(link);
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    window.addEventListener("resize", reobserve);
    motionQuery.addEventListener("change", reobserve);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", reobserve);
      motionQuery.removeEventListener("change", reobserve);
      stop();
    };
  }, []);

  return (
    <section
      id="contact"
      className="scroll-mt-[var(--header-height)] px-[var(--gutter)] pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh]"
    >
      <div className="mx-auto flex h-full max-w-[var(--max-width)] flex-col">
        <div className="flex shrink-0 items-baseline justify-between gap-6 py-8">
          <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
            Contact
          </h2>
        </div>

        <div className="flex flex-1 flex-col items-start justify-center gap-6 pb-12 md:gap-8">
          <a
            ref={linkRef}
            href={`mailto:${site.email}`}
            className="inline-block origin-top-left text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.04em] underline-offset-[0.18em] decoration-1 hover:underline"
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
        </div>
      </div>
    </section>
  );
}
