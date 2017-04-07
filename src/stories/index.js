//@flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';


import Globals from '../components/globalStyle'

import Button from '../components/Button';
import Welcome from '../components/Welcome';
import Header from '../components/Header';

Globals();

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
    <Header />
  ))
