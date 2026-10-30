"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 flex h-[var(--header-height)] items-center justify-between gap-6 border-b bg-paper px-[var(--gutter)] ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 text-ink">
          <span className="brand-mark" aria-hidden="true" />
          <span className="sr-only">{site.handle}, back to top</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className="text-[var(--step--1)] uppercase tracking-[0.18em] underline-offset-8 hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => (open ? close() : setOpen(true))}
          className="text-[var(--step--1)] uppercase tracking-[0.18em] md:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <MobileNav open={open} onClose={close} />
    </header>
  );
}
