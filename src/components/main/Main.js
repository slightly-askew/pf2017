import React from 'react';
import { compose, withState, withHandlers, pure } from 'recompose';

import Mask from './Mask';
import Header from '../header/Header';
import LeftDrawer from './LeftDrawer';
import MainView from './MainView';

import mainNav from '../../data/mainNav';


const enhancer = compose(
  pure,
  withState('menuIsActive', 'toggleMenu', false),
  withHandlers({
    toggleMenu: (p) => () => p.toggleMenu(() => !p.menuIsActive)
  })
);

export default enhancer((props) => {

  const { menuIsActive, toggleMenu } = props;
  return (
    <MainView menuIsActive={menuIsActive}>
      <Mask menuIsActive={menuIsActive} onClick={toggleMenu}/>
      <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu} navItems={mainNav} />
      {/*React.cloneElement({ ...props }.children, { ...props})*/}
      <LeftDrawer menuIsActive={menuIsActive} navItems={mainNav} />
    </MainView>
  )
})
