"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
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
      className="fixed inset-0 z-40 flex flex-col justify-between overflow-y-auto bg-paper px-[var(--gutter)] pb-8 pt-[calc(var(--header-height)+2rem)] md:hidden"
    >
      <nav aria-label="Sections">
        <ul>
          {site.nav.map((item, index) => (
            <li
              key={item.id}
              className="flex items-baseline gap-4 border-b border-line py-4"
            >
              <span className="text-[var(--step--1)] tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <a
                href={item.href}
                onClick={onClose}
                className="text-[clamp(2rem,10vw,3.5rem)] uppercase leading-none tracking-tight"
              >
                {item.label}
              </a>
            </li>
          ))}
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
