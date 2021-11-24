import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.css';
import { App } from './App';
import { AuthProvider } from './contexts/auth';
import { SearchProvider } from './contexts/search';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
