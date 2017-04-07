// @flow

import React from 'react';
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  font-size: 1.5em;
  line-height: 1.5em;
  font-family: 'Fira Sans', sans-serif;
  font-weight: 300;
  color: white;
  color: linear-gradient(to right top, #f79700, #ff0404);
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 4.5em;
  background-color: #000;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: flex-end;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle>Oliver Askew</HeaderTitle>
    </HeaderWrapper>
  )
}


export default Header;
/*


/* Oli Askew:
font-family: FiraSans-Light;
font-size: 36px;
color: #FFFFFF;
line-height: 48px;



<svg width="195px" height="48px" viewBox="118 24 195 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="0%" y1="152.197266%" x2="89.908288%" y2="-72.672526%" id="linearGradient-1">
            <stop stop-color="#F79700" offset="0%"></stop>
            <stop stop-color="#FF0404" offset="100%"></stop>
        </linearGradient>
    </defs>
    <text id="Oli-Askew" stroke="none" fill="url(#linearGradient-1)" fill-rule="evenodd" font-family="FiraSans-Light, Fira Sans" font-size="36" font-weight="300" line-spacing="48">
        <tspan x="118" y="58">Oli Askew</tspan>
    </text>
</svg>



*/
