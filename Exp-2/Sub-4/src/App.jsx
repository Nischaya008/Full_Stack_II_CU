import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    setSearchQuery('');
  };

  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          {/* Brand/Logo */}
          <a className="navbar-brand d-flex align-items-center" href="#">
            <span className="game-icon me-2">🎮</span>
            <span className="fw-bold">GameHub</span>
          </a>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div 
            className={`collapse navbar-collapse ${expanded ? 'show' : ''}`} 
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              
              <li className="nav-item dropdown">
                <a 
                  className="nav-link dropdown-toggle" 
                  href="#" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Games
                </a>
                <ul className="dropdown-menu">
                  <li><h6 className="dropdown-header">Action</h6></li>
                  <li><a className="dropdown-item" href="#rdr2">Red Dead Redemption 2</a></li>
                  <li><a className="dropdown-item" href="#gta5">GTA V</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><h6 className="dropdown-header">RPG</h6></li>
                  <li><a className="dropdown-item" href="#cyberpunk">Cyberpunk 2077</a></li>
                  <li><a className="dropdown-item" href="#mafia">Mafia: Definitive Edition</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#new-releases">New Releases</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#top-sellers">Top Sellers</a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#specials">Specials</a>
              </li>
            </ul>

            {/* Search Form */}
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search games..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                  className="btn btn-outline-light" 
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>

            {/* User Actions */}
            <div className="ms-3 d-flex">
              <button className="btn btn-outline-light me-2">
                <i className="bi bi-person"></i> Sign In
              </button>
              <button className="btn btn-primary">
                <i className="bi bi-cart"></i> Cart
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content - Add your main content here */}
      <div className="container mt-5 pt-4">
        <h1 className="mt-5 pt-4">Welcome to GameHub</h1>
        <p className="lead">Your ultimate destination for PC gaming</p>
        
        {/* Featured Games Section */}
        <section id="featured" className="my-5">
          <h2 className="mb-4">Featured Games</h2>
          <div className="row g-4">
            {/* Game Card 1 */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://i.ytimg.com/vi/eaW0tYpxyp0/hq720.jpg" 
                    className="img-fluid w-100 h-100" 
                    alt="Red Dead Redemption 2"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Red Dead Redemption 2</h5>
                  <p className="card-text flex-grow-1">Experience the epic tale of life in America at the dawn of the modern age.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary">Action</span>
                    <span className="text-muted small">2018</span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-primary w-100">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgJO0q8z6FRR2mzAPUYZLh9bEAu1sO7MF7A&s" 
                    className="img-fluid w-100 h-100" 
                    alt="Cyberpunk 2077"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Cyberpunk 2077</h5>
                  <p className="card-text flex-grow-1">An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-success">RPG</span>
                    <span className="text-muted small">2020</span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-primary w-100">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 3 */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbVr1vGxGOIh9p3TaRNbiGifcHY8-VDH7dw&s" 
                    className="img-fluid w-100 h-100" 
                    alt="GTA V"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Grand Theft Auto V</h5>
                  <p className="card-text flex-grow-1">A young street hustler, a retired bank robber, and a terrifying psychopath must pull off a series of dangerous heists.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary">Action</span>
                    <span className="text-muted small">2013</span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-primary w-100">View Details</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 4 */}
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div className="card-img-container" style={{ height: '200px', overflow: 'hidden' }}>
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZHxT4UTpFKY1lVMZ_XvbHS2eU8PfgE9lPQ&s" 
                    className="img-fluid w-100 h-100" 
                    alt="Mafia: Definitive Edition"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Mafia: Definitive Edition</h5>
                  <p className="card-text flex-grow-1">Re-made from the ground up, rise through the ranks of the Mafia during the Prohibition era of organized crime.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-danger">Action</span>
                    <span className="text-muted small">2020</span>
                  </div>
                  <div className="mt-3">
                    <a href="#" className="btn btn-primary w-100">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
