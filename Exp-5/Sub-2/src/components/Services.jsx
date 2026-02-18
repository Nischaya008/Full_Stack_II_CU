import React from 'react'

const Services = () => {
  const services = [
    { name: 'Web Development', description: 'Building modern web applications' },
    { name: 'Mobile Apps', description: 'Creating responsive mobile experiences' },
    { name: 'UI/UX Design', description: 'Designing beautiful user interfaces' },
    { name: 'Performance Optimization', description: 'Making applications faster' }
  ]

  return (
    <div className="page-container">
      <h1>Services Page</h1>
      <p>This Services component demonstrates lazy loading with dynamic content.</p>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="performance-note">
        <h2>Performance Benefits</h2>
        <p>This component is only loaded when you visit /services, saving bandwidth and improving initial load time.</p>
      </div>
    </div>
  )
}

export default Services
