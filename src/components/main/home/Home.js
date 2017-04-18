import React from 'react';
import styled from 'styled-components';

import ShapeFace from '../../svg/ShapeFace'

const HomeDiv = styled.div`
  width: 100%;
  height: auto;
`

export default function (props) {
  return (
    <HomeDiv>
      <ShapeFace />
    </HomeDiv>
  )
}
