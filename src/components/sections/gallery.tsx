"use client";

import { useEffect, useRef, useState } from "react";

import { GalleryItem } from "@/components/ui/gallery-item";
import { gallery, type GalleryEntry } from "@/lib/gallery.gen";

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ top: false, bottom: false });
  const [items, setItems] = useState<GalleryEntry[]>(gallery);

  useEffect(() => {
    const shuffled = [...gallery];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(shuffled);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      setEdges({
        top: scroller.scrollTop > 8,
        bottom:
          scroller.scrollTop + scroller.clientHeight <
          scroller.scrollHeight - 8,
      });
    };

    update();
    scroller.addEventListener("scroll", update, { passive: true });

    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    if (scroller.firstElementChild) observer.observe(scroller.firstElementChild);

    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="gallery"
      className="pb-[var(--footer-height)] pt-[var(--header-height)] md:h-[100svh]"
    >
      <div className="mx-auto flex flex-col px-[var(--gutter)] md:h-full">
        <div className="flex shrink-0 items-baseline justify-between gap-6 py-8">
          <h2 className="text-[var(--step--1)] uppercase tracking-[0.18em] text-muted">
            Gallery
          </h2>
          <p className="text-[var(--step--1)] tabular-nums text-muted">
            {String(gallery.length).padStart(2, "0")}
          </p>
        </div>

        <div className="relative min-h-0 md:flex-1">
          <div
            ref={scrollerRef}
            role="region"
            aria-label="Gallery"
            tabIndex={0}
            onWheel={(event) => event.stopPropagation()}
            className="md:h-full md:overflow-y-auto md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
          >
            <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 3xl:columns-7 4xl:columns-8 gap-4">
              {items.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </ul>
            <div className="h-8" aria-hidden="true" />
          </div>

          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-8 bg-gradient-to-b from-paper to-transparent motion-safe:transition-opacity motion-safe:duration-200 ${
              edges.top ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 h-8 bg-gradient-to-t from-paper to-transparent motion-safe:transition-opacity motion-safe:duration-200 ${
              edges.bottom ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}
