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
          <button className="nav-button" onClick={toggleSidebar}>
            <NavLink to="/" exact activeClassName="active" onClick={toggleSidebar}>Home</NavLink>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <NavLink to="/about" activeClassName="active" onClick={toggleSidebar}>About</NavLink>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <NavLink to="/education" activeClassName="active" onClick={toggleSidebar}>Education</NavLink>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <NavLink to="/hobbies" activeClassName="active" onClick={toggleSidebar}>Hobbies</NavLink>
          </button>
          <button className="nav-button" onClick={toggleSidebar}>
            <NavLink to="/contact" activeClassName="active" onClick={toggleSidebar}>Contact</NavLink>
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
