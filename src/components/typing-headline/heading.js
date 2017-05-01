//@flow

import styled, { css } from 'styled-components';
import { blinking } from './keyframes';

export default styled.h1`
  font-size: 1.4em;

  color: white;
  font-family: 'Fira Sans';
  font-weight: 300;
  line-height: 1.25;
  overflow: hidden;

  &::after {
    content: '|';
    ${({isTyping}) => (
      !isTyping && css`
        animation: ${blinking} 1s linear infinite;
      `
      )}
  }
`
