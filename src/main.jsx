// src/main.jsx (or index.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Your CSS file
import App from './App'; // Your root component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
