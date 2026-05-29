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
            I'm an 19-year-old ukrainian Software Engineering student at National Technical University "Kharkiv Polytechnic Institute", currently based in Kuopio,Finland. 
            My focus is on bringing ideas to life through clean, scalable front-end architecture and 
            pixel-perfect UI/UX design. I believe digital products should feel premium, intuitive, 
            and effortlessly aesthetic.
          </p>

          <div className="about-facts">
            <span className="tech-tag">[ off-screen ]</span>
            <ul className="facts-list">
              <li>✦ left-handed creative</li>
              <li>✦ failed musician (still play the piano though)</li>
              <li>✦ virtual architect (i build luxury mansions in the sims 4 xD)</li>
              <li>✦ powered by kombucha & cute cats videos</li>
            </ul>
          </div>
        </div>

        <div className="about-visual">
          <img 
            src="https://i.pinimg.com/736x/b5/cd/9b/b5cd9b427043f00fd2e85018c78b28ea.jpg" 
            alt="aesthetic vibe" 
            className="about-image" 
          />
          <div className="image-decoration"></div>
        </div>

      </div>
    </section>
  );
}