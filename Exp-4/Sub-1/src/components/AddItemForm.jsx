import { useState } from 'react';
import { useGameMusic } from '../contexts/GameMusicContext';

const AddItemForm = () => {
  const [itemType, setItemType] = useState('game');
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    rating: '',
    title: '',
    artist: '',
    genre: '',
    duration: ''
  });
  
  const { addGame, addMusic } = useGameMusic();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (itemType === 'game') {
      if (formData.name && formData.category && formData.rating) {
        addGame({
          name: formData.name,
          category: formData.category,
          rating: parseFloat(formData.rating)
        });
        setFormData({ name: '', category: '', rating: '', title: '', artist: '', genre: '', duration: '' });
      }
    } else {
      if (formData.title && formData.artist && formData.genre && formData.duration) {
        addMusic({
          title: formData.title,
          artist: formData.artist,
          genre: formData.genre,
          duration: formData.duration
        });
        setFormData({ name: '', category: '', rating: '', title: '', artist: '', genre: '', duration: '' });
      }
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ backgroundColor: '#3A2525', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
      <h2 style={{ color: '#FF0000', marginBottom: '15px' }}>Add New Item</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ color: '#ffffff', marginRight: '10px' }}>
          <input
            type="radio"
            value="game"
            checked={itemType === 'game'}
            onChange={(e) => setItemType(e.target.value)}
            style={{ marginRight: '5px' }}
          />
          Game
        </label>
        <label style={{ color: '#ffffff' }}>
          <input
            type="radio"
            value="music"
            checked={itemType === 'music'}
            onChange={(e) => setItemType(e.target.value)}
            style={{ marginRight: '5px' }}
          />
          Music
        </label>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {itemType === 'game' ? (
          <>
            <input
              type="text"
              name="name"
              placeholder="Game Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (0-5)"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="title"
              placeholder="Song Title"
              value={formData.title}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
            <input
              type="text"
              name="artist"
              placeholder="Artist"
              value={formData.artist}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
            <input
              type="text"
              name="genre"
              placeholder="Genre"
              value={formData.genre}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration (e.g., 3:45)"
              value={formData.duration}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #9E2A3A',
                backgroundColor: '#ffffff'
              }}
            />
          </>
        )}
        
        <button
          type="submit"
          style={{
            backgroundColor: '#000080',
            color: '#ffffff',
            border: '2px solid #FF0000',
            padding: '12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Add {itemType === 'game' ? 'Game' : 'Music'}
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;
