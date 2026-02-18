import React from 'react'

const Home = () => {
  return (
    <div className="page-container">
      <h1>Home Page</h1>
      <p>Welcome to the Route-Based Lazy Loading Demo!</p>
      <p>This component is loaded on-demand when you navigate to the home route.</p>
      <div className="demo-info">
        <h2>What is Route-Based Lazy Loading?</h2>
        <p>Route-based lazy loading is a performance optimization technique where components are loaded only when the user navigates to that specific route. This reduces the initial bundle size and speeds up application startup.</p>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Faster initial page load</li>
          <li>Reduced bundle size</li>
          <li>Better user experience</li>
          <li>Improved performance metrics</li>
        </ul>
      </div>
    </div>
  )
}

export default Home
