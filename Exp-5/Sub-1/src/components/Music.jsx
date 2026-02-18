import React from 'react'

const Music = () => {
  const albums = [
    { title: "Dark Side of the Moon", artist: "Pink Floyd", year: 1973, genre: "Progressive Rock" },
    { title: "Thriller", artist: "Michael Jackson", year: 1982, genre: "Pop" },
    { title: "The Chronic", artist: "Dr. Dre", year: 1992, genre: "Hip Hop" },
    { title: "OK Computer", artist: "Radiohead", year: 1997, genre: "Alternative Rock" },
    { title: "To Pimp a Butterfly", artist: "Kendrick Lamar", year: 2015, genre: "Hip Hop" }
  ]

  return (
    <div className="content-container">
      <h1>My Musical Journey</h1>
      <p>Music is the soundtrack to my life. I've spent countless hours discovering and curating albums that speak to different moods, moments, and memories. This is my personal collection of timeless masterpieces.</p>
      
      <div className="grid-container">
        {albums.map((album, index) => (
          <div key={index} className="card">
            <h3>{album.title}</h3>
            <p><strong>Artist:</strong> {album.artist}</p>
            <p><strong>Year:</strong> {album.year}</p>
            <p><strong>Genre:</strong> {album.genre}</p>
          </div>
        ))}
      </div>
      
      <div className="info-section">
        <h2>My Musical Philosophy</h2>
        <p>I believe music is the universal language that connects us all. From the complex arrangements of progressive rock to the raw energy of hip hop, I find beauty in every genre. Music helps me focus, relax, and express emotions that words alone cannot capture.</p>
      </div>
    </div>
  )
}

export default Music
