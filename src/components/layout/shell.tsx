"use client";

import { useState } from "react";

import Gallery from "@/components/sections/gallery";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PageTransition } from "@/components/layout/page-transition";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";

type ShellProps = {
  items: { id: string; alt: string; src: string; w?: number; h?: number }[];
};

export function Shell({ items }: ShellProps) {
  const [section, setSection] = useState<"home" | "gallery">("home");

  return (
    <>
      <PageTransition section={section}>
        <>
          <Hero />
          <Projects />
        </>
        <Gallery items={items} />
      </PageTransition>
      <BottomNav section={section} onSectionChange={setSection} />
    </>
  );
}
