import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

import App from './App'
import AddItem from './components/AddItem'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'))
registerServiceWorker()
