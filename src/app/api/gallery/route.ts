import { NextResponse } from "next/server";
import { readdirSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-dynamic";

export async function GET() {
  const dir = join(process.cwd(), "public/gallery");
  const files = readdirSync(dir).filter((f) => f.endsWith(".webp")).sort();
  const gallery = files.map((f) => ({
    id: f.replace(/\.webp$/, ""),
    alt: f.replace(/\.webp$/, "").replace(/[-_]/g, " "),
    src: `/gallery/${f}`,
  }));
  return NextResponse.json(gallery);
}
