import React from 'react';

//start at 0
//spring to children.length
//render a wrapper with clip sentence in, passing in the right props

import { Motion, spring } from 'react-motion';
import Heading from './heading';
import clipSentence from './clipSentence';
import LetterMotion from './LetterMotion'

export default function ({children, typingHasEnded, isTyping}) {
  const sentenceSpring = target => spring(target, {
    stiffness: 3,
    damping: 3.25,
    precision: 0.01
  })

  return (
    <Motion
      defaultStyle={{
        n: 0
      }}
      style={isTyping && {n: sentenceSpring(children.length)}}
      onRest={typingHasEnded}>
      {interpolation =>
      <pre>
        <Heading isTyping={isTyping}>{clipSentence(children, interpolation.n, LetterMotion)}</Heading>
      </pre>}
    </Motion>
  )
}
