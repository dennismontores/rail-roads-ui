import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import TrainCars from './pages/components/TrainCars'
import ReceiverTable from './pages/components/ReceiverTable'
import DestinationTable from './pages/components/DestinationTable'
import DestinationWrapper from './pages/components/DestinationWrapper'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <TrainCars/>
    <DestinationWrapper/>
  </React.StrictMode>,
  document.getElementById('root')
)
