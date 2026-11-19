import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";

export function getGalleryItems() {
  const dir = join(process.cwd(), "public/gallery");
  const files = readdirSync(dir).filter((f) => f.endsWith(".webp")).sort();
  return files.map((f) => {
    let dims;
    try {
      dims = imageSize(readFileSync(join(dir, f)));
    } catch {
      dims = { width: 0, height: 0 };
    }
    return {
      id: f.replace(/\.webp$/, ""),
      alt: f.replace(/\.webp$/, "").replace(/[-_]/g, " "),
      src: `/gallery/${f}`,
      ...(dims.width && dims.height ? { w: dims.width, h: dims.height } : {}),
    };
  });
}
