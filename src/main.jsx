import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import DestinationWrapper from './pages/components/DestinationWrapper'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DestinationWrapper/>
  </React.StrictMode>,
  document.getElementById('root')
)
