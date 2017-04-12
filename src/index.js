//@flow

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter as Router } from 'react-router-redux';

import store, { history } from './store';
import styleGlobal from './styleGlobal';

import AppWrapper from './components/AppWrapper'
import App from './App';

styleGlobal();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <AppWrapper>
        <Route path="/" component={App} />
      </AppWrapper>
    </Router>
  </Provider>,
  document.getElementById('root')
);
