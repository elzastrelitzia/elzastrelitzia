"use client";

import { useCallback, useEffect, useRef, type ReactNode } from "react";

// 0 < SPEED < 1: higher = faster, lower = slower and smoother
const SPEED = 0.05;

const canScroll = (el: HTMLElement | null, deltaY: number, root: HTMLElement): boolean => {
  if (!el || el === root || el === document.body || el === document.documentElement) return false;
  const style = getComputedStyle(el);
  const overflow = (style.overflowY || style.overflow) as string;
  const scrollable = overflow === "auto" || overflow === "scroll" || overflow === "overlay";
  if (scrollable) {
    if (deltaY > 0 && el.scrollTop < el.scrollHeight - el.clientHeight) return true;
    if (deltaY < 0 && el.scrollTop > 0) return true;
  }
  return canScroll(el.parentElement, deltaY, root);
};

export function SmoothScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const raf = useRef<number | null>(null);

  const onWheel = useCallback(
    (event: WheelEvent) => {
      const el = ref.current;
      if (!el) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const targetElement = event.target as HTMLElement | null;
      if (canScroll(targetElement, event.deltaY, el)) return;
      event.preventDefault();
      target.current += event.deltaY;
    },
    [],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    current.current = el.scrollTop;
    target.current = el.scrollTop;

    const loop = () => {
      current.current += (target.current - current.current) * SPEED;
      el.scrollTop = current.current;
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [onWheel]);

  return (
    <main id="main" ref={ref} className="overflow-y-auto md:h-[100svh]">
      {children}
    </main>
  );
}
