import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/index.css';
import App from './components/App';
import reportWebVitals from './test/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
