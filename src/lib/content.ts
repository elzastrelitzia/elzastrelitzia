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
  {
    id: "21-savage",
    alt: "21 Savage portrait artwork.",
    width: 1050,
    height: 1400,
    src: "/gallery/21-savage.webp",
  },
  {
    id: "234",
    alt: "Cigarette pack poster study.",
    width: 1050,
    height: 1400,
    src: "/gallery/234.webp",
  },
  {
    id: "drifting-away",
    alt: "Poster reading “Letting my soul take me away from the hurt and despair”.",
    width: 1050,
    height: 1400,
    src: "/gallery/drifting-away.webp",
  },
  {
    id: "hrc",
    alt: "Honda Civic Type R HRC concept poster.",
    width: 1400,
    height: 933,
    src: "/gallery/hrc.webp",
  },
  {
    id: "better-to-be-hated",
    alt: "Poster reading “It is better to be hated for what you are than to be loved for what you are not”.",
    width: 1050,
    height: 1400,
    src: "/gallery/better-to-be-hated.webp",
  },
  {
    id: "life-is-art",
    alt: "Poster reading “Life is art, a miracle for all to see; I must tell you that you lived beautifully”.",
    width: 1050,
    height: 1400,
    src: "/gallery/life-is-art.webp",
  },
  {
    id: "bearbrand",
    alt: "Bearbrand brand infographic.",
    width: 1050,
    height: 1400,
    src: "/gallery/bearbrand.webp",
  },
  {
    id: "cold-day-in-hell",
    alt: "Poster reading “the past is a puzzle, like a broken mirror”.",
    width: 1050,
    height: 1400,
    src: "/gallery/cold-day-in-hell.webp",
  },
  {
    id: "lisa",
    alt: "Employee of the Month poster.",
    width: 1050,
    height: 1400,
    src: "/gallery/lisa.webp",
  },
  {
    id: "redbull",
    alt: "Red Bull poster study.",
    width: 1400,
    height: 525,
    src: "/gallery/redbull.webp",
  },
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
