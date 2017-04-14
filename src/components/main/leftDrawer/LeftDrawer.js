import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

import Beam from './Beam';
import Background from './Background';
import DrawerNav from './DrawerNav';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired
  })
);

export default enhancer((props) => {
    return (
        <Background styleName='background'>
            <Beam isActive={props.menuIsActive}/>
            <DrawerNav navItems={props.navItems}/>
        </Background>
    );
})
