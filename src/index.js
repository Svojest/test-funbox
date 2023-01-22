import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css'
import './vendor/normalize.css'
import './fonts/fonts.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
