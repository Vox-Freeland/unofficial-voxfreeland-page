import fs from "fs";
import path from "path";
const dir = "src/assets/characters", file = "src/data/characters.json";
const list = JSON.parse(fs.readFileSync(file, "utf8"));

// old id: [new id, display name, caption]
const scenes = {
  "astrid": ["astrid-byorn-freya", "Astrid, Byorn & Freya", ""],
  "jesper-rye-sofia": ["jesper-rye-sofia", "Jesper, Rye & Sofia", ""],
  "sofia-and-kailash": ["sofia-and-kailash", "Sofia & Kailash", ""],
  "sofia-and-ulysses": ["sofia-and-ulysses", "Sofia & Ulysses", ""],
  "adolfus-breaking-kade": ["adolfus-breaking-kade", "Adolfus Breaking Kade", ""],
  "adolfus-and-kade-interrogation-scene": ["adolfus-kade-interrogation", "Adolfus & Kade: Interrogation", ""],
  "sofia-rye-jesper-adolfus-astrid": ["earth-visit", "Earth Visit", "Sofia, Rye, Jesper, Adolfus & Astrid"],
  "verdani-vikru-standoff": ["verdani-vikru-standoff", "Verdani-Vikru Standoff", ""],
  "ubuntu-tribe": ["ubuntu-tribe", "Ubuntu Tribe", ""],
};
const people = {
  "sofia-page-0001": ["sofia", "Sofia"],
  "zahari-page-0001": ["zahari", "Zahari"],
};

for (const e of list) {
  const s = scenes[e.id], p = people[e.id];
  const old = e.image;
  if (s)      { e.id = s[0]; e.name = s[1]; e.title = s[2]; e.type = "scene"; }
  else if (p) { e.id = p[0]; e.name = p[1]; e.type = "character"; }
  else        { e.type = "character"; }
  e.image = e.id + ".jpg";
  if (old !== e.image) fs.renameSync(path.join(dir, old), path.join(dir, e.image));
}
list.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name) : a.type === "character" ? -1 : 1));
fs.writeFileSync(file, JSON.stringify(list, null, 2));
console.log(list.filter(x => x.type === "character").length, "characters,", list.filter(x => x.type === "scene").length, "scenes");
