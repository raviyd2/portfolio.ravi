import React from 'react';
import './Headerc.css'; // Ensure this is the correct import
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav aria-label="Main Navigation">
        <div className="logo">
          <h1>R</h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

const toggleMenu = () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
};

export default Header;
