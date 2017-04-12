// @flow

import React from 'react';
import styled from 'styled-components';

import HeaderTitle from './Title';
import MenuIcon from './MenuIcon';
import HireIcon from './HireIcon';
import IconButton from './IconButton';
import NavItems from './NavItems';

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
  max-height: 64px;
  width: auto;
  padding: 0.5em 0 0.2em 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  @media (min-width: 600px) {
    margin: 0;
    padding-left: 2em;
    padding-bottom: 0.4em;
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

const Header = (props: Object) => {
  return (
    <HeaderWrapper>
      <HeaderItems>
        <IconButton onClick={props.toggleMenu}><MenuIcon {...props}/></IconButton>
        <HeaderTitle>Oliver Askew</HeaderTitle>
        <NavItems />
        <IconButton><HireIcon /></IconButton>
      </HeaderItems>
      <BottomHr />
    </HeaderWrapper>
  )
}


export default Header;
