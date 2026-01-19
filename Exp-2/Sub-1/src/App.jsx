import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());
    alert(`Thanks for your message, ${formObject.name}! I'll get back to you soon.`);
    e.target.reset();
  };

  return (
    <div className="App min-vh-100 d-flex flex-column">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">GameMaster</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#games">Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section text-white text-center py-5" id="home">
        <div className="container py-5 my-5">
          <h1 className="display-4 fw-bold mb-4">Welcome to GameMaster</h1>
          <p className="lead fs-4 mb-4">Your Ultimate PC Gaming Destination</p>
          <p className="mb-4">Discover, explore, and master the best PC games with in-depth reviews and guides</p>
          <button className="btn btn-accent btn-lg m-2">Latest Reviews</button>
          <button className="btn btn-outline-light btn-lg m-2">Top Rated</button>
        </div>
      </header>

      {/* Games Section */}
      <section className="py-5 bg-light" id="games">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Featured Games</h2>
          <div className="row g-4">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9oEoAvqzfcNeXQiCwcpuU2OvD5fLelVkkhw&s" className="card-img-top" alt="Cyberpunk 2077" />
                <div className="card-body">
                  <h3 className="h4">Cyberpunk 2077</h3>
                  <p>An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-accent">RPG</span>
                    <span className="text-muted">9.5/10</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhiSwbDWWzpaEQATIemMnTAU-e-sAE7hQkg&s" className="card-img-top" alt="Elden Ring" />
                <div className="card-body">
                  <h3 className="h4">Elden Ring</h3>
                  <p>A new fantasy action RPG where you'll face fearsome enemies in a vast world full of danger and discovery.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-accent">Souls-like</span>
                    <span className="text-muted">9.7/10</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <div className="card h-100">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2EZd4corLGSkCj53idrJnB8xnOD8KlAFOQ&s" className="card-img-top" alt="Valorant" />
                <div className="card-body">
                  <h3 className="h4">Valorant</h3>
                  <p>A 5v5 character-based tactical shooter where precise gunplay meets unique agent abilities.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-accent">FPS</span>
                    <span className="text-muted">9.0/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="fw-bold mb-4">About GameMaster</h2>
              <p className="lead">Hi, I'm Nischaya Garg, a passionate PC gamer and content creator.</p>
              <p>With over 10 years of gaming experience, I created GameMaster to share my love for PC gaming with the world. I provide honest reviews, detailed guides, and the latest news from the gaming industry.</p>
              <p>My mission is to help fellow gamers discover amazing games and improve their gaming experience with expert tips and insights.</p>
              <div className="mt-4">
                <h4>Gaming Platforms</h4>
                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-secondary">PC</span>
                  <span className="badge bg-secondary">Steam</span>
                  <span className="badge bg-secondary">Epic Games</span>
                  <span className="badge bg-secondary">GOG</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ratio ratio-16x9">
                <iframe 
                  className="rounded-3 shadow" 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="About GameMaster" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-light" id="contact">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-accent btn-lg px-5">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h5 className="mb-3">GameMaster</h5>
              <p className="mb-0">Your trusted source for PC gaming news, reviews, and guides.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="social-links mb-3">
                <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-youtube"></i></a>
                <a href="#" className="text-white me-3"><i className="bi bi-twitch"></i></a>
                <a href="#" className="text-white"><i className="bi bi-discord"></i></a>
              </div>
              <p className="mb-0">&copy; {new Date().getFullYear()} GameMaster. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
