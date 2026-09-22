import azadaMap from '../assets/images/azada-map.jpg';

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
    </div>
  );
}
