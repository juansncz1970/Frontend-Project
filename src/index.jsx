import React from 'react';
import ReactDOM from 'react-dom/client';  // Use this for React 18+
import App from './App';  // Import the root App component
//import './index.css';  // Import the global CSS

// This is for React 18 and later. ReactDOM.createRoot is the new way of rendering.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the root App component */}
  </React.StrictMode>
);
