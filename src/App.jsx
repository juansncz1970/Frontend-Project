import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/App.css';

import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); // Toggle the sidebar open/close state
  };

  return (
    <Router>
      <div className="App">
        {/* Hamburger Icon for mobile view */}
        <div className="hamburger-icon" onClick={toggleSidebar}>
          ☰
        </div>

        {/* Collapsible Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? 'active' : 'collapsed'}`}>
          <button className="nav-button" onClick={toggleSidebar}>
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <Link to="/about" onClick={toggleSidebar}>About</Link>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <Link to="/education" onClick={toggleSidebar}>Education</Link>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <Link to="/hobbies" onClick={toggleSidebar}>Hobbies</Link>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
          </button>
        </div>

        {/* Always Visible Navigation for Desktop */}
        <div className={`nav-buttons-container ${isSidebarOpen ? 'collapsed' : ''}`}>
          <button className="nav-button">
            <Link to="/" onClick={toggleSidebar}>Home</Link>
          </button>
          <button className="nav-button">
            <Link to="/about" onClick={toggleSidebar}>About</Link>
          </button>
          <button className="nav-button">
            <Link to="/education" onClick={toggleSidebar}>Education</Link>
          </button>
          <button className="nav-button">
            <Link to="/hobbies" onClick={toggleSidebar}>Hobbies</Link>
          </button>
          <button className="nav-button">
            <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
          </button>
        </div>

        {/* Page Content */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
