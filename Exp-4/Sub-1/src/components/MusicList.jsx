import { useGameMusic } from '../contexts/GameMusicContext';

const MusicList = () => {
  const { music, toggleFavorite, favorites } = useGameMusic();

  const isFavorite = (musicId) => {
    return favorites.some(fav => fav.id === musicId && fav.type === 'music');
  };

  return (
    <div style={{ backgroundColor: '#3A2525', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '15px' }}>My Music Playlist</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
        {music.map(song => (
          <div 
            key={song.id} 
            style={{ 
              backgroundColor: '#000080', 
              padding: '15px', 
              borderRadius: '6px',
              border: `2px solid ${isFavorite(song.id) ? '#FF0000' : '#9E2A3A'}`
            }}
          >
            <h3 style={{ color: '#ffffff', margin: '0 0 10px 0' }}>{song.title}</h3>
            <p style={{ color: '#ffffff', margin: '5px 0' }}>
              <strong>Artist:</strong> {song.artist}
            </p>
            <p style={{ color: '#ffffff', margin: '5px 0' }}>
              <strong>Genre:</strong> {song.genre}
            </p>
            <p style={{ color: '#ffffff', margin: '5px 0' }}>
              <strong>Duration:</strong> {song.duration}
            </p>
            <button
              onClick={() => toggleFavorite(song, 'music')}
              style={{
                backgroundColor: isFavorite(song.id) ? '#FF0000' : '#9E2A3A',
                color: '#ffffff',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              {isFavorite(song.id) ? '❤️ Favorited' : '🤍 Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
