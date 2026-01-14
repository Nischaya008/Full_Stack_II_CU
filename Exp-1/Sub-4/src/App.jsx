import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    address: ''
  })
  const [submissions, setSubmissions] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Load submissions from localStorage on component mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem('formSubmissions')
    if (savedSubmissions) {
      setSubmissions(JSON.parse(savedSubmissions))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newSubmission = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toISOString()
    }
    
    const updatedSubmissions = [...submissions, newSubmission]
    setSubmissions(updatedSubmissions)
    localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions))
    
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      gender: '',
      dob: '',
      address: ''
    })
    
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="app">
      <div className="form-container">
        <h1>Registration Form</h1>
        
        {isSubmitted && (
          <div className="success-message">
            Form submitted successfully!
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="John Doe"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+1234567890"
                pattern="[0-9]{10,15}"
                title="Please enter a valid phone number (10-15 digits)"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="gender">Gender *</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="dob">Date of Birth *</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter your full address"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
            <button 
              type="button" 
              className="btn btn-reset"
              onClick={() => setFormData({
                fullName: '',
                email: '',
                phone: '',
                gender: '',
                dob: '',
                address: ''
              })}
            >
              Reset
            </button>
          </div>
        </form>
        
        {submissions.length > 0 && (
          <div className="submissions">
            <h2>Previous Submissions ({submissions.length})</h2>
            <div className="submissions-list">
              {submissions.slice().reverse().map((submission) => (
                <div key={submission.id} className="submission-card">
                  <h3>{submission.fullName}</h3>
                  <p><strong>Email:</strong> {submission.email}</p>
                  <p><strong>Phone:</strong> {submission.phone}</p>
                  <p><strong>Gender:</strong> {submission.gender}</p>
                  <p><strong>DOB:</strong> {new Date(submission.dob).toLocaleDateString()}</p>
                  <p><strong>Address:</strong> {submission.address}</p>
                  <p className="submission-date">
                    Submitted on: {new Date(submission.submittedAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
