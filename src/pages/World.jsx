import { useEffect } from 'react';
import azadaMap from '../assets/images/azada-map.jpg';

import characters from '../data/characters.json';

// Vite bundles every file in the folder and gives us a URL for each
const images = import.meta.glob('../assets/characters/*.jpg', {
  eager: true,
  import: 'default',
});
const imgFor = (file) => images['../assets/characters/' + file];

const portraits = characters.filter((c) => c.type === 'character');
// earth-visit is shown in "The Fall Summit & The Earth Journey" instead
const scenes = characters.filter((c) => c.type === 'scene' && c.id !== 'earth-visit');

function ProfileCard({ item }) {
  const alt = item.alt || [item.name, item.title].filter(Boolean).join(' — ');
  return (
    <figure className={`profile-card${item.type === 'scene' ? ' profile-card--wide' : ''}`}>
      <img src={imgFor(item.image)} alt={alt} loading="lazy" />
      <figcaption>
        <h3>{item.name}</h3>
        {item.title && <span className="profile-title">{item.title}</span>}
        {item.note && <p>{item.note}</p>}
      </figcaption>
    </figure>
  );
}

export default function World() {
  useEffect(() => {
    // Remove any existing tiktok script so we can force a fresh reload/reprocess
    const existingScript = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up when leaving the page
      script.remove();
    };
  }, []);

  return (
    <div className="page page-world">
      <h1>The World of Azada</h1>
      <p>Lore, maps, and factions from the series.</p>

      <section className="world-section">
        <p className="world-intro">
          Azada is reached from Earth through a portal torn open by generations of
          meditating monks in Tebett. At its heart lies the Deadlands — a scorched,
          Mad-Max-style expanse with hostile terrain, and claimed by
          two warring clans who answer to no king.
        </p>
      </section>

      <section className="world-section">
        <img src={azadaMap} alt="Map of the Realm of Azada" className="world-map" />
      </section>

      <section className="world-section">
        <h2>The Lands of Azada</h2>
        <div className="card-grid">
          <div className="book-card">
            <h3>Attaka</h3>
            <p>An ancient, Turkish-inspired eastern realm reshaped by ruthless technology — the seat of Terran Minsk's regime.</p>
          </div>
          <div className="book-card">
            <h3>Tebett</h3>
            <p>A Tibetan-inspired highland sanctuary, home to the meditating monks who first opened the portal between Earth and Azada.</p>
          </div>
          <div className="book-card">
            <h3>Mekhu</h3>
            <p>A northern Greek-inspired land controlled through its religious hub, Adelfi, seat of the Antholic Church and Templar Knights, though its capital lies in Theron.</p>
          </div>
          <div className="book-card">
            <h3>Grecca</h3>
            <p>A Mediterranean-inspired southern realm and ancestral home of the Jipsu witch clans.</p>
          </div>
          <div className="book-card">
            <h3>The Deadlands</h3>
            <p>A desert badlands at Azada's heart, contested by the vampiric Verdani and the cannibal Vikru.</p>
          </div>
          <div className="book-card">
            <h3>Frihett</h3>
            <p>An unnaturally cold island in the far southern Dark Sea, home to a noble Viking-elf bloodline bound to spirit animals.</p>
          </div>
        </div>
      </section>

      <section className="world-section">
        <h2>Terran Minsk &amp; The Attakan Regime</h2>
        <div className="card-grid">
          <div className="book-card">
            <h3>Terran Minsk</h3>
            <p>An Earth-born tech billionaire who slipped through the Tebett portal decades ago and has ruled Attaka ever since — armed with ambition, artificial intelligence, and an iron belief in his own vision.</p>
          </div>
          <div className="book-card">
            <h3>SEREN</h3>
            <p>Minsk's brilliant, merciless AI. Utterly obedient — yet its flawless logic can't help exposing the cracks in its creator's certainty.</p>
          </div>
          <div className="book-card">
            <h3>The Selenai</h3>
            <p>Minsk's elite assassins: half-human, half-machine, engineered for silence and slaughter, and bound to him as the only father they've ever known.</p>
          </div>
        </div>
      </section>

      <section className="world-section">
        <h2>The Rebel Witches</h2>
        <div className="card-grid">
          <div className="book-card">
            <h3>Orrin Vale</h3>
            <p>The cell's quiet architect. Shadow-craft — weaving half-darkness to blur passage and bend perception.</p>
          </div>
          <div className="book-card">
            <h3>Kael Dryst</h3>
            <p>Magnetic and sharp-eyed. Sound-sigil craft — shaping sound itself into force.</p>
          </div>
          <div className="book-card">
            <h3>Dax Keth</h3>
            <p>Wiry, quick, recklessly optimistic. Wind-run magic — bending air to carry whispers and plant suggestion.</p>
          </div>
          <div className="book-card">
            <h3>Nyra Kesh</h3>
            <p>Commanding and unafraid. Flame-lace magic — shaping heat and light into living forms.</p>
          </div>
          <div className="book-card">
            <h3>Lynette Vell</h3>
            <p>The group's quiet anchor. Moon-veil magic — reading unspoken needs and steering the moment.</p>
          </div>
          <div className="book-card">
            <h3>Olivia Dessa</h3>
            <p>Sea-ward magic — communing with tides and currents to shift momentum and mood.</p>
          </div>
        </div>
        <p className="rebel-note">
          Six outcasts wielding shadow, sound, wind, flame, moonlight, and tide — proof that even the deepest tyranny cannot smother a spark of rebellion.
        </p>
      </section>

      <section className="world-section">
        <h2>The Fall Summit &amp; The Earth Journey</h2>
        <p className="world-intro">
          As the free lands gather at the Tebett Fall Summit to strategize against
          Attaka, a small band crosses the portal back to Earth — and returns with
          Noma, leader of the Ubuntu tribe, whose music carries a frequency that
          weakens SEREN itself. Combined with the ancient chants of the Tebett
          monks, it may be the only force powerful enough to shatter Minsk's grip.
        </p>
        <figure className="profile-card profile-card--wide">
          <img
            src={imgFor('earth-visit.jpg')}
            alt="Five travelers step out of a glowing rune portal onto a rain-slicked Earth highway"
            loading="lazy"
          />
          <figcaption>
            <h3>Crossing Back to Earth</h3>
          </figcaption>
        </figure>
      </section>

      <section className="world-section">
        <h2>The Settling — How Azada's Peoples Age</h2>
        <p className="world-intro">
          Every long-lived people of Azada — witches, Frihettians, vampires, and
          true elves alike — ages like an ordinary human through childhood and
          youth, until their thirties. That's when the settling hits: their true
          blood inheritance comes fully online, and aging sharply decelerates.
        </p>
        <ul className="settling-list">
          <li><strong>Humans</strong> — no settling; aging never slows.</li>
          <li><strong>Jipsu witches</strong> — settle in their 30s, then age slowly. Lifespan of roughly 500 years.</li>
          <li><strong>Frihettians</strong> — settle in their 30s, aging at the same slow rate as the Jipsu. Lifespan of roughly 500 years.</li>
          <li><strong>Vampires</strong> — settle in their 30s, aging slower than the Jipsu but faster than true elves. Capped near 2,000 years.</li>
          <li><strong>True elves</strong> — settle in their 30s, then age slowest of all. Lifespan of roughly 4,000 years.</li>
        </ul>
      </section>

      <section className="world-section">
        <h2>Faces of Azada</h2>
        <p className="world-intro">
          Portraits and scenes from across the realm, gathered by land and people.
        </p>
        <h3 className="profile-group-title">Characters</h3>
        <div className="profile-grid">
          {portraits.map((c) => <ProfileCard item={c} key={c.id} />)}
        </div>

        <h3 className="profile-group-title">Scenes</h3>
        <div className="profile-grid">
          {scenes.map((c) => <ProfileCard item={c} key={c.id} />)}
        </div>
      </section>

      <section className="world-section">
        <h2>World Videos</h2>
        <div className="tiktok-video-grid">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@realmbender6/video/7689836826214944014"
            data-video-id="7689836826214944014"
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                rel="noreferrer"
                title="@realmbender6"
                href="https://www.tiktok.com/@realmbender6?refer=embed"
              >
                @realmbender6
              </a>
              <p>Watch on TikTok</p>
              <a
                target="_blank"
                rel="noreferrer"
                title="realmbender6"
                href="https://www.tiktok.com/@realmbender6/video/7689836826214944014"
              >
                View original video
              </a>
            </section>
          </blockquote>

          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@realmbender6/video/7689174379481058573"
            data-video-id="7689174379481058573"
            style={{ maxWidth: '605px', minWidth: '325px' }}
          >
            <section>
              <a
                target="_blank"
                rel="noreferrer"
                title="@realmbender6"
                href="https://www.tiktok.com/@realmbender6?refer=embed"
              >
                @realmbender6
              </a>
              <p>Watch on TikTok</p>
              <a
                target="_blank"
                rel="noreferrer"
                title="realmbender6"
                href="https://www.tiktok.com/@realmbender6/video/7689174379481058573"
              >
                View original video
              </a>
            </section>
          </blockquote>
        </div>
      </section>
    </div>
  );
}