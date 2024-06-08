import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import { NavigationProvider } from './context/NavigationContext.jsx';
import { CheckUserProvider } from './context/CheckUserContext.jsx';
import { VotingProvider } from './context/VotingContext.jsx';

import './styles/reset.css';
import './styles/style.css';
import './styles/responsive.css';
import { ThemeProvider } from './theme/ThemeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <NavigationProvider>
        <CheckUserProvider>
          <VotingProvider>
            <App />
          </VotingProvider>
        </CheckUserProvider>
      </NavigationProvider>
    </ThemeProvider>
  </React.StrictMode>,
);