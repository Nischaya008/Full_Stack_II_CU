import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'

// Step 3: Apply lazy loading to route components
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Services = lazy(() => import('./components/Services'))
const Contact = lazy(() => import('./components/Contact'))

function NavBar() {
  const location = useLocation()
  
  return (
    <nav>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          About
        </Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>
          Services
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contact
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
          {/* Step 4: Wrap routes inside Suspense */}
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App
