import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'GamePulse',
    category: 'saas landing page & dashboard',
    stack: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'GSAP'],
    repoUrl: '/gamepulse',
    isInternal: true
  },
  {
    id: 2,
    title: 'KYO',
    category: 'fashion brand landing page · ui/ux design',
    stack: ['Figma'],
    repoUrl: '/kyo',
    isInternal: true
  },
  {
    id: 3,
    title: 'Mochi',
    category: 'skincare landing page & quiz',
    stack: ['Figma', 'React', 'Vite', 'CSS Variables'],
    repoUrl: '/mochi',
    isInternal: true
  }
];

const otherProjects = [
  {
    id: 4,
    title: 'KIRI',
    category: 'multiplayer web card game · team of 3, project lead, ui/ux & front-end',
    stack: ['Vanilla JS', 'Node.js', 'MySQL'],
    repoUrl: 'https://github.com/Dornsen/Kiri'
  },
  {
    id: 5,
    title: 'NODO',
    category: 'desktop messenger',
    stack: ['C#', 'WPF', 'PostgreSQL'],
    repoUrl: 'https://github.com/nntrwx/nodo'
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">
        selected <span className="editorial-italic">work</span>
      </h2>
      
      <div className="project-list">
        {projects.map((project) => {
          const content = (
            <>
              <div className="project-main-info">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">[{project.category}]</span>
              </div>
              
              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-link-icon">
                ↗
              </div>
            </>
          );

          return project.isInternal ? (
            <Link 
              key={project.id} 
              to={project.repoUrl} 
              className="project-row"
            >
              {content}
            </Link>
          ) : (
            <a 
              key={project.id} 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-row"
            >
              {content}
            </a>
          );
        })}
      </div>

      <div className="other-projects">
        <span className="tech-tag">[ currently building ]</span>
        <ul className="other-list">
          <li>
            <a href="https://github.com/nntrwx/dollique" target="_blank" rel="noopener noreferrer" className="other-row">
              <span className="other-title">DOLLIQUE</span>
              <span className="other-meta">
                q&a community for doll customizers, with a pixel doll avatar builder · full-stack study project · React / Redux / Express / MySQL
              </span>
              <span className="other-status">in progress</span>
              <span className="other-arrow">↗</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="other-projects">
        <span className="tech-tag">[ other projects ]</span>
        <ul className="other-list">
          {otherProjects.map((project) => (
            <li key={project.id}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="other-row">
                <span className="other-title">{project.title}</span>
                <span className="other-meta">{project.category} · {project.stack.join(' / ')}</span>
                <span className="other-arrow">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
