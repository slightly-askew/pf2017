//@flow

import { keyframes } from 'styled-components';

export const blinking = keyframes`
  0% {
    opacity: 1;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  95% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
