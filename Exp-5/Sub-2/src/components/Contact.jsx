import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (This is just a demo)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page-container">
      <h1>Contact Page</h1>
      <p>This Contact component is loaded on-demand when navigating to /contact</p>
      
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
      
      <div className="lazy-loading-info">
        <h3>Lazy Loading Demo</h3>
        <p>This entire component, including the form logic, is only loaded when you navigate to this route.</p>
      </div>
    </div>
  )
}

export default Contact
