import sharp from "sharp";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const src = process.argv[2];
const outDir = "src/assets/characters";
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

const files = walk(src).filter(f => /\.(jpe?g|png|webp)$/i.test(f));

// same filename in several folders -> keep the largest (the original)
const byName = new Map();
for (const f of files) {
  const k = path.basename(f).toLowerCase();
  if (!byName.has(k) || fs.statSync(f).size > fs.statSync(byName.get(k)).size) byName.set(k, f);
}

const seenHash = new Map(), used = new Set(), manifest = [];
for (const f of [...byName.values()].sort()) {
  const hash = crypto.createHash("sha1").update(fs.readFileSync(f)).digest("hex");
  if (seenHash.has(hash)) { console.log("DUPLICATE skipped:", path.basename(f), "==", seenHash.get(hash)); continue; }
  seenHash.set(hash, path.basename(f));

  const base = path.basename(f, path.extname(f));
  const [rawName, ...rest] = base.split(/-\s+/);
  const name = rawName.replace(/-+$/, "").trim();
  const title = rest.join(" - ").trim();
  let slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  let s = slug, n = 2; while (used.has(s)) s = `${slug}-${n++}`; slug = s; used.add(slug);

  await sharp(f).rotate().resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(outDir, slug + ".jpg"));
  const kb = Math.round(fs.statSync(path.join(outDir, slug + ".jpg")).size / 1024);
  manifest.push({ id: slug, name, title, image: slug + ".jpg", source: path.basename(f) });
  console.log(slug.padEnd(45), kb + " KB");
}
fs.writeFileSync("src/data/characters.json", JSON.stringify(manifest, null, 2));
console.log("\nWrote", manifest.length, "entries to src/data/characters.json");
