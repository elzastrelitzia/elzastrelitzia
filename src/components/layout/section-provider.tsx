"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Section = "home" | "gallery";

const SectionContext = createContext<{
  section: Section;
  setSection: (section: Section) => void;
} | null>(null);

export function SectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [section, setSection] = useState<Section>("home");
  return (
    <SectionContext.Provider value={{ section, setSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSection() {
  const ctx = useContext(SectionContext);
  if (!ctx) {
    throw new Error("useSection must be used within a SectionProvider");
  }
  return ctx;
}
