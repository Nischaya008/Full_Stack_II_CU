import { createContext, useState, useContext } from 'react';

const GameMusicContext = createContext();

export const useGameMusic = () => {
  const context = useContext(GameMusicContext);
  if (!context) {
    throw new Error('useGameMusic must be used within a GameMusicProvider');
  }
  return context;
};

export const GameMusicProvider = ({ children }) => {
  const [games, setGames] = useState([
    { id: 1, name: 'Chess', category: 'Strategy', rating: 4.5 },
    { id: 2, name: 'Guitar Hero', category: 'Music', rating: 4.8 },
    { id: 3, name: 'FIFA 24', category: 'Sports', rating: 4.2 },
    { id: 4, name: 'Beat Saber', category: 'Music/Rhythm', rating: 4.9 }
  ]);

  const [music, setMusic] = useState([
    { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock', duration: '5:55' },
    { id: 2, title: 'Stairway to Heaven', artist: 'Led Zeppelin', genre: 'Rock', duration: '8:02' },
    { id: 3, title: 'Hotel California', artist: 'Eagles', genre: 'Rock', duration: '6:30' },
    { id: 4, title: 'Sweet Child O Mine', artist: 'Guns N Roses', genre: 'Rock', duration: '5:56' }
  ]);

  const [favorites, setFavorites] = useState([]);

  const addGame = (game) => {
    setGames([...games, { ...game, id: Date.now() }]);
  };

  const addMusic = (song) => {
    setMusic([...music, { ...song, id: Date.now() }]);
  };

  const toggleFavorite = (item, type) => {
    const favoriteItem = { ...item, type };
    const exists = favorites.find(fav => fav.id === item.id && fav.type === type);
    
    if (exists) {
      setFavorites(favorites.filter(fav => !(fav.id === item.id && fav.type === type)));
    } else {
      setFavorites([...favorites, favoriteItem]);
    }
  };

  const value = {
    games,
    music,
    favorites,
    addGame,
    addMusic,
    toggleFavorite,
    setGames,
    setMusic
  };

  return (
    <GameMusicContext.Provider value={value}>
      {children}
    </GameMusicContext.Provider>
  );
};

export default GameMusicContext;
