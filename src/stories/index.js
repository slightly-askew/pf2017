//@flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { compose, withState, withHandlers } from 'recompose';

import Globals from '../components/styleGlobal';

import Button from '../components/Button';
import Welcome from '../components/Welcome';
import Header from '../components/header/Header';
import MenuIcon from '../components/header/MenuIcon';
import IconButton from '../components/header/IconButton';

import DownArrow from '../components/header/DownArrow';

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
    <Header {...props}/>
  )
})

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Header', module)
  .add('default', () => (
    <HeaderWithToggle />
  ))
  .add('menu button', () => (
    <IconButtonWithToggle />
  ))
  .add('down arrow',  props => (
      <DownArrow storybook />
  ))
