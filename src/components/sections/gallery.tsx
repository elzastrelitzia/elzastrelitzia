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
            <ul className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 3xl:columns-8 4xl:columns-8 gap-4">
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
