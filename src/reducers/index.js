//@flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // we need this for react-router
import cards from './cards';
import deck from './deck';
import deckFilter from './deckFilter';

export default combineReducers({

  cards,
  deck,
  deckFilter,

  router: routerReducer });
