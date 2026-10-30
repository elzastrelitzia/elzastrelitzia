import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 flex h-[var(--footer-height)] items-center justify-between gap-4 border-t border-line bg-paper px-[var(--gutter)] text-[var(--step--1)]">
      <span className="truncate">{site.name}</span>
      <a
        id="footer-email"
        href={`mailto:${site.email}`}
        className="truncate underline-offset-4 hover:underline"
      >
        {site.email}
      </a>
    </footer>
  );
}
