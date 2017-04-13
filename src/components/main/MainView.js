import { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired
  })
);

export default enhancer(styled.div`
  position: relative;
  background: #000;
  transform: translateX(0px);
  transition: transform 0.4s;
  will-change: transform;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  ${props => {
    if (props.menuIsActive) {
      return (
        `
          transform: translateX(80vw);
          z-index: 10;
        `
      )
    }
  }}
`)
