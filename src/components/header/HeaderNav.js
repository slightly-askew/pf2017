//@flow

import React from 'react';
import styled from 'styled-components';
import { baseAdjust } from '../styleUtils'

const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    background: transparent;
    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-start;
      align-items: flex-end;
      list-style: none;
      margin: 0;
    }
  }
`
const Li = styled.li`
  color: #fff;
  font-family: 'Fira Mono', monospace;
  font-size: 0.75em;
  font-weight: 400;
  line-height: 2;
  letter-spacing: -0.02em;
  margin-right: 1.5em;
    ${baseAdjust(9)}
`


const HeaderNav = () => {
  return (
    <Nav>
      <ul>
        <Li>
          Projects
        </Li>
        <Li>
          About
        </Li>
        <Li>
          Download
        </Li>
        <Li>
          Contact
        </Li>
      </ul>
    </Nav>
  )
}

export default HeaderNav
