import { Link } from 'react-router-dom';

const AMAZON_LEDGER_URL =
  'https://www.amazon.com/dp/B0HKL489NH/ref=sr_1_1?crid=LBA267KFJVQQ&dib=eyJ2IjoiMSJ9.U1E6vWoBBE395210b0lsJQ.bNZSNJuCfPwzzt6W2rwS2hN9o-UO8F3dtM-nCzM3cSU&dib_tag=se&keywords=Vox+Freeland&qid=1790030031&sprefix=vox+freeland%2Caps%2C234&sr=8-1';

export default function SecretRoom() {
  return (
    <div className="page page-secret-room">
      <div className="secret-room">
        <h1>The American Ledger</h1>
        <p className="secret-room-subtitle">
          Three Plays on the American Experience
        </p>

        <p>
          Three plays, three centuries apart in spirit, bound by a single
          unresolved question: what is the difference between the face a
          country — or a person — shows the world, and the truth kept
          underneath it? A hymn becomes a map through one man's testimony.
          A guarded summer in the Texas desert hides a house with nothing
          behind its door. A single unbroken walk through present-day New
          York turns from history lesson into reckoning without warning.
        </p>

        <p>
          Read together, these three ledgers argue that the American story
          has never been finished — and never once let its people stop
          choosing, scene by scene, which version of the country they're
          willing to build.
        </p>

        <a
          href={AMAZON_LEDGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="buy-button"
        >
          Read on Amazon
        </a>

        <Link to="/" className="cta-button exit-link">
          Return to the surface
        </Link>
      </div>
    </div>
  );
}
