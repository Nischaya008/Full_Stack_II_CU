import React from 'react';

const Services = () => {
  return (
    <div className="page">
      <div className="page-intro">
        <h1>My Services</h1>
        <p>Here are the web development services I offer</p>
      </div>
      
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Frontend Development</h3>
            <p className="card-description">
              I create responsive, modern, and user-friendly interfaces using the latest technologies
              and best practices in web development.
            </p>
            <div className="features">
              <ul>
                <li>React.js Applications</li>
                <li>Responsive Design</li>
                <li>UI/UX Implementation</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Backend Development</h3>
            <p className="card-description">
              I build robust and scalable server-side applications with secure APIs and
              efficient database management.
            </p>
            <div className="features">
              <ul>
                <li>Node.js & Express</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
                <li>Authentication Systems</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <h3 className="card-title">Full Stack Solutions</h3>
            <p className="card-description">
              I offer end-to-end development services from concept to deployment, ensuring seamless
              integration between frontend and backend systems.
            </p>
            <div className="features">
              <ul>
                <li>MERN Stack Development</li>
                <li>Cloud Deployment</li>
                <li>API Integration</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
