import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'A brief description of project 1 and the technologies used.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'A brief description of project 2 and the technologies used.',
    tags: ['Next.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'A brief description of project 3 and the technologies used.',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
