import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>About Me</h1>
        <p>Learn about my journey and technical skills</p>
      </div>
      
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">My Experiment</h3>
            <p className="card-description">
              This project represents my implementation of navigation links in a Single Page Application (SPA) using React Router's Link component. I followed a systematic approach to achieve this.
            </p>
            <h2>My Development Process</h2>
            <ol>
              <li>I imported Link from react-router-dom</li>
              <li>I created navigation links in my navbar</li>
              <li>I enabled smooth navigation between pages</li>
              <li>I applied custom styling with the specified color palette</li>
            </ol>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">My Technical Skills</h3>
            <p className="card-description">
              I've worked with the following technologies and concepts:
            </p>
            <div className="skills">
              <div className="skill-category">
                <h4>Frontend Technologies</h4>
                <ul>
                  <li>React.js</li>
                  <li>React Router DOM</li>
                  <li>Modern CSS with custom properties</li>
                  <li>Responsive Design Principles</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Navigation Features</h4>
                <ul>
                  <li>Declarative routing</li>
                  <li>Client-side navigation</li>
                  <li>Active link states</li>
                  <li>Smooth transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">My Design Choices</h3>
            <p className="card-description">
              I chose this color palette for my implementation:
            </p>
            <div className="color-palette">
              <div className="color-item" style={{backgroundColor: '#6CA651'}}>
                <span>#6CA651</span>
              </div>
              <div className="color-item" style={{backgroundColor: '#BBCB2E'}}>
                <span>#BBCB2E</span>
              </div>
              <div className="color-item" style={{backgroundColor: '#839705'}}>
                <span>#839705</span>
              </div>
              <div className="color-item" style={{backgroundColor: '#6B7445'}}>
                <span>#6B7445</span>
              </div>
            </div>
            <Link to="/services" className="btn btn-primary">View My Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
