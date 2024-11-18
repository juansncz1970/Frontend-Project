import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Hamburger Icon for mobile version */}
        <div className="hamburger-icon" onClick={toggleSidebar}>
          ☰
        </div>

        {/* Collapsible Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'active' : 'collapsed'}`}>
          <a className="nav-button" href="#home" onClick={toggleSidebar}>
            Home
          </a>
          <a className="nav-button" href="#about" onClick={toggleSidebar}>
            About
          </a>
          <a className="nav-button" href="#education" onClick={toggleSidebar}>
            Education
          </a>
          <a className="nav-button" href="#hobbies" onClick={toggleSidebar}>
            Hobbies
          </a>
          <a className="nav-button" href="#contact" onClick={toggleSidebar}>
            Contact
          </a>
        </div>

        {/* Page Content */}
        <div className="page-content">
          {/* Sections of the page */}
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="education">
            <Education />
          </div>
          <div id="hobbies">
            <Hobbies />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
