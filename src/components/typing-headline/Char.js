//@flow

import React from 'react';
import styled from 'styled-components';

const Span = styled.span.attrs({
  style: ({v, y}) => ({
    "opacity": v,
    "transform": `translateY(${y}%)`
  })}
)`
  display: inline-block;
  will-change: opacity, transform;
`

export default function ({tween, children}: {tween: {v: bool, y: number}}) {
  return (
    <Span {...tween}>
      {children}
    </Span>
  )
}
