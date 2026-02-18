import { GameMusicProvider } from './contexts/GameMusicContext'
import GamesList from './components/GamesList'
import MusicList from './components/MusicList'
import Favorites from './components/Favorites'
import AddItemForm from './components/AddItemForm'
import './App.css'

function App() {
  return (
    <GameMusicProvider>
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#3A2525',
        fontFamily: 'Arial, sans-serif'
      }}>
        <header style={{ 
          backgroundColor: '#000080', 
          padding: '20px', 
          textAlign: 'center',
          borderBottom: '3px solid #FF0000'
        }}>
          <h1 style={{ 
            color: '#ffffff', 
            margin: 0,
            fontSize: '2.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            🎮 Games & Music Collection 🎵
          </h1>
          <p style={{ 
            color: '#ffffff', 
            margin: '10px 0 0 0',
            fontSize: '1.1rem'
          }}>
            I am managing my personal entertainment collection with React Context API
          </p>
        </header>

        <main style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '20px'
        }}>
          <AddItemForm />
          <GamesList />
          <MusicList />
          <Favorites />
        </main>

        <footer style={{ 
          backgroundColor: '#000080', 
          padding: '20px', 
          textAlign: 'center',
          borderTop: '3px solid #FF0000',
          marginTop: '40px'
        }}>
          <p style={{ 
            color: '#ffffff', 
            margin: 0
          }}>
            © 2026 My Entertainment Collection - Built with React Context API
          </p>
        </footer>
      </div>
    </GameMusicProvider>
  )
}

export default App
