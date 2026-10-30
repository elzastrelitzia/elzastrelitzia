export type Project = {
  slug: string;
  title: string;
  kind: string;
  year: string;
  role: string;
  tags: string[];
  image?: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "common-ground",
    title: "Common Ground",
    kind: "Identity",
    year: "2026",
    role: "Design & build",
    tags: ["Naming", "Wordmark"],
  },
  {
    slug: "paper-radio",
    title: "Paper Radio",
    kind: "Website",
    year: "2025",
    role: "Art direction",
    tags: ["Sound", "Archive"],
  },
  {
    slug: "quiet-hours",
    title: "Quiet Hours",
    kind: "Editorial",
    year: "2025",
    role: "Design",
    tags: ["Print", "Grid"],
  },
  {
    slug: "field-notes",
    title: "Field Notes",
    kind: "Photography",
    year: "2024",
    role: "Design & build",
    tags: ["Web", "Writing"],
  },
];

export type GalleryItem = {
  id: string;
  alt: string;
  width: number;
  height: number;
  src?: string;
};

export const gallery: GalleryItem[] = [
  { id: "untitled", alt: "Untitled study, 2026", width: 900, height: 1200 },
  { id: "studio", alt: "Studio interior in morning light", width: 1000, height: 1000 },
  { id: "paper", alt: "Paper study with folded forms", width: 1000, height: 1250 },
  { id: "window", alt: "Window light across a wall", width: 1200, height: 800 },
  { id: "grid", alt: "Notes on a grid system", width: 1000, height: 1250 },
  { id: "dusk", alt: "Field at dusk", width: 1000, height: 1000 },
];
