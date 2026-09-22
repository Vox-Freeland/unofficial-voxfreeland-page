function BookCard({ title, tagline, cover, amazonLink }) {
  return (
    <div className="book-card">
      <img src={cover} alt={title} className="book-card-cover" />
      <h3>{title}</h3>
      <p>{tagline}</p>
      <a href={amazonLink} target="_blank" rel="noopener noreferrer" className="buy-button">
        Buy on Amazon
      </a>
    </div>
  );
}
