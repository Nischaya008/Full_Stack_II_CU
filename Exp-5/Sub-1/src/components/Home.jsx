import React from 'react'

const Home = () => {
  return (
    <div className="content-container">
      <h1>Welcome to My Digital Space</h1>
      <p>Hi! I'm a passionate developer who loves creating amazing digital experiences. This is my personal corner of the internet where I showcase my interests in gaming and music.</p>
      
      <div className="hero-section">
        <h2>What You'll Find Here</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎮 Gaming Collection</h3>
            <p>Explore my curated list of favorite games, from epic RPGs to mind-bending puzzles. Each game represents hours of adventure and discovery.</p>
          </div>
          <div className="feature-card">
            <h3>🎵 Musical Journey</h3>
            <p>Dive into my personal music collection featuring timeless albums across various genres. Music that has shaped my taste and inspired my creativity.</p>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h2>About Me</h2>
        <p>As a solo developer, I build projects that combine my technical skills with my passions. I believe in creating clean, efficient code that delivers exceptional user experiences. When I'm not coding, you'll find me exploring virtual worlds or discovering new music.</p>
        <p>This website demonstrates modern React techniques including lazy loading and routing, creating a smooth and performant user experience.</p>
      </div>
    </div>
  )
}

export default Home
