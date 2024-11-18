import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Always Visible Navigation Buttons */}
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

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
