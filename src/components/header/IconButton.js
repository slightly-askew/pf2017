//@flow

import styled, { css } from 'styled-components';

const IconButton = styled.button.attrs({
})`
  height: inherit;
  margin: 0;
  padding: 0;
  border: none;
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
