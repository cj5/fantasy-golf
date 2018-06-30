import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import './styles/login.css';
import Login from './components/login'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Login />, document.getElementById('root')
)
registerServiceWorker();
