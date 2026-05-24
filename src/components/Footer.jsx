import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        
        <div className="footer-left">
          <h2 className="footer-cta">let's talk ↗</h2>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/nikol-nakonechna-a72499348/" target="_blank" rel="noopener noreferrer" className="tech-tag">linkedin</a>
            <a href="https://github.com/nntrwx" target="_blank" rel="noopener noreferrer" className="tech-tag">github</a>
            <a href="mailto:nikolnakonechnaya@gmail.com" className="tech-tag">email</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="meta-info">
            <span>built with react + vite</span>
            <span>deployed on github pages</span>
            <a href="https://github.com/nntrwx/portfolio" target="_blank" rel="noopener noreferrer" className="repo-link">
              [ source code ]
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span className="copyright">© {new Date().getFullYear()} nikol. open source.</span>
      </div>
    </footer>
  );
}