//@flow

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

export default enhancer((props) => {
  const Gertrude = navBuilder();
  return <nav><Gertrude navItems={props.navItems} /></nav>
})
