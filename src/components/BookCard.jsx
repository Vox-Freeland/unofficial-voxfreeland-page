function BookCard({ title, tagline, cover, amazonLink }) {
  return (
    <div className="book-card">
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <p>{tagline}</p>
      <a href={amazonLink} target="_blank" className="buy-button">
        Buy on Amazon
      </a>
    </div>
  );
  <footer>
  <p>This is an <strong>unofficial fan site</strong> dedicated to author
  Vox Freeland's work. Not affiliated with or endorsed by Vox Freeland.
  All books available for purchase on Amazon — links provided for
  convenience.</p>
</footer>
}

