import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GamePulse.css';
import './Mochi.css';

const REPO_URL = 'https://github.com/nntrwx/dollique';

const desktopScreens = [
  { file: 'feed_desk.jpg', label: 'Feed' },
  { file: 'register_desk.jpg', label: 'Sign up: make a doll first' },
  { file: 'post_desk.jpg', label: 'Post & comments' },
  { file: 'profile_desk.jpg', label: 'Profile' },
  { file: 'editor_desk.jpg', label: 'New post' },
  { file: 'notifications_desk.jpg', label: 'Notifications' },
  { file: 'admin_posts_desk.jpg', label: 'Admin panel: posts' },
  { file: 'admin_doll_parts_desk.jpg', label: 'Admin panel: doll parts' },
];

const mobileScreens = [
  { file: 'feed_mob.jpg', label: 'Feed' },
  { file: 'post_mob.jpg', label: 'Post' },
  { file: 'profile_mob.jpg', label: 'Profile' },
];

const Dollique = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="kyo-page">
      <nav className="kyo-nav">
        <div className="nav-logo">
          <Link to="/">[ back ]</Link> DOLLIQUE
        </div>
        <a
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          GitHub ↗
        </a>
      </nav>

      <section id="hero" className="kyo-hero">
        <p className="kyo-subtitle">— Case Study / 2026</p>
        <h1 className="kyo-title">Dollique</h1>
        <div className="kyo-meta">
          <div className="meta-item">
            <label>Role</label>
            <span>UI/UX Designer / Full-Stack Developer</span>
          </div>
          <div className="meta-item">
            <label>Tools</label>
            <span>Figma / React / Redux Toolkit / Node.js / MySQL</span>
          </div>
          <div className="meta-item">
            <label>Type</label>
            <span>Solo Study Project</span>
          </div>
          <div className="meta-item">
            <label>Year</label>
            <span>2026</span>
          </div>
        </div>
      </section>

      <section id="overview" className="kyo-overview">
        <p className="kyo-subtitle">— Overview</p>
        <h2>A Q&amp;A community for doll customizers, with a pixel doll you dress up yourself.</h2>
        <p>
          Dollique is a place for OOAK artists and figure collectors to ask about repaints, reroots,
          sealants and joint repairs, share restoration guides and vote for the most useful answers.
          I built it alone for the USOF Challenge at Innovation Campus (NTU "KhPI"): first a REST API
          on Node.js, Express and MySQL, then a React single-page app on top of it.
        </p>
        <p>
          The design is fully my own, from the Figma moodboard to the last pixel icon, with no UI
          libraries: paper texture, frosted glass cards, pink lace, dotted pixel drawings and
          hand-drawn buttons. The design was singled out for praise at the project defense.
        </p>
        <p>
          Key features:
          <br />
          • Dress-up pixel doll built from layers (body, hair, outfit, shoes, accessories) that can replace the profile photo
          <br />
          • Feed with sorting, filters by category, date and status, search and a "for you" feed
          <br />
          • Live updates in every open tab in under a second, plus notifications
          <br />
          • Moderation with appeals, strikes and auto-ban, and a glass-style admin panel
          <br />
          • Email confirmation, password reset, JWT auth; responsive down to 360 px
          <br />
          • Lighthouse desktop: performance 98, accessibility 96
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
            style={{ display: 'inline-block', textDecoration: 'none' }}
          >
            view on github
          </a>
        </div>
      </section>

      <section id="screens" className="kyo-screens mochi-screens">
        <p className="kyo-subtitle">— Desktop</p>
        <div className="mochi-shots">
          {desktopScreens.map((shot) => (
            <figure key={shot.file} className="mochi-shot">
              <img src={`${import.meta.env.BASE_URL}images/dollique/${shot.file}`} alt={`Dollique — ${shot.label}`} loading="lazy" />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>

        <p className="kyo-subtitle">— Mobile</p>
        <div className="mochi-mobile">
          {mobileScreens.map((shot) => (
            <figure key={shot.file} className="mochi-shot">
              <img src={`${import.meta.env.BASE_URL}images/dollique/${shot.file}`} alt={`Dollique mobile — ${shot.label}`} loading="lazy" />
              <figcaption>{shot.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <footer className="kyo-footer">
        <span>Dollique — Case Study</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
};

export default Dollique;
