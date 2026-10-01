import { useEffect } from 'react';
import azadaMap from '../assets/images/azada-map.jpg';

import p01 from '../assets/images/world/profile-01.jpg';
import p02 from '../assets/images/world/profile-02.jpg';
import p03 from '../assets/images/world/profile-03.jpg';
import p04 from '../assets/images/world/profile-04.jpg';
import p05 from '../assets/images/world/profile-05.jpg';
import p06 from '../assets/images/world/profile-06.jpg';
import p07 from '../assets/images/world/profile-07.jpg';
import p08 from '../assets/images/world/profile-08.jpg';
import p09 from '../assets/images/world/profile-09.jpg';
import p10 from '../assets/images/world/profile-10.jpg';
import p11 from '../assets/images/world/profile-11.jpg';
import p12 from '../assets/images/world/profile-12.jpg';
import p13 from '../assets/images/world/profile-13.jpg';
import p14 from '../assets/images/world/profile-14.jpg';
import p15 from '../assets/images/world/profile-15.jpg';
import p16 from '../assets/images/world/profile-16.jpg';
import p17 from '../assets/images/world/profile-17.jpg';
import p18 from '../assets/images/world/profile-18.jpg';
import p19 from '../assets/images/world/profile-19.jpg';
import p20 from '../assets/images/world/profile-20.jpg';
import p21 from '../assets/images/world/profile-21.jpg';
import p22 from '../assets/images/world/profile-22.jpg';
import p23 from '../assets/images/world/profile-23.jpg';
import p24 from '../assets/images/world/profile-24.jpg';
import p25 from '../assets/images/world/profile-25.jpg';

