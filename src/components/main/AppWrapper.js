import { PropTypes } from 'react';
import styled from 'styled-components';
import { pure, setPropTypes, compose } from 'recompose';

const enhancer = compose(
  pure,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired,
  })
);

export default enhancer(styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow-x: hidden;
`);
