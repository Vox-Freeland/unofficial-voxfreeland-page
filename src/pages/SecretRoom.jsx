import { Link } from 'react-router-dom';

export default function SecretRoom() {
  return (
    <div className="page page-secret-room">
      <h1>???</h1>
      <p>You found the sigil. Welcome to the hidden room.</p>
      <Link to="/" className="cta-button">Return to the surface</Link>
    </div>
  );
}
