import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';                // import your main App component
import './styles/index.css';           // import your CSS (with Tailwind directives)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
