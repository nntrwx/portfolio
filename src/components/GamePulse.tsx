import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GamePulse.css';

const GamePulse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kyo-page">
      <nav className="kyo-nav">
        <div className="nav-logo">
          <Link to="/">[ back ]</Link> GAMEPULSE
        </div>
        <a 
          href="https://nntrwx.github.io/gamepulse/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="visit-link"
        >
          Live Site ↗
        </a>
      </nav>

      <section id="hero" className="kyo-hero">
        <p className="kyo-subtitle">— Case Study / 2026</p>
        <h1 className="kyo-title">GamePulse</h1>
        <div className="kyo-meta">
          <div className="meta-item">
            <label>Role</label>
            <span>Frontend Developer / UI/UX Designer</span>
          </div>
          <div className="meta-item">
            <label>Tools</label>
            <span>React / TypeScript / CSS</span>
          </div>
          <div className="meta-item">
            <label>Type</label>
            <span>Web Application</span>
          </div>
          <div className="meta-item">
            <label>Year</label>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="overview" className="kyo-overview">
        <p className="kyo-subtitle">— Overview</p>
        <h2>GamePulse — SaaS Landing Page & Dashboard.</h2>
        <p>
          End-to-end design and development of a gaming statistics web app. Conducted the full design process in Figma — user flows, component system, responsive layouts — and built the production-ready site independently using Next.js, React, Tailwind CSS, and GSAP for scroll animations and entrance effects. The project includes a conversion-focused landing page and a data-rich dashboard with RPG-style gamification. Fully responsive across mobile and desktop. Concept project with simulated data, built to showcase design and frontend skills.
        </p>
        <p>
            Key features:
            <br />
          • RPG-style progression system with XP, levels, achievements, and gaming streaks
          <br />

• Interactive analytics dashboard with activity heatmaps, engagement tracking, and genre insights<br />

• Game library with advanced filtering, sorting, and progression monitoring<br />

• Pulse digital companion providing personalized gaming insights and milestone tracking<br />

• Fully responsive SaaS concept featuring simulated gaming data, designed in Figma and built with Next.js, React, Tailwind CSS, and GSAP
        </p>
        
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="https://nntrwx.github.io/gamepulse/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-btn"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            view live project
          </a>
        </div>
      </section>

      <section id="concept" className="kyo-screens">
        <p className="kyo-subtitle">— Figma Concept </p>
        <div className="track">
          <div className="slide" style={{ display: 'block' }}>
            <p> ₊ ˚ ⌗</p>
            <img src={`${import.meta.env.BASE_URL}images/pgfigma.png`} 
              alt="Figma Concept" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
        </div>
      </section>

      <footer className="kyo-footer">
        <span>GamePulse — Case Study</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
};

export default GamePulse;
