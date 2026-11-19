import { getGalleryItems } from "@/lib/gallery";
import { Shell } from "@/components/layout/shell";

export default async function Home() {
  const items = getGalleryItems();
  return <Shell items={items} />;
}
