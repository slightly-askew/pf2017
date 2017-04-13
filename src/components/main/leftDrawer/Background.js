//@flow
import styled from 'styled-components';
import { pure } from 'recompose';

export default pure(styled.aside`
  background-color: #000;
  height: 100vh;
  width: 80vw;
  position: absolute;
  top: 0;
  z-index: -1;
  transform: translateX(-100%);
  font-size: 1em;
`);
