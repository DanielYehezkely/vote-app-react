import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

import { NavigationProvider } from './context/NavigationContext.jsx'
import { CheckUserProvider } from './context/CheckUserContext.jsx'
import { VotingProvider } from './context/VotingContext.jsx'

import './styles/reset.css'
import './styles/style.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <NavigationProvider>
  <CheckUserProvider>
  <VotingProvider>
    <App />
  </VotingProvider>
  </CheckUserProvider>
  </NavigationProvider>
  </React.StrictMode>,
)