/*
  EDIT ME: add each character's real name in `name` and a short line in `note`.
  `title` is a descriptive placeholder shown when `name` is empty.
  `wide: true` makes the card span the full row (for scene art).
*/
const profileGroups = [
  {
    id: 'attaka',
    heading: 'Attaka — The Regime',
    intro: 'Ruthless technology wrapped in ancient Turkish-inspired architecture.',
    profiles: [
      { img: p12, title: 'The Tech Lord', name: '', note: '', alt: 'Dark-haired man with glowing circuit-lit eyes and a circuit-patterned collar' },
      { img: p15, title: 'SEREN', name: '', note: '', alt: 'Crystalline, fractured AI figure surrounded by server stacks' },
      { img: p11, title: 'A Selenai Assassin', name: '', note: '', alt: 'White-haired half-machine assassin with blade arms in a tiled hall' },
      { img: p21, title: 'The Captive', name: '', note: '', alt: 'A bound white-haired Selenai being studied by a long-haired golden-blond man', wide: true },
    ],
  },
  {
    id: 'tebett',
    heading: 'Tebett — The Sanctuary',
    intro: 'Highland monasteries, prayer flags, and the monks who opened the portal.',
    profiles: [
      { img: p04, title: 'The Elder Monk', name: '', note: '', alt: 'Elderly bald monk with a white beard and wooden prayer beads' },
      { img: p06, title: 'The Young Seeker', name: '', note: '', alt: 'Freckled young woman with a long braid beneath prayer flags' },
      { img: p23, title: 'Flight Through the Monastery', name: '', note: '', alt: 'Woman and a boy racing through a snowy Tebett courtyard as monks rush past', wide: true },
    ],
  },
  {
    id: 'mekhu',
    heading: 'Mekhu — The Church & The Templars',
    intro: 'Greek-inspired lands ruled through the Antholic Church and its knights.',
    profiles: [
      { img: p02, title: 'The Crowned Churchman', name: '', note: '', alt: 'Pale, dark-haired man in a spiked iron crown and black-and-purple vestments' },
      { img: p25, title: 'The Templar Knight', name: '', note: '', alt: 'Red-haired knight in laurel-and-cross armor overlooking a vineyard' },
      { img: p24, title: 'The Soldier & The Wanderer', name: '', note: '', alt: 'A soldier marked VIII examining a satchel beside a red-haired woman', wide: true },
    ],
  },
  {
    id: 'frihett',
    heading: 'Frihett & The Elves',
    intro: 'A Viking-elf bloodline of storm, fur, and spirit animals.',
    profiles: [
      { img: p03, title: 'The One-Eyed Warrior', name: '', note: '', alt: 'Scarred, eye-patched woman in fur and leather before a snowy fjord village' },
      { img: p05, title: 'The Braided Elf-Lord', name: '', note: '', alt: 'Blond, blue-eyed elf with a braided beard in rune-etched armor' },
      { img: p09, title: 'The Storm-Coast Hunter', name: '', note: '', alt: 'Scarred, grey-eyed man in furs before a stormy coast' },
      { img: p08, title: 'The Fjord Matriarch', name: '', note: '', alt: 'Violet-eyed elf woman in braids and furs above a misty fjord' },
      { img: p07, title: 'The Forest Elf', name: '', note: '', alt: 'Long-haired blond elf clad in moss, twigs, and oak leaves' },
      { img: p22, title: 'Camp Beneath the Mountains', name: '', note: '', alt: 'Eye-patched warrior and a pale elf woman beside a Frihettian war camp', wide: true },
    ],
  },
  {
    id: 'deadlands',
    heading: 'The Deadlands — Verdani & Vikru',
    intro: 'Vampires and cannibal clans fighting over scorched, bone-strewn badlands.',
    profiles: [
      { img: p01, title: 'The Golden-Haired Verdani', name: '', note: '', alt: 'Long-haired golden-blond man in a rune-embroidered black coat in torchlit ruins' },
      { img: p19, title: 'The Crowned Rune-Witch', name: '', note: '', alt: 'Silver-streaked woman in a horned, rune-etched crown wreathed in violet sigils' },
      { img: p18, title: 'Verdani vs. Vikru', name: '', note: '', alt: 'Vampires and tribal warriors clashing with glowing sigils in the desert', wide: true },
    ],
  },
  {
    id: 'grecca',
    heading: 'Grecca — The Jipsu',
    intro: 'Sun-baked Mediterranean witch clans and their wandering kin.',
    profiles: [
      { img: p10, title: 'The Grinning Wanderer', name: '', note: '', alt: 'Smiling white-blond man with hoop earrings and a moon pendant in a desert' },
      { img: p14, title: 'The Green-Eyed Rogue', name: '', note: '', alt: 'Black-haired, green-eyed man with a sly smile and bone charms' },
      { img: p20, title: 'The Twin Tides Council', name: '', note: '', alt: 'Three companions studying a Twin Tides scroll beneath two moons', wide: true },
    ],
  },
  {
    id: 'ubuntu',
    heading: 'The Ubuntu Tribe',
    intro: 'Their music carries a frequency that weakens SEREN itself.',
    profiles: [
      { img: p13, title: 'Noma', name: 'Noma', note: 'Leader of the Ubuntu tribe.', alt: 'Older woman in beads and feathers wreathed in golden sound waves' },
      { img: p17, title: 'The Drum Circle', name: '', note: '', alt: 'Ubuntu elders drumming and singing around a fire, sound rippling through the air', wide: true },
    ],
  },
];

function ProfileCard({ profile }) {
  const heading = profile.name || profile.title;
  return (
    <figure className={`profile-card${profile.wide ? ' profile-card--wide' : ''}`}>
      <img src={profile.img} alt={profile.alt} loading="lazy" />
      <figcaption>
        <h3>{heading}</h3>
        {profile.name && profile.title && profile.name !== profile.title && (
          <span className="profile-title">{profile.title}</span>
        )}
        {profile.note && <p>{profile.note}</p>}
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
            src={p16}
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
        <p className="profile-download">
          <a href="/downloads/azada-profiles.pdf" target="_blank" rel="noreferrer">
            Download the full character profile PDF
          </a>
        </p>

        {profileGroups.map((group) => (
          <div className="profile-group" key={group.id}>
            <h3 className="profile-group-title">{group.heading}</h3>
            {group.intro && <p className="profile-group-intro">{group.intro}</p>}
            <div className="profile-grid">
              {group.profiles.map((profile) => (
                <ProfileCard profile={profile} key={profile.alt} />
              ))}
            </div>
          </div>
        ))}
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
