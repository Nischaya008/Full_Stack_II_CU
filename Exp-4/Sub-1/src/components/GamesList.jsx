import { useGameMusic } from '../contexts/GameMusicContext';

const GamesList = () => {
  const { games, toggleFavorite, favorites } = useGameMusic();

  const isFavorite = (gameId) => {
    return favorites.some(fav => fav.id === gameId && fav.type === 'game');
  };

  return (
    <div style={{ backgroundColor: '#3A2525', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '15px' }}>My Games Collection</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {games.map(game => (
          <div 
            key={game.id} 
            style={{ 
              backgroundColor: '#000080', 
              padding: '15px', 
              borderRadius: '6px',
              border: `2px solid ${isFavorite(game.id) ? '#FF0000' : '#9E2A3A'}`
            }}
          >
            <h3 style={{ color: '#ffffff', margin: '0 0 10px 0' }}>{game.name}</h3>
            <p style={{ color: '#ffffff', margin: '5px 0' }}>
              <strong>Category:</strong> {game.category}
            </p>
            <p style={{ color: '#ffffff', margin: '5px 0' }}>
              <strong>Rating:</strong> ⭐ {game.rating}
            </p>
            <button
              onClick={() => toggleFavorite(game, 'game')}
              style={{
                backgroundColor: isFavorite(game.id) ? '#FF0000' : '#9E2A3A',
                color: '#ffffff',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              {isFavorite(game.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
