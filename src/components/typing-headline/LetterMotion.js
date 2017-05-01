//@flow

import React from 'react';
import { Motion, spring } from 'react-motion';
import Char from './Char';

const letterSpring = n => spring(n, {
  stiffness: 250,
  damping: 20,
  precision: 1
})

const LetterMotion = ({children}) => (
  <Motion
    defaultStyle={{
      y: 15,
      v: 0.1
    }}
    style={{
      y: letterSpring(0),
      v: letterSpring(1)
    }}>
    {int => <Char tween={int}>{children}</Char>}
  </Motion>
)

export default LetterMotion;
