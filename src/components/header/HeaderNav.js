import React, { PropTypes } from 'react';
import styled from 'styled-components';
import {baseAdjust} from '../styleUtils';
import bubbleCalculator from '../hoc/bubbleCalculator';
import Bubble from '../Bubble';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

import navBuilder from '../hoc/navBuilder';
import DownArrow from '../svg/DownArrow';

const enhancers =compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    navItems: PropTypes.array.isRequired
  })
)


const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    background: transparent;
    z-index: 10;
  }
`
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
  padding: 0 1em;
  ${baseAdjust(9)}
  transition: color 0.2s;
  &:hover{
    cursor: pointer;
    color: white;
    & .singleton:before {
      visibility: visible;
      transform: scaleX(1);
      background-color: #fff;
    }
  }
`

const UlListItem = styled(ListItem)`
  &:hover {
    cursor: context-menu;
  }
`

const LiSpan = styled.span.attrs({
  className: "singleton"
  })`
  position: relative;
  &:before {
    display: block;
    content: "";
    position: absolute;
    width: 100%;
    height: 0.111em;
    bottom: -0.2em;
    background-color: #bbb;
    visibility: hidden;
    transform-origin: bottom left;
    transform: scaleX(0);
    will-change: transform;
    transition: all 0.2s ease-out;
  }
`

const DropdownWrapper = styled.span`
  width: 100%;
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
  }`


const Li = (props) => {
  const {value} = props;
  return(
    <ListItem><LiSpan>{value}</LiSpan></ListItem>
  )
}

const Ul = (props) => {

  const {value} = props;
  const ulVals = Object.values(value).reduce((a,v) => a.concat(v), []);
  const bubbleData = bubbleCalculator(ulVals);
  return(
      <DropdownWrapper>
        <UlListItem>
          <span className='hasDropdown'>{Object.keys(value)}<DownArrow /></span>
          <Bubble {...bubbleData} position="below" />
        </UlListItem>
      </DropdownWrapper>
  )
}

export default enhancers((props) => {
  const Charles = navBuilder(HeaderNavUL, Ul, Li);
  return (
    <Nav>
      <Charles navItems={props.navItems}/>
    </Nav>
  )
});
