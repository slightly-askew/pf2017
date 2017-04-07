//@flow

import React from 'react';
import styled, { css } from 'styled-components';

const IconButton = styled.button`
  margin: 0;
  padding: 0;
  border: none;
  height: 100%;
  width: auto;
  background-color: transparent;
  cursor: pointer;
  ${(props) => {
    if (props.transform) {
      return css`
        transform: ${props.transform};
      `
    }
  }}
  @media (min-width: 600px) {
    display: none;
  }
`

export default IconButton;
