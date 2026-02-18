import { useGameMusic } from '../contexts/GameMusicContext';

const Favorites = () => {
  const { favorites, toggleFavorite } = useGameMusic();

  const gameFavorites = favorites.filter(fav => fav.type === 'game');
  const musicFavorites = favorites.filter(fav => fav.type === 'music');

  return (
    <div style={{ backgroundColor: '#3A2525', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '15px' }}>My Favorites ❤️</h2>
      
      {favorites.length === 0 ? (
        <p style={{ color: '#ffffff', textAlign: 'center', padding: '20px' }}>
          No favorites yet! Start adding some games and music to your collection.
        </p>
      ) : (
        <div>
          {gameFavorites.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ color: '#9E2A3A', marginBottom: '10px' }}>Favorite Games</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '10px' }}>
                {gameFavorites.map(game => (
                  <div 
                    key={`${game.id}-game`} 
                    style={{ 
                      backgroundColor: '#000080', 
                      padding: '12px', 
                      borderRadius: '6px',
                      border: '2px solid #FF0000'
                    }}
                  >
                    <h4 style={{ color: '#ffffff', margin: '0 0 8px 0' }}>{game.name}</h4>
                    <p style={{ color: '#ffffff', margin: '3px 0', fontSize: '14px' }}>
                      {game.category} ⭐ {game.rating}
                    </p>
                    <button
                      onClick={() => toggleFavorite(game, 'game')}
                      style={{
                        backgroundColor: '#FF0000',
                        color: '#ffffff',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginTop: '5px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {musicFavorites.length > 0 && (
            <div>
              <h3 style={{ color: '#9E2A3A', marginBottom: '10px' }}>Favorite Music</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                {musicFavorites.map(song => (
                  <div 
                    key={`${song.id}-music`} 
                    style={{ 
                      backgroundColor: '#000080', 
                      padding: '12px', 
                      borderRadius: '6px',
                      border: '2px solid #FF0000'
                    }}
                  >
                    <h4 style={{ color: '#ffffff', margin: '0 0 8px 0' }}>{song.title}</h4>
                    <p style={{ color: '#ffffff', margin: '3px 0', fontSize: '14px' }}>
                      {song.artist} • {song.genre}
                    </p>
                    <p style={{ color: '#ffffff', margin: '3px 0', fontSize: '14px' }}>
                      Duration: {song.duration}
                    </p>
                    <button
                      onClick={() => toggleFavorite(song, 'music')}
                      style={{
                        backgroundColor: '#FF0000',
                        color: '#ffffff',
                        border: 'none',
                        padding: '4px 8px',
                        borderRadius: '3px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginTop: '5px'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
