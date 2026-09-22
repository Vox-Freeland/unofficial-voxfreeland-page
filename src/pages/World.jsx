import azadaMap from '../assets/images/azada-map.jpg';

export default function World() {
  return (
    <div className="page page-world">
      <h1>The World of Azada</h1>
      <p>Lore, maps, and factions from the series.</p>

      <section className="world-section">
        <p className="world-intro">
          Azada is reached from Earth through a portal torn open by generations of
          meditating monks in Tebett. At its heart lies the Deadlands — a scorched,
          Mad-Max-style expanse the size of Texas, unnaturally hot, and claimed by
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
            <p>A northern Greek-inspired land ruled from the capital of Adelfi, seat of the Antholic Church and its Templar Knights.</p>
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
          <li><strong>Jipsu witches</strong> — settle at 30, then age slowly. Lifespan of roughly 500 years.</li>
          <li><strong>Frihettians</strong> — settle at 30, aging at the same slow rate as the Jipsu. Lifespan of roughly 500 years.</li>
          <li><strong>Vampires</strong> — settle at 30, aging slower than the Jipsu but faster than true elves. Capped near 2,000 years.</li>
          <li><strong>True elves</strong> — settle at 30, then age slowest of all. Lifespan of roughly 4,000 years.</li>
        </ul>
      </section>
    </div>
  );
}
