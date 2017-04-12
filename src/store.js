//@flow

import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import reducers from './reducers/index';
import cards from './data/cards';

const defaultState = {
  cards
};

export const history = createHistory();

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  applyMiddleware(routerMiddleware(history))
);

const store = createStore(reducers, defaultState, enhancers);

export default store;
