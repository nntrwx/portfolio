import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './KYO.css';

const KYO = () => {
  const [view, setView] = useState('mobile');
  const [mobileCurrent, setMobileCurrent] = useState(0);
  const [desktopCurrent, setDesktopCurrent] = useState(0);

  const mobileTotal = 6;
  const desktopTotal = 5;

  const nextSlide = useCallback(() => {
    if (view === 'mobile') {
      setMobileCurrent(prev => (prev + 1) % mobileTotal);
    } else {
      setDesktopCurrent(prev => (prev + 1) % desktopTotal);
    }
  }, [view]);

  const prevSlide = useCallback(() => {
    if (view === 'mobile') {
      setMobileCurrent(prev => (prev - 1 + mobileTotal) % mobileTotal);
    } else {
      setDesktopCurrent(prev => (prev - 1 + desktopTotal) % desktopTotal);
    }
  }, [view]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="kyo-page">
      <nav className="kyo-nav">
        <div className="nav-logo">
          <Link to="/">[ back ]</Link> KYO
        </div>
      </nav>

      <section id="hero" className="kyo-hero">
        <p className="kyo-subtitle">— Case Study / 2026</p>
        <h1 className="kyo-title">KYO</h1>
        <div className="kyo-meta">
          <div className="meta-item"><label>Role</label><span>UI/UX Design / Frontend Dev</span></div>
          <div className="meta-item"><label>Tools</label><span>Figma / Next.js / Tailwind</span></div>
          <div className="meta-item"><label>Type</label><span>Personal Concept Project</span></div>
          <div className="meta-item"><label>Year</label><span>2026</span></div>
        </div>
      </section>

      <section id="overview" className="kyo-overview">
        <p className="kyo-subtitle">— Overview</p>
        <h2>A fashion brand built on silence.</h2>
        <p>Design a landing page for a youth fashion brand rooted in Japanese cyber-minimalism — from information architecture and copywriting to final mobile and desktop UI.</p>
        <p>Built Mobile First. Every section was designed from scratch — structure, tone of voice, typographic system, and visual language developed as a unified whole.</p>
        <p>6 sections. 2 breakpoints. One system.</p>
      </section>

      <section id="screens" className="kyo-screens">
        <div className="screens-header">
          <p className="kyo-subtitle">— Final Screens</p>
          <div className="view-toggles">
            <button 
              className={view === 'mobile' ? 'active' : ''} 
              onClick={() => setView('mobile')}
            >
              Mobile
            </button>
            <button 
              className={view === 'desktop' ? 'active' : ''} 
              onClick={() => setView('desktop')}
            >
              Desktop
            </button>
          </div>
        </div>

        {/* MOBILE PANEL */}
        <div id="panel-mobile" style={{ display: view === 'mobile' ? 'block' : 'none' }}>
          <div className="track" id="mob-track">
            <div className="slide" style={{ display: mobileCurrent === 0 ? 'block' : 'none' }}>
              <p>Hero</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/hero_mobile.png`} alt="Hero Mobile" />
            </div>
            <div className="slide" style={{ display: mobileCurrent === 1 ? 'block' : 'none' }}>
              <p>Identity Statement</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/identity_mob.png`} alt="Identity Statement Mobile" />
            </div>
            <div className="slide" style={{ display: mobileCurrent === 2 ? 'block' : 'none' }}>
              <p>Catalogue</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/catalogue_mob.png`} alt="Catalogue Mobile" />
            </div>
            <div className="slide" style={{ display: mobileCurrent === 3 ? 'block' : 'none' }}>
              <p>Lookbook</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/editorial_mob.png`} alt="Lookbook Mobile" />
            </div>
            <div className="slide" style={{ display: mobileCurrent === 4 ? 'block' : 'none' }}>
              <p>Drop Capture</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/drop_mob.png`} alt="Drop Capture Mobile" />
            </div>
            <div className="slide" style={{ display: mobileCurrent === 5 ? 'block' : 'none' }}>
              <p>Footer</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/footer_mob.png`} alt="Footer Mobile" />
            </div>
          </div>

          <div className="slider-controls">
            <button className="nav-btn" onClick={() => prevSlide()}>←</button>
            <div className="dots">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <button 
                  key={i} 
                  className={mobileCurrent === i ? 'active' : ''} 
                  onClick={() => setMobileCurrent(i)}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
            <button className="nav-btn" onClick={() => nextSlide()}>→</button>
          </div>
        </div>

        <div id="panel-desktop" style={{ display: view === 'desktop' ? 'block' : 'none' }}>
          <div className="track" id="desk-track">
            <div className="slide" style={{ display: desktopCurrent === 0 ? 'block' : 'none' }}>
              <p>Hero</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/hero_desk.png`} alt="Hero Desktop" />
            </div>
            <div className="slide" style={{ display: desktopCurrent === 1 ? 'block' : 'none' }}>
              <p>Identity Statement</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/identity_desk.png`} alt="Identity Statement Desktop" />
            </div>
            <div className="slide" style={{ display: desktopCurrent === 2 ? 'block' : 'none' }}>
              <p>Catalogue</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/catalogue_desk.png`} alt="Catalogue Desktop" />
            </div>
            <div className="slide" style={{ display: desktopCurrent === 3 ? 'block' : 'none' }}>
              <p>Lookbook</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/lookbook_desk.png`} alt="Lookbook Desktop" />
            </div>
            <div className="slide" style={{ display: desktopCurrent === 4 ? 'block' : 'none' }}>
              <p>Drop Capture + Footer</p>
              <img src={`${import.meta.env.BASE_URL}images/kyo/drop_desk.png`} alt="Drop Capture Desktop" />
            </div>
          </div>

          <div className="slider-controls">
            <button className="nav-btn" onClick={() => prevSlide()}>←</button>
            <div className="dots">
              {[0, 1, 2, 3, 4].map(i => (
                <button 
                  key={i} 
                  className={desktopCurrent === i ? 'active' : ''} 
                  onClick={() => setDesktopCurrent(i)}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
            <button className="nav-btn" onClick={() => nextSlide()}>→</button>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section id="closing" className="kyo-closing">
        <p>Clothing without a narrative. <em>Forms that exist beyond seasons.</em></p>
        <p className="closing-meta">KYO / SS26 — Concept Fashion Brand</p>
      </section>

      <footer className="kyo-footer">
        <span>KYO — Case Study</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
};

export default KYO;