//@flow

import React from 'react';
import styled from 'styled-components';

const DownArrowIcon = styled.svg`
  height: 100%;
  width: 100%;
  max-height: 6em;
  max-width: 6em;
  ${(props: Object) => {
    if (props.storybookDA) {
      return `
        &:hover {
        & .animated {
          transform: scale(0.3);
          transition: all 0.1s ease-in;
          }
        }
      `
    }
  }}
`

const TriangleOuterPath = () => <path fill="#fff" d="M28.1536034,42.1820137 C27.8373704,42.6337751 27.3230717,42.6315125 27.0084226,42.1820137 L7.15360337,13.8179863 C6.83737042,13.3662249 7.02427473,13 7.57779541,13 L47.5842305,13 C48.1347383,13 48.3230717,13.3684875 48.0084226,13.8179863 L28.1536034,42.1820137 Z"/>
const TriangleInnerPath = () => <path fill="#000" d="M28.1479659,35.1713765 C27.8348464,35.6290126 27.332929,35.6374158 27.01406,35.1713765 L15.1479659,17.8286235 C14.8348464,17.3709874 15.0322916,17 15.5843126,17 L39.5777133,17 C40.1318204,17 40.332929,17.3625842 40.01406,17.8286235 L28.1479659,35.1713765 Z"/>

const Animated = styled.g.attrs({
  className: "animated"
})`
  transform-origin: 27.48px 36.1px;
  will-change: transform;
  transition: all 0.1s ease-in 0.2s;
`

const Triangle = () => {
  return(
    <mask id="triangleMask">
      <TriangleOuterPath />
      <Animated>
        <TriangleInnerPath />
      </Animated>
    </mask>
  )
}

const DownArrowPath = (props: Object) => {
  return (
    <DownArrowIcon viewBox="0 0 56 56" {...props}>
      <Triangle />

        <rect height="100%" width="100%" mask="url(#triangleMask)"/>

    </DownArrowIcon>
  )
}

export default DownArrowPath;
