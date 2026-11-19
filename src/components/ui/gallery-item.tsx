"use client";

import Image from "next/image";

import type { GalleryItem as GalleryEntry } from "@/lib/content";

type GalleryItemProps = {
  item: GalleryEntry;
};

export function GalleryItem({ item }: GalleryItemProps) {
  return (
    <li
      className="mb-4 break-inside-avoid select-none"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div
        className="w-full overflow-hidden rounded-xl bg-line"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
      >
        {item.src ? (
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            draggable={false}
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="h-full w-full object-cover transition-opacity motion-safe:hover:opacity-90"
          />
        ) : null}
      </div>
    </li>
  );
}
