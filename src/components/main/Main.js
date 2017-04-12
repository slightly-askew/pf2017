import React from 'react';
import { compose, withState, withHandlers } from 'recompose';

import AppWrapper from './AppWrapper';
import Mask from './Mask';
import Header from '../header/Header';
import LeftDrawer from './LeftDrawer';
import MainView from './MainView';

const enhanceWithToggle = compose(
  withState('menuIsActive', 'toggleMenu', false),
  withHandlers({
    toggleMenu: (p) => () => p.toggleMenu(!p.menuIsActive)
  })
);

const Main = (props) => {

  const { menuIsActive, toggleMenu } = props;
  console.log(props);
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
}

export default enhanceWithToggle(Main);
