//@flow

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';

import Main from './components/main/Main';

function mapStateToProps(state) {
  return {
    cards: state.cards,
    deck: state.deck,
    deckFilter: state.deckFilter
  };
}

export function mapDispatchToProps(dispatch: {}) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
