// @flow

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

const enhancers = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    navItems: PropTypes.array.isRequired,
    toggleMenu: PropTypes.func.isRequired,
    menuIsActive: PropTypes.bool.isRequired,
  })
)

import HeaderTitle from './Title';
import MenuIcon from './MenuIcon';
import HireIcon from './HireIcon';
import IconButton from './IconButton';
import HeaderNav from './HeaderNav';



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

const HeaderButton = styled(IconButton)`
    @media (min-width: 600px) {
      display: none;
    }
  `

export default enhancers((props: Object) => {
  return (
    <HeaderWrapper>
      <HeaderItems>
        <HeaderButton onClick={props.toggleMenu} isActive={props.menuIsActive}>
          <MenuIcon isActive={props.menuIsActive}/>
        </HeaderButton>
        <HeaderTitle>Oliver Askew</HeaderTitle>
        <HeaderNav navItems={props.navItems}/>
        <HeaderButton>
          <HireIcon />
        </HeaderButton>
      </HeaderItems>
      <BottomHr />
    </HeaderWrapper>
  )
})
