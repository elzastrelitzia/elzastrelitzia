"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { GalleryCardSkeleton } from "@/components/ui/gallery-card-skeleton";

type GalleryItemProps = {
  item: { id: string; alt: string; src: string; w?: number; h?: number };
};

export function GalleryItem({ item }: GalleryItemProps) {
  const [loaded, setLoaded] = useState(false);
  const [orientation, aspect] = item.w && item.h ? item.w > item.h ? ["landscape", `${item.w} / ${item.h}`] as const : ["portrait", `${item.w} / ${item.h}`] as const : ["portrait", "3 / 4"] as const;

  useEffect(() => {
    let cancelled = false;
    const img = document.createElement("img");
    img.src = item.src;
    img.onload = () => { if (!cancelled) setLoaded(true); };
    img.onerror = () => { if (!cancelled) setLoaded(true); };
    return () => { cancelled = true; };
  }, [item.src]);

  return (
    <li
      className="mb-4 break-inside-avoid select-none"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div
        className="relative w-full overflow-hidden rounded-xl"
        style={{ aspectRatio: aspect }}
      >
        {!loaded ? (
          <GalleryCardSkeleton
            orientation={orientation}
            className={`transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
          />
        ) : (
          <>
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center blur-[24px] transition-opacity duration-700"
              style={{ backgroundImage: `url(${item.src})`, opacity: loaded ? 0 : 1 }}
            />
            <Image
              fill
              src={item.src}
              alt={item.alt}
              sizes="(min-width: 1024px) 33vw, 50vw"
              loading="eager"
              onLoad={() => setLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
          </>
        )}
      </div>
    </li>
  );
}
