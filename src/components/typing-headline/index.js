//@flow

import React, { Component } from 'react';
import TypedSentence from './TypedSentence';

import { withState, withHandlers, pure, compose } from 'recompose';

export default class extends Component {
  state = {
    isTyping: false
  }

  toggleTyping = () => {
    this.setState((prevState) => ({
      isTyping: !prevState.isTyping
    }))
  }

  componentDidMount = () => {
    setTimeout(() => this.toggleTyping(), 3000)
  }

  render() {
    return (
      <TypedSentence typingHasEnded={this.toggleTyping} isTyping={this.state.isTyping}>
        {this.props.children}
      </TypedSentence>
    )
  }
}
