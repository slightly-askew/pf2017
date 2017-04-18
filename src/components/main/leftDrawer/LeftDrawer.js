import React, { PropTypes } from 'react';
import { onlyUpdateForPropTypes, setPropTypes, compose} from 'recompose';

import Background from './Background';
import DrawerNav from './DrawerNav';
import Divider from './Divider';
import BottomNavWrapper from './BottomNavWrapper';
import BottomNav from './BottomNav';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired,
    navItems: PropTypes.array.isRequired,
    contactNavItems: PropTypes.array.isRequired
  })
);


export default enhancer((props) => {
    return (
        <Background styleName='background' isActive={props.menuIsActive}>
          <DrawerNav navItems={props.navItems}/>
          <BottomNavWrapper>
            <Divider />
            <BottomNav navItems={props.contactNavItems} />
          </BottomNavWrapper>
        </Background>
    );
})
