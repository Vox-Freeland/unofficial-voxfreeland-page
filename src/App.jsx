import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Trilogy from './pages/Trilogy.jsx';
import World from './pages/World.jsx';
import SecretRoom from './pages/SecretRoom.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trilogy" element={<Trilogy />} />
        <Route path="/world" element={<World />} />
        <Route path="/the-ledger" element={<SecretRoom />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
