import React from 'react'

const About = () => {
  return (
    <div className="page-container">
      <h1>About Page</h1>
      <p>This is the About component, loaded lazily when you navigate to /about</p>
      <div className="demo-info">
        <h2>Lazy Loading in Action</h2>
        <p>Notice how this content appears with a slight delay when you first navigate to this page. That's lazy loading in action!</p>
        
        <h3>Technical Details:</h3>
        <ul>
          <li>Uses React.lazy() for dynamic imports</li>
          <li>Wrapped in Suspense for loading states</li>
          <li>Components are split into separate chunks</li>
          <li>Network requests happen only when needed</li>
        </ul>
        
        <div className="code-example">
          <h4>Example Code:</h4>
          <pre>
{`const About = lazy(() => import('./components/About'))`}
          </pre>
        </div>
      </div>
    </div>
  )
}

export default About
