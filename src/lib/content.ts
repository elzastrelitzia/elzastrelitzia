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
    slug: "libremusic",
    title: "libremusic",
    kind: "Android app",
    year: "2026",
    role: "Design & build",
    tags: ["Kotlin", "Android", "Audio"],
    image: "/projects/libremusic.png",
    href: "https://libremusic-web.vercel.app/",
  },
  {
    slug: "chromagrade",
    title: "Chromagrade",
    kind: "Web app",
    year: "2026",
    role: "Design & build",
    tags: ["WebGL", "TypeScript", "Color"],
    href: "https://github.com/elzastrelitzia/chromagrade",
  },
  {
    slug: "eyeseeyou",
    title: "eyeseeyou",
    kind: "IoT",
    year: "2026",
    role: "Fork & extend",
    tags: ["ESP32", "OLED", "Web"],
    href: "https://github.com/elzastrelitzia/eyeseeyou",
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

export const about = {
  statement:
    "Hi, I am a software engineer interested in graphic design, UI/UX, web, and video. I build mobile and desktop applications, plus systems on IoT and microcontrollers like ESP32 and Arduino.",
  meta: [
    { label: "Based", value: "Indonesia" },
    { label: "Focus", value: "Software, interface, IoT" },
    { label: "Tools", value: "FigCraft, FilmCraft, PhotoCraft, Zed, Vim, Etc." },
  ],
};
