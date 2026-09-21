import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Trilogy from './pages/Trilogy.jsx';
import World from './pages/World.jsx';
import SecretRoom from './pages/SecretRoom.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // top-level route table; SecretRoom is unlisted in any nav but reachable via the sigil trigger
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trilogy" element={<Trilogy />} />
        <Route path="/world" element={<World />} />
        <Route path="/secret-room" element={<SecretRoom />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
