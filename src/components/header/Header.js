// @flow

import React from 'react';
import styled from 'styled-components';

import HeaderTitle from './Title';
import MenuIcon from './MenuIcon';
import HireIcon from './HireIcon';
import IconButton from './IconButton';

const HeaderWrapper = styled.div`
  box-sizing: border-box;
  font-size: 1rem;
  position: relative;
  width: 100%;
  background-color: #000;
  padding-top: 0.5em;
  @media (min-width: 400px) {
    padding-top: 0em;
  }
`;

const HeaderItems = styled.div`
  margin: 0 0 0 -4em;
  height: 3.5em;
  width: auto;
  padding: 0.5em 0.5em;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  @media (min-width: 600px) {
    margin: 0;
    padding-left: 2em;
    justify-content: flex-start;
  }
`

const BottomHr = styled.hr`
  box-sizing: border-box;
  border: none;
  position: absolute;
  background-color: #fff;
  height: 0.125em;
  width: 100%;
  margin: 0;
  bottom: 0em;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderItems>
        <IconButton><MenuIcon /></IconButton>
        <HeaderTitle>Oliver Askew</HeaderTitle>
        <IconButton><HireIcon /></IconButton>
      </HeaderItems>
      <BottomHr />
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
