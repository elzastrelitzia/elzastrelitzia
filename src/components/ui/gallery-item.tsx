"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type GalleryItemProps = {
  item: { id: string; alt: string; src: string };
};

export function GalleryItem({ item }: GalleryItemProps) {
  const [dimensions, setDimensions] = useState<{ w: number; h: number } | null>(
    null,
  );

  useEffect(() => {
    const img = document.createElement("img");
    img.src = item.src;
    img.onload = () =>
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
  }, [item.src]);

  const aspect = dimensions
    ? `${dimensions.w} / ${dimensions.h}`
    : "3 / 4";

  return (
    <li
      className="mb-4 break-inside-avoid select-none"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl bg-line"
        style={{ aspectRatio: aspect }}
      >
        {item.src ? (
          <Image
            fill
            src={item.src}
            alt={item.alt}
            sizes="(min-width: 1024px) 33vw, 50vw"
            loading="lazy"
            className="h-full w-full object-cover transition-opacity motion-safe:hover:opacity-90"
          />
        ) : null}
      </div>
    </li>
  );
}
