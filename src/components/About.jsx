import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        
        <div className="about-text">
          <h2 className="section-title">
            behind <span className="editorial-italic">the code</span>
          </h2>
          
          <p className="about-description">
            I'm Nikol Nakonechna — a Ukrainian UI/UX designer and frontend developer,
            studying Software Engineering at NTU "Kharkiv Polytechnic Institute".
          </p>

          <p className="about-description">
            I work on both sides of the handoff: I design interfaces in Figma and build them
            in React and Next.js. Before focusing on frontend, I interned as a Trainee Backend
            Engineer at Distributed Lab (Go, TypeScript, Docker), so I understand how a product
            works beyond its UI.
          </p>

          <div className="about-facts">
            <span className="tech-tag">[ off-screen ]</span>
            <ul className="facts-list">
              <li>✦ left-handed creative</li>
              <li>✦ plays the piano</li>
              <li>✦ virtual architect (builds luxury mansions in the sims 4)</li>
              <li>✦ powered by kombucha & cute cat videos</li>
            </ul>
          </div>
        </div>

        <div className="about-visual">
          <img 
            src={`${import.meta.env.BASE_URL}images/nikol.jpg`}
            alt="Nikol Nakonechna"
            className="about-image" 
          />
          <div className="image-decoration"></div>
        </div>

      </div>
    </section>
  );
}