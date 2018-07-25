import React from 'react'
import ReactDOM from 'react-dom'

// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import promise from 'redux-promise'

import App from './app'
import './styles/login.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <App />, document.getElementById('root')
)
registerServiceWorker()