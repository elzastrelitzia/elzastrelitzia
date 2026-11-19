import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const dir = path.join(root, "public/gallery")

const slug = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")

const files = fs.readdirSync(dir).filter((f) => f.endsWith(".webp"))

for (const f of files) {
  const base = f.replace(/\.webp$/, "")
  const target = `${slug(base)}.webp`
  if (f === target) continue
  fs.renameSync(path.join(dir, f), path.join(dir, target))
  console.log(`Renamed: ${f} -> ${target}`)
}
