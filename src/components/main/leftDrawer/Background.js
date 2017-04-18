//@flow

import React, { Component } from 'react';
import styled from 'styled-components';
import { pure, toClass, compose } from 'recompose';

const enhancers = compose(
  pure,
  toClass
)

const Aside = styled.aside`
  overflow-y: scroll;
  height: 100%;
  min-height: 100%;
  width: 90vw;
  position: absolute;
  top: 0;
  z-index: -10;
  transform: translateX(-100%);
  font-size: 1em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  background: #000;
`;

export default class Background extends Component {
  componentDidUpdate() {
    if (this.props.isActive) {
      this.aside.scrollTop = 0;
    }
  }

  render() {
    return (
      <Aside innerRef={(scrollTop) => {this.aside = scrollTop}}>{this.props.children}</Aside>
    )
  }
}
