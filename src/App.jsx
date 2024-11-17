// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Welcome to My Personal Website</h1>
        <p>This is the homepage. I'm John Francis Volante, and here is where you can learn more about me!</p>
        
        {/* Navigation Buttons */}
        <div style={{ marginTop: '20px' }}>
          {/* <Link to="/"><button>Home</button></Link> */}
          <Link to="/about"><button>About</button></Link>
          <Link to="/education"><button>Education</button></Link>
          <Link to="/hobbies"><button>Hobbies</button></Link>
          <Link to="/contact"><button>Contact</button></Link>
        </div>

        {/* Define Routes */}
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
