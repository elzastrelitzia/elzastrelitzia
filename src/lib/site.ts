export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export const site = {
  name: "elza strelitzia",
  handle: "elz ★",
  email: "elzax64@gmail.com",
  telegram: "https://web.telegram.org/k/#@strelitzia77",
  title: "elz ★ — elza strelitzia",
  description:
    "Portfolio and playground of elza strelitzia. Type, interfaces, and quiet experiments on the web.",
  hero: {
    line: "Designer and developer. Sharp type, quiet interfaces, nothing that gets in the way.",
    cta: "Projects",
  },
  nav: [
    { id: "projects", label: "Project", href: "#projects" },
    { id: "gallery", label: "Gallery", href: "#gallery" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
};
