import styled from 'styled-components';
import { pure } from 'recompose';

import { modularScale } from 'polished';

export default pure(styled.li`
  transition: color 0.3s 0.1s;
  cursor: pointer;
  &:hover {
      color: cyan;
      transition: color 0.2s;
  }
`);
