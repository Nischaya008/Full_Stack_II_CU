import React from 'react'

const Games = () => {
  const games = [
    { name: "The Legend of Zelda", genre: "Adventure", rating: 9.5 },
    { name: "Elden Ring", genre: "RPG", rating: 9.3 },
    { name: "God of War", genre: "Action", rating: 9.2 },
    { name: "Minecraft", genre: "Sandbox", rating: 9.0 },
    { name: "Cyberpunk 2077", genre: "RPG", rating: 8.8 }
  ]

  return (
    <div className="content-container">
      <h1>My Gaming World</h1>
      <p>Welcome to my personal gaming collection! As a passionate gamer, I've curated some of my favorite titles that showcase the best of interactive entertainment.</p>
      
      <div className="grid-container">
        {games.map((game, index) => (
          <div key={index} className="card">
            <h3>{game.name}</h3>
            <p><strong>Genre:</strong> {game.genre}</p>
            <p><strong>Rating:</strong> ⭐ {game.rating}/10</p>
          </div>
        ))}
      </div>
      
      <div className="info-section">
        <h2>Why I Love Gaming</h2>
        <p>Gaming isn't just a hobby for me—it's a way to explore new worlds, solve complex puzzles, and experience stories that rival the best books and movies. From the vast open worlds of RPGs to the competitive thrill of multiplayer matches, I find joy in every genre.</p>
      </div>
    </div>
  )
}

export default Games
