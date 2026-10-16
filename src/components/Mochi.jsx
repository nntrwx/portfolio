import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GamePulse.css';
import './Mochi.css';

const desktopScreens = [
  { file: 'hero_desk.jpg', label: 'Hero' },
  { file: 'problem_desk.jpg', label: 'The problem' },
  { file: 'lineup_desk.jpg', label: 'Product lineup' },
  { file: 'ritual_desk.jpg', label: 'Routine' },
  { file: 'quiz_desk.jpg', label: 'Skin quiz' },
];

const mobileScreens = [
  { file: 'hero_mob.jpg', label: 'Hero' },
  { file: 'lineup_mob.jpg', label: 'Lineup' },
  { file: 'ritual_mob.jpg', label: 'Routine' },
];

const Mochi = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kyo-page">
      <nav className="kyo-nav">
        <div className="nav-logo">
          <Link to="/">[ back ]</Link> MOCHI
        </div>
        <a 
          href="https://nntrwx.github.io/mochi/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="visit-link"
        >
          Live Site ↗
        </a>
      </nav>

      <section id="hero" className="kyo-hero">
        <p className="kyo-subtitle">— Case Study / 2026</p>
        <h1 className="kyo-title">Mochi</h1>
        <div className="kyo-meta">
          <div className="meta-item">
            <label>Role</label>
            <span>Frontend Developer / UI/UX Designer</span>
          </div>
          <div className="meta-item">
            <label>Tools</label>
            <span>Figma / React / Vite</span>
          </div>
          <div className="meta-item">
            <label>Type</label>
            <span>Personal Concept Project</span>
          </div>
          <div className="meta-item">
            <label>Year</label>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="overview" className="kyo-overview">
        <p className="kyo-subtitle">— Overview</p>
        <h2>A playful skincare brand with a routine-building quiz.</h2>
        <p>
          Design and frontend development of a landing page for Mochi, a concept youth skincare brand.
          The goal: make choosing a skincare routine feel less overwhelming — so instead of a long
          product catalogue, the page leads with a short quiz that builds a routine for you.
        </p>
        <p>
          After the first version, I ran a design and accessibility audit and reworked the colour
          system: soft warm pink and peach backgrounds with high-contrast charcoal text, bringing
          the palette to WCAG AA contrast.
        </p>
        <p>
          Key features:
          <br />
          • 4-step skin quiz that recommends products based on the user's skin concerns
          <br />
          • Full keyboard navigation with visible focus states on all inputs, buttons and custom radio controls
          <br />
          • Custom glassmorphism components built on a CSS-variables design system
          <br />
          • Responsive layout with swipeable product and routine carousels on mobile
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a 
            href="https://nntrwx.github.io/mochi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="glass-btn"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            view live project
          </a>
        </div>
      </section>

      <section id="screens" className="kyo-screens mochi-screens">
        <p className="kyo-subtitle">— Desktop</p>
        <div className="mochi-shots">
          {desktopScreens.map((shot) => (
            <figure key={shot.file} className="mochi-shot">
              <img src={`${import.meta.env.BASE_URL}images/mochi/${shot.file}`} alt={`Mochi — ${shot.label}`} loading="lazy" />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="kyo-subtitle">— Mobile</p>
        <div className="mochi-mobile">
          {mobileScreens.map((shot) => (
            <figure key={shot.file} className="mochi-shot">
              <img src={`${import.meta.env.BASE_URL}images/mochi/${shot.file}`} alt={`Mochi mobile — ${shot.label}`} loading="lazy" />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="kyo-footer">
        <span>Mochi — Case Study</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
};

export default Mochi;
