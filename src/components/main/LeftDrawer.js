import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired
  })
);

const Background = styled.aside`
  background-color: #000;
  height: 100vh;
  width: 70vw;
  position: absolute;
  top: 0;
  z-index: -1;
  transform: translateX(-100%);
  font-size: 1em;
`

const Beam = styled.div`
  position: absolute;
  height: 100vh;
  width: 2px;
  background-color: #fff;
  right: 2px;
  transition: transform 0.2s;
  will-change: transform;
  ${props => {
    if (props.isActive) {
      return `
        transform: translate(-2px);
      `
    }
  }}
`

export default enhancer((props) => {
    return (
        <Background styleName='background'>
            <Beam isActive={props.menuIsActive}/>
        </Background>
    );
})
