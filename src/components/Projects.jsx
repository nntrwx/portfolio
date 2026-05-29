import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'KIRI',
    category: 'web card game',
    stack: ['Vanilla JS', 'Node.js', 'MySQL'],
    repoUrl: 'https://github.com/Dornsen/Kiri'
  },
  {
    id: 2,
    title: 'NODO',
    category: 'desktop messenger',
    stack: ['C#', 'WPF', 'PostgreSQL'],
    repoUrl: 'https://github.com/nntrwx/nodo'
  },
  {
    id: 3,
    title: 'OUTFIT PLATFORM',
    category: 'digital wardrobe (wip)',
    stack: ['React', 'UI/UX', 'Figma'],
    repoUrl: 'https://github.com/nntrwx/fit-check-ai'
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">
        index <span className="editorial-italic">/</span> github repos
      </h2>
      
      <div className="project-list">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project-row"
          >
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
          </a>
        ))}
      </div>
    </section>
  );
}
