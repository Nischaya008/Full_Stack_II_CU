import React from 'react';
import Card from '../components/Card';

const Movies = () => {
  const myFavoriteMovies = [
    {
      id: 1,
      title: 'The Grand Budapest Hotel',
      description: 'Wes Anderson\'s masterpiece about a legendary concierge and his protégé. The visual symmetry and quirky characters make this my ultimate comfort movie. I must have watched it at least a dozen times!',
      imageUrl: 'https://via.placeholder.com/300x200?text=Grand+Budapest+Hotel',
      rating: '⭐ 5/5',
      year: '2014',
      genre: 'Comedy, Drama'
    },
    {
      id: 2,
      title: 'Parasite',
      description: 'This Oscar-winning film completely blew me away with its social commentary and brilliant storytelling. The way it shifts tones from dark comedy to thriller is masterful.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Parasite',
      rating: '⭐ 5/5',
      year: '2019',
      genre: 'Thriller, Drama'
    },
    {
      id: 3,
      title: 'Eternal Sunshine of the Spotless Mind',
      description: 'A beautiful exploration of love and memory. The non-linear storytelling and Jim Carrey\'s performance still give me chills. The soundtrack is also part of my regular playlist.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Eternal+Sunshine',
      rating: '⭐ 4.5/5',
      year: '2004',
      genre: 'Sci-fi, Romance'
    },
    {
      id: 4,
      title: 'Spirited Away',
      description: 'Studio Ghibli\'s magical world never fails to amaze me. The bathhouse setting and No-Face are some of the most creative concepts I\'ve seen in animation.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Spirited+Away',
      rating: '⭐ 5/5',
      year: '2001',
      genre: 'Animation, Fantasy'
    }
  ];

  return (
    <div className="page">
      <h1>My Favorite Films</h1>
      <p className="page-intro">
        I'm a huge film buff! Here are some movies that have left a lasting impression on me. 
        I love films with unique visual styles, thought-provoking stories, and memorable characters.
      </p>
      <div className="card-container">
        {myFavoriteMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Card
              title={`${movie.title} (${movie.year})`}
              description={
                <>
                  <p>{movie.description}</p>
                  <div className="movie-details">
                    <span className="movie-rating">{movie.rating}</span>
                    <span className="movie-genre">{movie.genre}</span>
                  </div>
                </>
              }
              imageUrl={movie.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
