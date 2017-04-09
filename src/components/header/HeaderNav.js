//@flow

import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  ul {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    list-style: none;
  }
`
const HeaderNav = () => {
  return (
    <Nav>
      <ul>
        <li>
          Projects
        </li>
        <li>
          About
        </li>
        <li>
          Download
        </li>
        <li>
          Contact
        </li>
      </ul>
    </Nav>
  )
}







export default HeaderNav
