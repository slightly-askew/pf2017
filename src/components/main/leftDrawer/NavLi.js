import styled from 'styled-components';
import { pure } from 'recompose';

import { modularScale } from 'polished';

export default pure(styled.li`
  font-family: 'Fira Mono', monospace;
  font-size: 1em;
  line-height: ${modularScale(1,'1em','perfectFourth')}
  margin-bottom: ${modularScale(1,'1em','perfectFourth')}
  text-align: center;
  color: white;
  transition: color 0.3s 0.1s;
  cursor: pointer;
  &:hover {
      color: cyan;
      transition: color 0.2s;
  }
`);
