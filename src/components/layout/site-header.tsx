"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onGallery = pathname === "/gallery" || pathname.startsWith("/gallery/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const main = document.getElementById("main");
    if (!main) return;
    const onScroll = () => setScrolled(main.scrollTop > 8);
    onScroll();
    main.addEventListener("scroll", onScroll, { passive: true });
    return () => main.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`relative z-50 flex h-[var(--header-height)] items-center justify-between gap-6 border-b bg-paper/50 backdrop-blur-2xl px-[var(--gutter)] ${
          scrolled ? "border-line" : "border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-3 text-ink">
          <span className="brand-mark" aria-hidden="true" />
          <span className="sr-only">{site.handle}, back to top</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a
                href={onGallery ? "/" : "/gallery"}
                aria-current={onGallery ? "page" : undefined}
                className={`text-[var(--step--1)] uppercase tracking-[0.18em] underline-offset-8 transition-colors ${
                  onGallery ? "text-ink underline" : "text-muted hover:text-ink hover:underline"
                }`}
              >
                {onGallery ? "Back to home" : "Gallery"}
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="/gallery"
          className="text-[var(--step--1)] uppercase tracking-[0.18em] md:hidden"
        >
          Gallery
        </a>
      </div>
    </header>
  );
}
