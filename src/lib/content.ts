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
