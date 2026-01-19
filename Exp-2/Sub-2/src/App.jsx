import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Game data
const featuredGames = [
  {
    id: 1,
    title: 'Red Dead Redemption 2',
    description: 'An epic tale of life in America at the dawn of the modern age.',
    genre: 'Action-Adventure',
    releaseYear: 2018,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPiX5PiqiyxK9RGvfysqsnHBdC-f0y-1s2_w&s',
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    description: 'An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.',
    genre: 'RPG',
    releaseYear: 2020,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgJO0q8z6FRR2mzAPUYZLh9bEAu1sO7MF7A&s',
  },
  {
    id: 3,
    title: 'Grand Theft Auto V',
    description: 'A young street hustler, a retired bank robber, and a terrifying psychopath must pull off a series of dangerous heists.',
    genre: 'Action-Adventure',
    releaseYear: 2013,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqbVr1vGxGOIh9p3TaRNbiGifcHY8-VDH7dw&s',
  },
  {
    id: 4,
    title: 'Mafia: Definitive Edition',
    description: 'Re-made from the ground up, rise through the ranks of the Mafia during the Prohibition era of organized crime.',
    genre: 'Action-Adventure',
    releaseYear: 2020,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZHxT4UTpFKY1lVMZ_XvbHS2eU8PfgE9lPQ&s',
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      newsletter: false
    });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">GameHub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#featured">Featured</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#games">Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Discover Your Next Adventure</h1>
          <p className="lead">Explore the most immersive gaming experiences on PC</p>
          <button className="btn btn-primary btn-lg me-2">Browse Games</button>
          <button className="btn btn-outline-light btn-lg">Learn More</button>
        </div>
      </header>

      {/* Featured Games */}
      <section id="featured" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Featured Games</h2>
          <div className="row g-4">
            {featuredGames.slice(0, 2).map(game => (
              <div key={game.id} className="col-md-6">
                <div className="card h-100 shadow">
                  <img src={game.image} className="card-img-top" alt={game.title} style={{ height: '300px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text">{game.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-secondary">{game.genre}</span>
                      <span className="text-muted">Released: {game.releaseYear}</span>
                    </div>
                  </div>
                  <div className="card-footer bg-white">
                    <button className="btn btn-outline-primary w-100">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Games */}
      <section id="games" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Popular PC Games</h2>
          <div className="row g-4">
            {featuredGames.map(game => (
              <div key={game.id} className="col-md-6 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img src={game.image} className="card-img-top" alt={game.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className="card-text text-muted small">{game.genre} • {game.releaseYear}</p>
                    <button className="btn btn-sm btn-outline-secondary">Add to Wishlist</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4">Contact Us</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="newsletter"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter
                      </label>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 GameHub. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
