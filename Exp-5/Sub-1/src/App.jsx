import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'

// Lazy load components
const Home = lazy(() => import('./components/Home'))
const Games = lazy(() => import('./components/Games'))
const Music = lazy(() => import('./components/Music'))

function NavBar() {
  const location = useLocation()
  
  return (
    <nav>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/games" className={location.pathname === '/games' ? 'active' : ''}>
          Games
        </Link>
        <Link to="/music" className={location.pathname === '/music' ? 'active' : ''}>
          Music
        </Link>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/music" element={<Music />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App
