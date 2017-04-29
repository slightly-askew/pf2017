//@flow
import styled from 'styled-components';
import React, { PropTypes } from 'react';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

import NavWrapper from './NavWrapper';
import NavLi from './NavLi';
import DownArrow from '../../svg/DownArrow';

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
const ChildUl = styled.ul`
  list-style: none;
  margin,padding: 0;
`

const Ul = (props) => {
  const {label, childItems} = props;
  return(
    <NavLi>
      <ChildUl>
        <span className='hasDropdown'>{label}</span>
      </ChildUl>
    </NavLi>
  )
}

export default enhancer((props) => {
  const Gertrude = navBuilder(NavWrapper, Li, Ul);
  return <Nav><Gertrude navItems={props.navItems} /></Nav>
})
