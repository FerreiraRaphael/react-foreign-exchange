/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Typography from 'typography';
import elkGlenTheme from 'typography-theme-elk-glen';
import 'semantic-ui-css/semantic.min.css';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

const typography = new Typography(elkGlenTheme);
typography.injectStyles();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
