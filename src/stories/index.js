//@flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { compose, withState, withHandlers } from 'recompose';

import Globals from '../styleGlobal';

import { Centered } from './story-components';
import DemoButton from '../components/Button';
import Welcome from '../components/Welcome';

import Header from '../components/main/header/Header';
import MenuIcon from '../components/main/header/MenuIcon';
import IconButton from '../components/main/header/IconButton';
import Main from '../components/main/Main';
import mainNav from '../data/mainNav';

import Button from '../components/Buttons/index';


import DownArrow from '../components/svg/DownArrow';

Globals();

const enhanceWithToggle = compose(
  withState('isActive', 'toggleActive', false),
  withHandlers({
    toggle: (p) => () => p.toggleActive(!p.isActive)
  })
);


const IconButtonWithToggle = enhanceWithToggle((props) => {
  return (
    <IconButton storybook onClick={props.toggle}>
      <MenuIcon storybook {...props}></MenuIcon>
    </IconButton>
  );
})

const HeaderWithToggle = enhanceWithToggle((props) => {
  return(
    <Header {...props} navItems={mainNav}/>
  )
})

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <DemoButton onClick={action('clicked')}>Hello Button</DemoButton>
  ))
  .add('with some emoji', () => (
    <DemoButton onClick={action('clicked')}>😀 😎 👍 💯</DemoButton>
  ));

storiesOf('Header', module)
  .add('default', () => (
    <HeaderWithToggle />
  ))
  .add('menu button', () => (
    <IconButtonWithToggle />
  ))
  .add('down arrow',  props => (
      <DownArrow/>
  ))

storiesOf('Sitewide', module)
  .add('main layout', () => (
    <Main />
  ))

const StoryButton = enhanceWithToggle((props) => <Button {...props}/>);
storiesOf('Buttons', module)
  .add('default button', () => (
    <Centered>
      <StoryButton>Default button</StoryButton>
    </Centered>
    ))
