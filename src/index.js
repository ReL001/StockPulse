import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

// Select the root element once
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // Create a root using ReactDOM.createRoot

// Render your app within the Router component
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Optional: Setup reportWebVitals if needed
reportWebVitals();
