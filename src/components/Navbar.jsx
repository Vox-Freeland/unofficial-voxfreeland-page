import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Vox Freeland</Link>
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/trilogy">The Trilogy</Link></li>
        <li><Link to="/world">The World</Link></li>
      </ul>
    </nav>
  );
}
