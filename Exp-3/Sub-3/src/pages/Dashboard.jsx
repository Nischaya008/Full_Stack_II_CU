import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: '2023',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates using WebSockets.',
      technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
      year: '2023',
      link: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and experience.',
      technologies: ['React', 'React Router', 'CSS3'],
      year: '2024',
      link: '#'
    }
  ];

  const experience = [
    {
      id: 1,
      role: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2022 - Present',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to define, design, and ship new features',
        'Optimized application performance and improved user experience',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Creations',
      duration: '2020 - 2022',
      responsibilities: [
        'Built responsive user interfaces using React and Redux',
        'Worked closely with UI/UX designers to implement pixel-perfect designs',
        'Wrote unit tests and conducted code reviews',
        'Improved application loading time by 40%'
      ]
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>My Dashboard</h1>
        <Link to="/profile" className="btn btn-secondary">Back to Profile</Link>
      </div>

      <div className="dashboard-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title} <span className="year">{project.year}</span></h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Work Experience</h2>
        <div className="experience-timeline">
          {experience.map(exp => (
            <div key={exp.id} className="experience-item">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <div className="experience-meta">
                  <span className="company">{exp.company}</span>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              <ul className="responsibilities">
                {exp.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Technology in Computer Science</h3>
          <div className="education-meta">
            <span className="institution">Delhi Technological University</span>
            <span className="year">2016 - 2020</span>
          </div>
          <p>GPA: 8.5/10.0</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
