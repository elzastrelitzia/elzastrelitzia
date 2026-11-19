"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import type { ReactNode } from "react";

export function LenisScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const main = document.getElementById("main");
    if (!main) return;

    const lenis = new Lenis({
      wrapper: main,
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div id="main" className="md:overflow-y-auto md:h-[100svh]">
      {children}
    </div>
  );
}
