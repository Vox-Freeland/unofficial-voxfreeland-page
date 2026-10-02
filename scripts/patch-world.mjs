import fs from "fs";
const f = "src/pages/World.jsx";
let s = fs.readFileSync(f, "utf8").replace(/\r\n/g, "\n");

const cut = (start, end, replacement) => {
  const a = s.indexOf(start);
  const b = a < 0 ? -1 : s.indexOf(end, a);
  if (a < 0 || b < 0) throw new Error("Marker not found: " + start);
  s = s.slice(0, a) + replacement + s.slice(b);
};

// 1) all p01..p26 imports, TODO placeholders and profileGroups -> data layer
cut("// ---- Compressed images", "function ProfileCard", `import characters from '../data/characters.json';

// Vite bundles every file in the folder and gives us a URL for each
const images = import.meta.glob('../assets/characters/*.jpg', {
  eager: true,
  import: 'default',
});
const imgFor = (file) => images['../assets/characters/' + file];

const portraits = characters.filter((c) => c.type === 'character');
// earth-visit is shown in "The Fall Summit & The Earth Journey" instead
const scenes = characters.filter((c) => c.type === 'scene' && c.id !== 'earth-visit');

`);

// 2) card component
cut("function ProfileCard", "export default function World", `function ProfileCard({ item }) {
  const alt = item.alt || [item.name, item.title].filter(Boolean).join(' — ');
  return (
    <figure className={\`profile-card\${item.type === 'scene' ? ' profile-card--wide' : ''}\`}>
      <img src={imgFor(item.image)} alt={alt} loading="lazy" />
      <figcaption>
        <h3>{item.name}</h3>
        {item.title && <span className="profile-title">{item.title}</span>}
        {item.note && <p>{item.note}</p>}
      </figcaption>
    </figure>
  );
}

`);

// 3) Earth Journey image
if (!s.includes("src={p16}")) throw new Error("p16 reference not found");
s = s.replace("src={p16}", "src={imgFor('earth-visit.jpg')}");

// 4) PDF link + grouped map -> two grids
cut('<p className="profile-download">', "</section>", `<h3 className="profile-group-title">Characters</h3>
        <div className="profile-grid">
          {portraits.map((c) => <ProfileCard item={c} key={c.id} />)}
        </div>

        <h3 className="profile-group-title">Scenes</h3>
        <div className="profile-grid">
          {scenes.map((c) => <ProfileCard item={c} key={c.id} />)}
        </div>
      `);

fs.writeFileSync(f, s);
console.log("World.jsx patched");
