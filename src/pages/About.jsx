export default function About() {
  return (
    <div className="page page-about">
      <h1>About the Author</h1>
      <p className="about-tagline">The voice behind The Azada Chronicles.</p>

      <section className="world-section">
        <p className="world-intro">
          Vox Freeland is a creative writer with a lifelong passion for storytelling
          and more than three decades of experience developing original dramatic
          works, including plays and screenplays. Before turning fully to fiction,
          Vox spent many years in a writing-intensive professional career centered
          on research, persuasive communication, and advocacy — experience that
          now informs a unique blend of analytical rigor, psychological insight,
          and narrative craft.
        </p>
      </section>

      <section className="world-section">
        <h2>Writing Strengths</h2>
        <div className="card-grid">
          <div className="book-card">
            <h3>Storytelling &amp; Structure</h3>
            <p>Creative writing, playwriting, screenwriting, and narrative construction.</p>
          </div>
          <div className="book-card">
            <h3>Character &amp; Dialogue</h3>
            <p>Character-driven development, dialogue craft, and psychology-informed character analysis.</p>
          </div>
          <div className="book-card">
            <h3>Research &amp; Persuasion</h3>
            <p>Analytical research, persuasive writing, and translating complex ideas into clear, accessible language.</p>
          </div>
          <div className="book-card">
            <h3>Communication &amp; Voice</h3>
            <p>Public speaking, audience engagement, and editing and revision.</p>
          </div>
        </div>
      </section>

      <section className="world-section">
        <h2>Creative Interests</h2>
        <ul className="settling-list">
          <li>Literary &amp; contemporary fiction</li>
          <li>Psychological drama</li>
          <li>Screenwriting &amp; playwriting</li>
          <li>Character-driven storytelling</li>
          <li>Social and legal themes in fiction</li>
        </ul>
      </section>

      <section className="world-section">
        <h2>Themes Explored in The Azada Chronicles</h2>
        <ul className="settling-list">
          <li>Democracy v. Authoritarianism</li>
          <li>AI Tyranny v. Faith and Humanity</li>
          <li>Corrupted Institutions Redeemed by Rebels</li>
          <li>Found Family and Resistance Cells</li>
          <li>Ancient Creatures with Complex Codes of Honor</li>
        </ul>
      </section>

      <section className="world-section">
        <h2>Author Statement</h2>
        <p className="world-intro">
          Storytelling has remained a constant throughout Vox Freeland's life.
          Years spent advocating for others through careful research, persuasive
          writing, and public service instilled a deep discipline for narrative —
          but creative writing has always been the enduring passion beneath it.
          Vox is now dedicating this stage of life to developing original fiction
          and dramatic works for publication and production, starting with The
          Azada Chronicles.
        </p>
      </section>

      <section className="world-section">
        <h2>Contact</h2>
        <p className="world-intro">
          For inquiries, reach out at{' '}
          <a href="mailto:voxfreeland@gmail.com" className="contact-email">
            voxfreeland@gmail.com
          </a>.
        </p>
      </section>
    </div>
  );
}
