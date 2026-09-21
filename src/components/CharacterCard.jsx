export default function CharacterCard({ name, title, image, description }) {
  return (
    <div className="character-card">
      {image && <img src={image} alt={name} className="character-card-img" />}
      <h3 className="character-card-name">{name}</h3>
      {title && <p className="character-card-title">{title}</p>}
      {description && <p className="character-card-desc">{description}</p>}
    </div>
  );
}
