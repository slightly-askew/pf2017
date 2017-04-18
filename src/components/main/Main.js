import React from 'react';
import { compose, withState, withHandlers, pure } from 'recompose';

import Mask from './Mask';
import Header from './header/Header';
import LeftDrawer from './leftDrawer/LeftDrawer';
import MainView from './MainView';
import Beam from './Beam'

import mainNav from '../../data/mainNav';
import leftDrawerLowerNav from '../../data/leftDrawerLowerNav';


const enhancer = compose(
  pure,
  withState('menuIsActive', 'toggleMenu', false),
  withHandlers({
    toggleMenu: (p) => () => p.toggleMenu(() => !p.menuIsActive),
    closeMenu: (p) => () => p.toggleMenu(() => false)
  })
);

export default enhancer((props) => {
  const { menuIsActive, toggleMenu, closeMenu } = props;
  let mq = window.matchMedia(`(min-width: 600px)`);
  mq.addListener(function(changed) {
    if(props.menuIsActive && changed.matches) {
        return closeMenu();
    }
  });
  return (
    <MainView menuIsActive={menuIsActive}>
      <Mask menuIsActive={menuIsActive} onClick={toggleMenu}/>
      <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu} navItems={mainNav} />
      {/*React.cloneElement({ ...props }.children, { ...props})*/}
      <LeftDrawer menuIsActive={menuIsActive} navItems={mainNav} contactNavItems={leftDrawerLowerNav}/>
      <Beam isActive={props.menuIsActive}/>
    </MainView>
  )
})
