import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // Check for saved theme preference or use system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) return savedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Apply theme class to document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="app">
      <div className="theme-container">
        <h1>Theme Toggle</h1>
        
        <div className="theme-toggle" onClick={toggleTheme}>
          <div className={`toggle-track ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="toggle-thumb">
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </div>
          <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
        
        <div className="content">
          <p className="instruction">
            Click the toggle switch to switch between light and dark mode.
            Your preference will be saved for your next visit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
