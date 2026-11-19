"use client";

import { GalleryItem } from "@/components/ui/gallery-item";

export default function Gallery({
  items,
}: {
  items: { id: string; alt: string; src: string; w?: number; h?: number }[];
}) {
  return (
    <section
      id="gallery"
      className="pb-[var(--footer-height)] pt-[var(--header-height)]"
    >
      <div className="mx-auto flex flex-col px-[var(--gutter)]">
        <div className="relative min-h-0">
          <ul className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-7 3xl:columns-8 4xl:columns-8 gap-4">
            {items.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
