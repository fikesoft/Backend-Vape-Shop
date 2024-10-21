import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css'
import './style/index.css';
import App from './components/App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
