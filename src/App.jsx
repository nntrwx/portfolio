import { useRef } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import KYO from './components/KYO';
import GamePulse from './components/GamePulse';
import Mochi from './components/Mochi';

function Home() {
  const projectsSectionRef = useRef(null);

  const scrollToProjects = () => {
    projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <span className="logo">⋆ ˚｡⋆ n i k o l ⋆｡˚ ⋆</span>
        <div className="nav-links">
          <span className="tech-tag">[ digital products ]</span>
          <span className="tech-tag" style={{opacity: 0.4}}>[ graphic & print ]</span>
        </div>
      </nav>

      <main className="hero">
        <h1 className="hero-title">
          FRONT-END <br />
          <span className="editorial-italic">developer</span> & UI/UX <br />
          ENTHUSIAST
        </h1>

        <div className="hero-footer">
          <p className="hero-subtitle">
            minimalism ✦ glassmorphism ✦ japanese aesthetic
          </p>

          <button className="glass-btn" onClick={scrollToProjects}>
            view projects
          </button>
        </div>
      </main>

      <About />

      <div ref={projectsSectionRef}>
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kyo" element={<KYO />} />
        <Route path="/gamepulse" element={<GamePulse />} />
        <Route path="/mochi" element={<Mochi />} />
      </Routes>
    </Router>
  );
}

export default App;