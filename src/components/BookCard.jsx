export default function BookCard({
  title,
  shortTitle,
  tagline,
  cover,
  amazonLink,
  status,
}) {
  return (
    <div className="book-card">
      {cover ? (
        <img
          src={cover}
          alt={`${title} cover`}
          className="book-card-cover"
        />
      ) : (
        <div className="book-card-cover-placeholder">
          <span>
            {shortTitle}
            <br />
            Cover Coming Soon
          </span>
        </div>
      )}

      <h3>{title}</h3>

      {tagline && <p>{tagline}</p>}

      {amazonLink ? (
        <a
          href={amazonLink}
          className="buy-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy on Amazon
        </a>
      ) : (
        <span className="buy-button-disabled" aria-disabled="true">
          {status === 'preorder' ? 'Preorder Coming Soon' : 'Coming Soon'}
        </span>
      )}
    </div>
  );
}
