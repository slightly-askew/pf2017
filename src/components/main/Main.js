import React from 'react';
import { compose, withState, withHandlers, pure } from 'recompose';

import AppWrapper from './AppWrapper';
import Mask from './Mask';
import Header from '../header/Header';
import LeftDrawer from './LeftDrawer';
import MainView from './MainView';

import mainNav from '../'

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
    <AppWrapper>
      <MainView menuIsActive={menuIsActive}>
        <Mask menuIsActive={menuIsActive} onClick={toggleMenu}/>
        <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>
        {/*React.cloneElement({ ...props }.children, { ...props})*/}
        <LeftDrawer menuIsActive={menuIsActive} />
      </MainView>
    </AppWrapper>
  )
})
