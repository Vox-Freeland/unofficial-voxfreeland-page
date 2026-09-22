import azadaMap from '../assets/images/azada-map.jpg';
import BookCard from '../components/BookCard';

const books = [
  {
    title: 'THE AZADA CHRONICLES BOOK 1: Songs From Earth',
    shortTitle: 'Songs From Earth',
    tagline: null,
    cover: null,
    amazonLink: null, // add when live in a couple weeks
    status: 'preorder',
  },
  {
    title: 'THE AZADA CHRONICLES BOOK 2: The Gathering Storm',
    shortTitle: 'The Gathering Storm',
    tagline: null,
    cover: null,
    amazonLink: null,
    status: 'upcoming',
  },
  {
    title: 'THE AZADA CHRONICLES BOOK 3: The Azadan World War',
    shortTitle: 'The Azadan World War',
    tagline: null,
    cover: null,
    amazonLink: null,
    status: 'upcoming',
  },
];

export default function Trilogy() {
  return (
    <div className="page page-trilogy">
      <h1>The Trilogy</h1>
      <p>An overview of the three books in The Azada Chronicles.</p>

      <div className="trilogy-synopsis">
        <p className="trilogy-hook">
          A monastery in Tebett tore a hole in reality — and something human slipped through that never should have found the door.
        </p>

        <p>
          Beyond that door lies Azada: a fractured realm of witches, vampires, and warring kingdoms, all kneeling beneath one man's cold ambition. Terran Minsk, an Earth-born billionaire turned conqueror, has spent decades bending a world to his will — armed not with magic, but with a merciless AI and assassins built for silence and slaughter. Now he wants all of it.
        </p>

        <p>
          Against him: a fragile alliance bound by secrets, forbidden love, and buried rage — a witch guarding a hidden son, a warrior who buried her heart for a coward king, a vampire lord clawing back from torture, and six outcast Rebel Witches who refuse to let tyranny smother their spark.
        </p>

        <p>
          Salvation, when it comes, arrives in the last form anyone expects: song.
        </p>
      </div>

      <div className="azada-map-wrapper">
        <img
          src={azadaMap}
          alt="Map of the Realm of Azada, showing Attaka, Tebett, Mekhu, Grecca, the Deadlands, and Frihett"
          className="azada-map"
        />
        <p className="map-caption">The Realm of Azada</p>
      </div>

      <div className="card-grid">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
        ))}
      </div>
    </div>
  );
}
