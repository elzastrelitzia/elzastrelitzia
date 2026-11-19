"use client";

import { useSection } from "@/components/layout/section-provider";
import Gallery from "@/components/sections/gallery";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageTransition } from "@/components/layout/page-transition";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

type ShellProps = {
  items: { id: string; alt: string; src: string; w?: number; h?: number }[];
};

export function Shell({ items }: ShellProps) {
  const { section, setSection } = useSection();

  return (
    <>
      <BottomNav section={section} onSectionChange={setSection} />
      <PageTransition section={section}>
        <>
          <Hero />
          <Projects />
        </>
        <Gallery items={items} />
      </PageTransition>
    </>
  );
}
