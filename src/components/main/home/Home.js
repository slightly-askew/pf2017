//@flow

import React from 'react';
import styled from 'styled-components';

import ShapeFace from '../../svg/ShapeFace';
import Intro from './Intro';
import Heading from '../../typing-headline/index';

const HomeDiv = styled.div`
  width: 100%;
  height: auto;
  font-size: 1rem;
`

export default function (props) {
  return (
    <HomeDiv>
      <Heading>Here's the finished example of my weird animation typing thing.</Heading>
      <ShapeFace />
    </HomeDiv>
  )
}
