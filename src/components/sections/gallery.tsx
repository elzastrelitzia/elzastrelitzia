"use client";

import { useEffect, useState } from "react";

import { GalleryItem } from "@/components/ui/gallery-item";

export function Gallery() {
  const [items, setItems] = useState<{ id: string; alt: string; src: string }[]>(
    [],
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/gallery")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setItems(data);
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="gallery"
      className="pb-[var(--footer-height)] pt-[var(--header-height)]"
    >
      <div className="mx-auto flex flex-col px-[var(--gutter)]">
        <div className="relative min-h-0">
          {loading ? (
            <div className="animate-pulse flex min-h-[300px] items-center justify-center">
              <span className="text-muted">Loading gallery…</span>
            </div>
          ) : (
            <ul className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 3xl:columns-7 4xl:columns-8 gap-4">
              {items.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
