//@flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

const enhancers = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    isActive: PropTypes.bool.isRequired
  })
)

export default enhancers(styled.div`
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
`)
