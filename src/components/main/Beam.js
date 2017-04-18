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
  min-height: 100vh;
  height: 100%;
  width: 2px;
  background-color: #fff;
  top: 0;
  left: -2px;
  z-index: 20;
`)
