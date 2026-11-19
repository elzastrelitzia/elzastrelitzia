"use client";

export function PageTransition({
  section,
  children,
}: {
  section: "home" | "gallery";
  children: [React.ReactNode, React.ReactNode];
}) {
  const [homePanel, galleryPanel] = children;

  const homeTransform = section === "home" ? "translateX(0)" : "translateX(-100%)";
  const galleryTransform = section === "gallery" ? "translateX(0)" : "translateX(100%)";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out"
        style={{ transform: homeTransform }}
      >
        {homePanel}
      </div>
      <div
        className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden transition-transform duration-300 ease-in-out"
        style={{ transform: galleryTransform }}
      >
        {galleryPanel}
      </div>
    </div>
  );
}
