import React from 'react';

function NavLinks() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="button-stack">
      <button onClick={() => scrollToSection('home')}>Home</button>
      <button onClick={() => scrollToSection('about')}>About</button>
      <button onClick={() => scrollToSection('education')}>Education</button>
      <button onClick={() => scrollToSection('hobbies')}>Hobbies</button>
      <button onClick={() => scrollToSection('contact')}>Contact</button>
    </div>
  );
}

export default NavLinks;
