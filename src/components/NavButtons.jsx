// src/components/NavButtons.jsx
import React from 'react';
import { Link } from 'react-scroll';

function NavButtons() {
  return (
    <div className="nav-buttons">
      <Link to="home" smooth={true} duration={500} className="nav-button">
        Home
      </Link>
      <Link to="about" smooth={true} duration={500} className="nav-button">
        About
      </Link>
      <Link to="education" smooth={true} duration={500} className="nav-button">
        Education
      </Link>
      <Link to="hobbies" smooth={true} duration={500} className="nav-button">
        Hobbies
      </Link>
      <Link to="contact" smooth={true} duration={500} className="nav-button">
        Contact
      </Link>
    </div>
  );
}

export default NavButtons;
