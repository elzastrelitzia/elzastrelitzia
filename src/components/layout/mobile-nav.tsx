"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  active: string | null;
};

export function MobileNav({ open, onClose, active: _active }: MobileNavProps) {
  const pathname = usePathname();
  const onGallery = pathname === "/gallery" || pathname.startsWith("/gallery/");

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const desktop = window.matchMedia("(min-width: 768px)");
    const onDesktop = () => {
      if (desktop.matches) onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    document.getElementById("mobile-nav")?.querySelector("a")?.focus();

    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      id="mobile-nav"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper/90 backdrop-blur-xl px-[var(--gutter)] pb-8 pt-[calc(var(--header-height)+2rem)] md:hidden"
    >
      <nav aria-label="Sections">
        <ul>
          <li
            className="flex items-baseline gap-4 border-b border-line py-4"
          >
            <span className="text-[var(--step--1)] tabular-nums text-muted">
              01
            </span>
            <a
              href={onGallery ? "/" : "/gallery"}
              onClick={onClose}
              aria-current={onGallery ? "page" : undefined}
              className={`text-[clamp(2rem,10vw,3.5rem)] uppercase leading-none tracking-tight underline-offset-8 decoration-1 ${
                onGallery ? "text-ink underline" : "text-muted hover:text-ink hover:underline"
              }`}
            >
              {onGallery ? "Back to home" : "Gallery"}
            </a>
          </li>
        </ul>
      </nav>

      <a
        href={`mailto:${site.email}`}
        className="mt-8 text-[var(--step--1)] underline underline-offset-4"
      >
        {site.email}
      </a>
    </div>
  );
}
