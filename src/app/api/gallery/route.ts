import { NextResponse } from "next/server";

import { getGalleryItems } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export async function GET() {
  const gallery = getGalleryItems();
  return NextResponse.json(gallery);
}
