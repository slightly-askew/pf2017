//@flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';

export default pure(styled.ul`
  margin-top: calc(20px + 4.66666em);
  width: 100%;
  @media (min-height: 32rem) {
     margin-top: calc(20px + 6.66666em);
  }
`);
