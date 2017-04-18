//@flow
import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

import NavWrapper from './NavWrapper';
import NavLi from './NavLi';

import navBuilder from '../../hoc/navBuilder';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    navItems: PropTypes.array.isRequired
  })
)

const Li = (props) => <NavLi>{props.li}{props.childUl}</NavLi>

const Nav = styled.nav`
  width: 80%;
`

export default enhancer((props) => {
  const Gertrude = navBuilder(NavWrapper, Li);
  return <Nav><Gertrude navItems={props.navItems} /></Nav>
})
