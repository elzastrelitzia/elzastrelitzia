"use client";

import { usePathname } from "next/navigation";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "gallery", label: "Gallery", href: "/gallery" },
] as const;

export function BottomNav({ className }: { className?: string }) {
  const pathname = usePathname();
  const activeId =
    navItems.find((item) => pathname === item.href || pathname.startsWith(item.href + "/"))?.id ??
    "home";

  return (
    <nav
      className={`fixed bottom-0 left-1/2 -translate-x-1/2 md:hidden z-[60] ${className ?? ""}`}
    >
      <div className="rounded-full bg-paper mb-8 px-3 py-3 relative flex items-center justify-center gap-2">
        {navItems.map((item) => {
          const active = activeId === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={[
                "relative flex items-center justify-center h-[44px] rounded-full transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)",
                active
                  ? "w-auto px-4 py-2 gap-2 bg-white/90 text-black font-medium hover:bg-white/80"
                  : "w-[44px] bg-ink/50 text-muted hover:bg-ink/60",
              ].join(" ")}
            >
              {item.id === "home" ? (
                active ? (
                  <svg
                    className={[
                      "w-[20px] h-[20px] transition-all duration-300 text-black",
                    ].join(" ")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <path fill="#000000" fillRule="evenodd" d="M0.993106,7.07012C0.360964,7.63904 0,8.44954 0,9.3V16.9639C0,18.6208 1.34315,19.9639 3,19.9639H17C18.6569,19.9639 20,18.6208 20,16.9639V9.3C20,8.44954 19.639,7.63904 19.0069,7.07012L12.0069,0.770117C10.866,-0.256706 9.13402,-0.256705 7.9931,0.770118L0.993106,7.07012ZM9,10.9639C7.89543,10.9639 7,11.8593 7,12.9639V16.9639C7,17.5162 7.44772,17.9639 8,17.9639H12C12.5523,17.9639 13,17.5162 13,16.9639V12.9639C13,11.8593 12.1046,10.9639 11,10.9639H9Z" />
                  </svg>
                ) : (
                  <svg
                    className={[
                      "w-[20px] h-[20px] transition-all duration-300 text-muted",
                    ].join(" ")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                  >
                    <path fill="#000000" fillRule="evenodd" d="M3,19.9639C1.34315,19.9639 0,18.6208 0,16.9639V9.3C0,8.44954 0.360964,7.63904 0.993106,7.07012L7.9931,0.770118C9.13402,-0.256705 10.866,-0.256707 12.0069,0.770117L19.0069,7.07012C19.639,7.63904 20,8.44954 20,9.3V16.9639C20,18.6208 18.6569,19.9639 17,19.9639H3ZM18,9.3V16.9639C18,17.5162 17.5523,17.9639 17,17.9639H14V12.9639C14,11.3071 12.6569,9.96391 11,9.96391H9C7.34315,9.96391 6,11.3071 6,12.9639V17.9639H3C2.44772,17.9639 2,17.5162 2,16.9639V9.3C2,9.01651 2.12032,8.74635 2.33104,8.55671L9.33103,2.25671C9.71134,1.91443 10.2887,1.91443 10.669,2.25671L17.669,8.5567C17.8797,8.74635 18,9.01651 18,9.3ZM8,17.9639V12.9639C8,12.4116 8.44772,11.9639 9,11.9639H11C11.5523,11.9639 12,12.4116 12,12.9639V17.9639H8Z" />
                  </svg>
                )
              ) : (
                active ? (
                  <svg
                    className={[
                      "w-[20px] h-[20px] transition-all duration-300 text-black",
                    ].join(" ")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <defs>
                      <clipPath id="image-frame-clip">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      </clipPath>
                    </defs>
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" fill="none" />
                    <g clipPath="url(#image-frame-clip)">
                      <circle cx="9" cy="9" r="2" fill="currentColor" stroke="none" />
                      <path d="M5 21 14.086 11.914a2 2 0 0 1 2.828 0L21 16v5H5Z" fill="currentColor" stroke="none" />
                    </g>
                  </svg>
                ) : (
                  <svg
                    className={[
                      "w-[24px] h-[24px] transition-all duration-300 text-black",
                    ].join(" ")}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" fill="none" />
                    <circle cx="9" cy="9" r="2" fill="none" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" fill="none" />
                  </svg>
                )
              )}
              {active && (
                <span className="mt-0.5 text-[var(--step-1)] leading-none text-black opacity-100 transition-opacity duration-300 delay-75">
                  {item.label}
                </span>
              )}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
