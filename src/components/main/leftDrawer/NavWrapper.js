//@flow
import styled from 'styled-components';
import { pure } from 'recompose';

export default pure(styled.ul`
  font-family: 'Fira Mono', monospace;
  align-self: flex-start;
  font-size: 1.125em;
  line-height: 2.25em;
  margin-top: calc(20px + 2.25em);
  margin-left: 0;
  padding: 0;
  list-style: none;
  width: 80%;
  color: white;
  text-align: center;
`);
