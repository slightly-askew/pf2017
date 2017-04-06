//@flow

import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Button from './Button';
import Welcome from './Welcome';
import HeaderWrapper from './HeaderWrapper';

injectGlobal`normalize(excludeOpinionated: true)`

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
  .add('dark theme', () => (
    <HeaderWrapper>

    </HeaderWrapper>
  ))
