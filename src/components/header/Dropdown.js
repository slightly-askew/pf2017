//@flow

import React from 'react';
import styled from 'styled-components';
import bubbleCalculator from '../bubbleCalculator.js';
import Bubble from '../Bubble.js';
import { pure } from 'recompose';

import DownArrow from '../svg/DownArrow';

const DropdownWrapper = styled.div`
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

export default pure((props: Object) => {
  console.log(props);
  const children = props.children;
  const bubbleData = bubbleCalculator(children.map(child => child.props.children))
  return (
    <DropdownWrapper>
      <span className="hasDropdown" >{children[0]}<DownArrow /></span>
      <Bubble {...bubbleData} position="below"/>
    </DropdownWrapper>
  )
});
