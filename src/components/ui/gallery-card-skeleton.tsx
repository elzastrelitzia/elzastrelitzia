"use client";

type GalleryCardSkeletonProps = {
  orientation?: "portrait" | "landscape";
  className?: string;
};

export function GalleryCardSkeleton({
  orientation = "portrait",
  className = "",
}: GalleryCardSkeletonProps) {
  const aspect = orientation === "landscape" ? "4 / 3" : "3 / 4";

  return (
    <div className="mb-4 break-inside-avoid select-none">
      <div
        className={`relative w-full overflow-hidden rounded-xl ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <div className="absolute inset-0 bg-muted animate-pulse" />
      </div>
    </div>
  );
}
