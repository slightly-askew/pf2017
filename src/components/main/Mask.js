import { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired
  })
);

export default enhancer(styled.div.attrs({
  style: props => (
    props.menuIsActive ?
    {
      opacity: '0.8',
      transform: 'scale(1)',
      transition: 'opacity 0.3s',
      cursor: 'alias',
    }:{
      opacity: '0',
      transform: 'scale(0)',
      transition: 'opacity 0.3s, transform 0s 0.3s',
    }
  )
  })`
  position:absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  transform-origin: top left;
  z-index: 20;
  background-color: #000;
  -webkit-backdrop-filter: blur(10px);
  will-change: opacity transform;
  `)
;
