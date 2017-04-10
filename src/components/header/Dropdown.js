//@flow

import React from 'react';
import styled from 'styled-components';

import bubbleCalculator from '../bubbleCalculator.js';
import Bubble from '../Bubble.js';

const DropdownUl = styled.ul.attrs({
  className: "BubbleSvg"
})`
  transform: translateX(1.6em);
  position: absolute;
  right: 0;
  padding: 2em 0.5em 0.5em 0.5em;
  list-style: none;
  & .BubbleLi {
    visibility: hidden;
    display: none;
  }
`

const Li = styled.li.attrs({
  className: "BubbleLi"
})`
color: blue
`


const Dropdown = (props: Object) => {
  const getItems = (props) => {
    return (props.children.map((child, i) => {
      return (
        <Li key={i + 1} {...child.props}>{child.props.children}</Li>
      )
    }))
  }
  const bubbleData = bubbleCalculator(getItems(props));
  return(
    <DropdownUl>
      {getItems(props)}
      <Bubble {...bubbleData} position="below"/>
    </DropdownUl>
  )
}

export default Dropdown;
