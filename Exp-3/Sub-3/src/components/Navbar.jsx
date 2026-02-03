import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="logo">NG</Link>
      </div>
      <div className="nav-links">
        <Link 
          to="/profile" 
          className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          Profile
        </Link>
        <Link 
          to="/dashboard" 
          className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
