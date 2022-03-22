import React from 'react';
import ReactDOM from 'react-dom';
import './common/scss/styles.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './auth/auth-provider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
