import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// House Context
import ItemContextProvider from './components/ItemContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ItemContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ItemContextProvider>
);
