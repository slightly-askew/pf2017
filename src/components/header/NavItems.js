//@flow
import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

import Dropdown from './Dropdown';
import DownArrow from './DownArrow';

import { baseAdjust } from '../styleUtils'

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired
  })
);


const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    background: transparent;
    z-index: 10;
  }
`
//move to header
const HeaderNavUL = styled.ul`
  padding: 0 0 0 2em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  list-style: none;
  margin: 0;
`

const ListItem = styled.li`
  position: relative;
  color: #bbb;
  font-family: 'Fira Mono', monospace;
  font-size: 0.75em;
  font-weight: 400;
  line-height: 2;
  letter-spacing: -0.02em;
  margin-right: 1.5em;
  ${baseAdjust(9)}
  transition: color 0.2s;
  &:hover{
    color: white;
    & .singleton {
      cursor: pointer;
    }
    & .singleton:before {
      visibility: visible;
      transform: scaleX(1);
      background-color: #fff;
    }
  }
`

const LiSpan = styled.span.attrs({
  className: "singleton"
  })`
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.111em;
    bottom: 0.189em;
    left: 0;
    background-color: #bbb;
    visibility: hidden;
    transform-origin: bottom left;
    transform: scaleX(0);
    will-change: transform;
    transition: all 0.2s ease-out;
  }
`
//move to dropdown
const DDDownArrow = styled(DownArrow)`
  & .down-arrow {
    height: 1em;
    width: 1em;
    ${baseAdjust(3)}
    padding: 0 0.5em;
    fill: blue;
  }
`

//move to dropdown
const DDDiv = styled.div`
  &:hover {
    & .down-arrow__fill {
      fill: white;
      transition: fill 0.2s;
    }
    & .bubble__svg {
      transition: all 0s 0s;
      opacity: 1;
      transform: scale(1);
      visibility: visible;
    }
    & .bubble__circle {
      transform: scale(1);
    }
    & .hasDropdown {
      cursor: context-menu;
    }
    & .hasDropdown .animated {
      transform: scale(0.2);
      transition: transform 0.1s ease-in;
    }
  }
`

const HeaderNavLi = (props: Object) => {
  //move this to dropdown
  const createDropdown = (children: Array<2>) => {
    return (
      <DDDiv>
        <span className="hasDropdown" >{children[0]}<DDDownArrow /></span>
        <Dropdown>{children[1].props.children}</Dropdown>
      </DDDiv>
    )
  };

  const findDropdowns = child => {
    return(
      typeof child === 'string' ?
      <LiSpan>{child}</LiSpan> :
      createDropdown(child)
    )
  }

  return (
    <ListItem>{findDropdowns(props.children)}</ListItem>
  )
}

const NavItems = () => {
  return (
    <Nav>
      <HeaderNavUL>
        <HeaderNavLi>
          Projects
        </HeaderNavLi>
        <HeaderNavLi>
          About
        </HeaderNavLi>
        <HeaderNavLi>
          Download
          <ul>
            <li>Resume</li>
            <li>Portfolio</li>
          </ul>
        </HeaderNavLi>
        <HeaderNavLi>
          Contact
        </HeaderNavLi>
      </HeaderNavUL>
    </Nav>
  )
}


export default NavItems
