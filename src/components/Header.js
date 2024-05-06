import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <nav>
      <div className="container0">
        <Link to="/" className="logo">
          <img className="logo-image" />
          <h1>Stock<span>Pulse</span></h1>
        </Link>
        <div className="flex-options">
          <Link to="/" className="current">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;