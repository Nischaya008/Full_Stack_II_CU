import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Nischaya Garg</h1>
        <p className="title">Full Stack Developer</p>
        <div className="contact-info">
          <p>📧 nischayagarg@gmail.com</p>
          <p>📱 +91 98101 23456</p>
          <p>📍 New Delhi, India</p>
        </div>
      </div>
      
      <div className="profile-section">
        <h2>About Me</h2>
        <p>
          Passionate Full Stack Developer with expertise in building responsive and scalable web applications.
          Strong problem-solving skills and a keen eye for clean, efficient code. Always eager to learn
          new technologies and methodologies to enhance my development skills.
        </p>
      </div>

      <div className="profile-section">
        <h2>Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>Redux</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Jest & Mocha</li>
              <li>Agile/Scrum</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        <Link to="/dashboard" className="btn btn-primary">View My Dashboard</Link>
      </div>
    </div>
  );
};

export default Profile;
