//@flow

import React from 'react';
import styled from 'styled-components';

const MenuSvg = styled.svg`
  height: 100%;
  stroke: #fff;
  stroke-width: 0.09375em;
`;

const Runners = styled.g`
  stroke-dasharray: 27,101;
  stroke-dashoffset: 0;
  will-change: stroke-dashoffset;
  transition: stroke-dashoffset 0.4s ease-out;
`;



const MenuIcon = () => {
  return (
      <MenuSvg viewBox="0 0 128 56">
        <g className='paths' fill="none" fillRule="evenodd" transform="translate(0 1)">
          <Runners on>
            <path id='top' d='M113,19 L38.0027563,19 C37.4489493,19 36.6860717,19.3139283 36.2898542,19.7101458 L20,36' />
            <path transform="translate(0 -1)" id='bottom' d='M113,38 L38.0027563,38 C37.4489493,38 36.6904212,37.6904212 36.2911746,37.2911746 L20,21' />
          </Runners>
          <path id='middle' d='M113,28 L86,28' />
        </g>
      </MenuSvg>
  )
};


export default MenuIcon;
