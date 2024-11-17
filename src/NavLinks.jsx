import React from 'react';
import { Link } from 'react-router-dom';

function NavLinks() {
  return (
    <div className="my-4">
      <Link to="/" className="btn btn-dark mx-2">Home</Link>
      <Link to="/about" className="btn btn-dark mx-2">About</Link>
      <Link to="/education" className="btn btn-dark mx-2">Education</Link>
      <Link to="/hobbies" className="btn btn-dark mx-2">Hobbies</Link>
      <Link to="/contact" className="btn btn-dark mx-2">Contact</Link>
    </div>
  );
}

export default NavLinks;
