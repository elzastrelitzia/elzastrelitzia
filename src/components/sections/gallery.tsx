"use client";

import { useEffect, useState } from "react";

import { GalleryItem } from "@/components/ui/gallery-item";

export function Gallery() {
  const [items, setItems] = useState<{ id: string; alt: string; src: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/gallery")
      .then((res) => res.json())
      .then(async (data) => {
        if (cancelled) return;
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (cancelled) return;
        const shuffled = [...data];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        if (!cancelled) setItems(shuffled);
        setLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setLoading(false);
          setError(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const cardCount = loading ? 24 : items.length;

  return (
    <section
      id="gallery"
      className="pb-[var(--footer-height)] pt-[var(--header-height)]"
    >
      <div className="mx-auto flex flex-col px-[var(--gutter)]">
        <div className="relative min-h-0">
          <ul className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 3xl:columns-8 4xl:columns-8 gap-4">
            {loading
              ? Array.from({ length: cardCount }).map((_, i) => (
                  <li key={i} className="mb-4 break-inside-avoid select-none">
                    <div className="relative w-full overflow-hidden rounded-xl bg-line animate-pulse">
                      <div className="h-[70%] w-full bg-line" />
                      <div className="absolute inset-x-0 bottom-0 h-[22%] w-full bg-line" />
                    </div>
                  </li>
                ))
              : error ? (
                  <li className="mb-4 break-inside-avoid select-none">
                    <div className="relative w-full overflow-hidden rounded-xl bg-line animate-pulse" style={{ aspectRatio: "3 / 4" }}>
                      <div className="h-[70%] w-full bg-line" />
                      <div className="absolute inset-x-0 bottom-0 h-[22%] w-full bg-line" />
                    </div>
                    <p className="mt-2 text-center text-sm text-muted">Failed to load gallery</p>
                  </li>
                )
              : items.map((item) => (
                  <GalleryItem key={item.id} item={item} />
                ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
