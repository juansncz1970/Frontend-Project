import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';  // Import the updated CSS file

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  const [showNavButtons, setShowNavButtons] = useState(false);

  // Function to show navigation buttons when "Learn More" is clicked
  const handleLearnMoreClick = () => {
    setShowNavButtons(true);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home onLearnMoreClick={handleLearnMoreClick} />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Show the nav buttons if showNavButtons is true */}
        {showNavButtons && (
          <div className="nav-buttons-container">
            <button className="nav-button">
              <a href="/">Home</a>
            </button>
            <button className="nav-button">
              <a href="/about">About</a>
            </button>
            <button className="nav-button">
              <a href="/education">Education</a>
            </button>
            <button className="nav-button">
              <a href="/hobbies">Hobbies</a>
            </button>
            <button className="nav-button">
              <a href="/contact">Contact</a>
            </button>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
