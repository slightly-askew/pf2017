import React from 'react';
import styled from 'styled-components';

import ShapeFace from '../../svg/ShapeFace';
import Intro from './Intro';

const HomeDiv = styled.div`
  width: 100%;
  height: auto;
  font-size: 1rem;
`

export default function (props) {
  return (
    <HomeDiv>
      <Intro />
      <ShapeFace />
    </HomeDiv>
  )
}
