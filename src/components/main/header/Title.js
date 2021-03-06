import styled from 'styled-components';
import { pure } from 'recompose';

import { baseAdjust } from '../../styleUtils'

export default pure(styled.h1`
  text-align: center;
  font-size: 1.5em;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  margin: 0;
  color: white;
  cursor: pointer;
  ${baseAdjust(2)}
  flex: 1 1 content-fit;
`);
