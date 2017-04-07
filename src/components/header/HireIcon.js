//@flow

import React from 'react';
import styled from 'styled-components';

const HireSvg = styled.svg`
  height: 100%
`

const HireIcon = () => {
  return(
    <HireSvg viewBox="0 0 56 56">
      <defs>
        <rect id="a" width="14" height="21" rx="1"/>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <rect width="18" height="28" x="14" y="14" stroke="#fff" stroke-width="2" rx="1"/>
        <g transform="translate(16 16)">
          <rect width="12" height="19" x="1" y="1" stroke="#fff" stroke-width="2" rx="1"/>
        </g>
        <circle cx="23" cy="39" r="1" fill="#fff"/>
      </g>
    </HireSvg>
  )
}

export default HireIcon;
