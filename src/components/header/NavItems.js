//@flow

import React from 'react';
import styled from 'styled-components';
import { baseAdjust } from '../styleUtils'

import Dropdown from './Dropdown';
import DownArrow from './DownArrow';

const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    background: transparent;
    z-index: 10;
  }
`

const TopUL = styled.ul`
  padding: 0 0 0 2em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  list-style: none;
  margin: 0;
`

const LiLi = styled.li`
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
    & .hasDropdown {
      cursor: context-menu;
    }
    & .hasDropdown .animated {
      transform: scale(0.2);
      transition: transform 0.1s ease-in;
      fill: #fff;
    }
    & .bubble__circle {
      transform: scale(1);
    }
  }
`

const LiSpan = styled.span.attrs({
  className: "singleton"
})`
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.111em;
    bottom: -0.222em;
    left: 0;
    background-color: #bbb;
    visibility: hidden;
    transform-origin: bottom left;
    transform: scaleX(0);
    will-change: transform;
    transition: all 0.2s ease-out;
  }
`

const DDDownArrow = styled(DownArrow)`
  height: 1em;
  width: 1em;
  ${baseAdjust(3)}
  padding: 0 0.5em;
  fill: #eee;
`

const Li = (props: Object) => {
  const decorateDropDownLabel = props => {
    return (
    props.children.map((child, i) => {
      return (
        typeof child.props.children === 'string' ?
        <DropdownSpan key={i}>{child}<DDDownArrow /></DropdownSpan> : <span key={i}>{child}</span>
      )
    }))
  };
  const getSpanType = props => {
    return(
      typeof props.children !== 'object' ?
      <LiSpan>{props.children}</LiSpan> :
      decorateDropDownLabel(props)
    )
  }
  return (
    <LiLi>{getSpanType(props)}</LiLi>
  )
}

const DropdownSpan = styled.span.attrs({
  className: "hasDropdown"
})`

`


const NavItems = () => {
  return (
    <Nav>
      <TopUL>
        <Li>
          Projects
        </Li>
        <Li>
          About
        </Li>
        <Li>
          <DropdownSpan>Download</DropdownSpan>
          <Dropdown>
            <li>Resume</li>
            <li>Portfolio</li>
          </Dropdown>
        </Li>
        <Li>
          Contact
        </Li>
      </TopUL>
    </Nav>
  )
}


export default NavItems