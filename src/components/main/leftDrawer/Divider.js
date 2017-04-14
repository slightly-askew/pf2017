//@flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { pure } from 'recompose';

export default pure(styled.hr`
  position: absolute;
  height: 0.125em;
  width: 80%;
  background-color: #999;
  border: none;
`)
