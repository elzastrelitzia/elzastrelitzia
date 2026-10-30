import type { GalleryItem as GalleryEntry } from "@/lib/content";

type GalleryItemProps = {
  item: GalleryEntry;
};

export function GalleryItem({ item }: GalleryItemProps) {
  return (
    <li className="mb-4 break-inside-avoid">
      <div
        className="w-full rounded-xl bg-line transition-opacity motion-safe:hover:opacity-90"
        style={{ aspectRatio: `${item.width} / ${item.height}` }}
        aria-hidden="true"
      />
    </li>
  );
}
