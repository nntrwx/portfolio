import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GamePulse.css'; // We can reuse the same layout styles as GamePulse since they share the kyo-page style classes

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
            <span>React / Vite / CSS Variables</span>
          </div>
          <div className="meta-item">
            <label>Type</label>
            <span>E-commerce Landing Page</span>
          </div>
          <div className="meta-item">
            <label>Year</label>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="overview" className="kyo-overview">
        <p className="kyo-subtitle">— Overview</p>
        <h2>Mochi — Vibrant Pop Skincare Landing Page & Quiz.</h2>
        <p>
          Refinement and frontend development of a high-conversion landing page for the youth skincare brand **mochi**. Built in a Vibrant Pop Youth style with interactive elements, custom glassmorphism components, and a step-by-step skincare routine constructor.
        </p>
        <p>
          Conducted a comprehensive design and accessibility audit, refactoring the color system to soft warm pastel pink (`#F4BAC5`) and peach (`#F7D2C4`) with high-contrast charcoal text (`#1C1A1A`), bringing the site to WCAG AA accessibility compliance.
        </p>
        <p>
          Key features:
          <br />
          • Interactive 4-step skincare quiz that analyzes skin profile concerns and dynamically recommends products with active promotional discount codes.
          <br />
          • Full keyboard tab navigation compliance with `:focus-visible` states across all inputs, buttons, and custom radio selections.
          <br />
          • Custom custom scrollbar thumb utilizing semi-transparent charcoal opacities, aligning with Aesop and Tamburins editorial aesthetics.
          <br />
          • Fully responsive layouts featuring mobile horizontal swipe mechanics for product grids and routines.
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

      <section id="concept" className="kyo-screens">
        <p className="kyo-subtitle">— Interface Concept </p>
        <div className="track">
          <div className="slide" style={{ display: 'block' }}>
            <p> ₊ ˚ ⌗</p>
            <img src={`${import.meta.env.BASE_URL}images/mochi_concept.png`} 
              alt="Mochi Skincare Interface Concept" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
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
