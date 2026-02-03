import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>Welcome to My Portfolio</h1>
        <p>Experiment: Navigation Using Link Component</p>
        <p>This demonstrates my implementation of smooth navigation in a Single Page Application using React Router's Link component.</p>
      </div>
      
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">About Me</h3>
            <p className="card-description">
              I'm a passionate developer who loves building modern web applications. This project showcases my skills in React and navigation implementation.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Me</Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">My Skills</h3>
            <p className="card-description">
              In this project, I've implemented:
            </p>
            <ul>
              <li>React Router Link component for navigation</li>
              <li>Smooth transitions and hover effects</li>
              <li>Responsive design principles</li>
              <li>Custom color palette application</li>
            </ul>
            <Link to="/services" className="btn btn-primary">View My Services</Link>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Get In Touch</h3>
            <p className="card-description">
              Explore my work and see how I've implemented this navigation system. Each page demonstrates different aspects of my development skills.
            </p>
            <Link to="/about" className="btn btn-primary">Contact Information</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
