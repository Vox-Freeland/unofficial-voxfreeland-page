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
 
}

