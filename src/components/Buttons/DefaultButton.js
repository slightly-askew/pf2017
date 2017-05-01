//@flow

import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-size: 1em;
  font-family: 'Fira Mono';
  text-align: center;
  color: black;
  padding: 1.4em;
  background-color: white;
  border-radius: 0.125em;
  box-shadow: 0em 0.125em 1.4em -0.25em #bbb;
`

export default Button;

/*

Default button
-- white
-- standard text
-- even padding
-- mobile and desktop size
-- no shadow or very little white shadow
active state
-- shrinks to hovered state, then springs back out
hover state
-- shrinks sway slightly


*/
