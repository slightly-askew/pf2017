//@flow

import React from 'react';

import bubbleCalculator from '../bubbleCalculator.js';
import Bubble from '../Bubble.js';

const Dropdown = (props: Object) => {
  console.log(props);
  const bubbleData = bubbleCalculator(props.children.map(c=>c.props.children));
  return(
      <Bubble {...bubbleData} position="below"/>
  )
}

export default Dropdown;
