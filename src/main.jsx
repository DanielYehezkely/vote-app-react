import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


import './styles/reset.css'
import './styles/style.css'
import './styles/responsive.css'
import { NavigationProvider } from './context/NavigationContext.jsx'
import { CheckUserProvider } from './context/CheckUserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <NavigationProvider>
  <CheckUserProvider>
    <App />
  </CheckUserProvider>
  </NavigationProvider>
  </React.StrictMode>,
)
