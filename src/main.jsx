import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalSyle from './styles/globalSyle.js'
import Routes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
    <GlobalSyle/>
  </React.StrictMode>,
)
