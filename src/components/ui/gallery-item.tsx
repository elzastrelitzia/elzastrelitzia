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
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = document.createElement("img");
    img.src = item.src;
    img.onload = () => {
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight });
      setLoaded(true);
    };
  }, [item.src]);

  const aspect = dimensions ? `${dimensions.w} / ${dimensions.h}` : "3 / 4";

  return (
    <li
      className="mb-4 break-inside-avoid select-none"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: aspect }}
      >
        {item.src ? (
          <>
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center blur-[24px] transition-opacity duration-700"
              style={{
                backgroundImage: `url(${item.src})`,
                opacity: loaded ? 0 : 1,
              }}
            />
            <Image
              fill
              src={item.src}
              alt={item.alt}
              sizes="(min-width: 1024px) 33vw, 50vw"
              loading="lazy"
              className={`h-full w-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </>
        ) : null}
      </div>
    </li>
  );
}
