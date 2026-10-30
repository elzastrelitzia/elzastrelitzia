import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Gallery />
    </>
  );
}
