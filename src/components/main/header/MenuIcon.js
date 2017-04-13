//@flow

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    isActive: PropTypes.bool.isRequired
  })
)

const MenuSvg = styled.svg`
    height: 100%;
    max-height: 6em;
    max-width: calc(6em / 7 * 16);
    stroke: #fff;
    stroke-width: 0.09375em;
      &:focus {
        border: none;
      }
    ${
      props => {
        if (!props.isActive) {
          return`
            &:hover {
              & .middle {
                transform: translateX(-3px);
              }
              & .runners {
                transform: translateX(3px);
              }
            }
          `
        } else {
          return`
            z-index: 30;
            &:hover {
              & .runners {
                stroke-dashoffset: -88;
              }
            }
          `
        }
      }
    }
  `;

const Runners = styled.g.attrs({
    className: "runners"
  })`
    stroke-dasharray: 27,101;
    will-change: stroke-dashoffset transform;
    transition: stroke-dashoffset 0.4s ease-out, transform 0.1s ease-in-out;
    stroke-dashoffset: 0;
    ${
      props => {
        if (props.isActive) {
          return`
            stroke-dashoffset: -77;
          `
        }
      }
    }
  `;

const MiddleBar = styled.g.attrs({
    className: 'middle',
  })`
    transition: transform 0.1s ease-out, stroke-dashoffset 0.4s ease-out;
    will-change: transform;
    stroke-dasharray: 27,101;
    stroke-dashoffset: 0;
    ${
      props => {
        if (props.isActive) {
          return`
            stroke-dashoffset: 77;
          `
        }
      }
    }
  `;

export default enhance((props: Object) => {
  return (
      <MenuSvg viewBox="0 0 128 56" isActive={props.isActive}>
        <g className='paths' fill="none" fillRule="evenodd" transform="translate(0 1)">
          <Runners isActive={props.isActive}>
            <path id='top' d='M113,19 L38.0027563,19 C37.4489493,19 36.6860717,19.3139283 36.2898542,19.7101458 L20,36' />
            <path transform="translate(0 -1)" id='bottom' d='M113,38 L38.0027563,38 C37.4489493,38 36.6904212,37.6904212 36.2911746,37.2911746 L20,21' />
          </Runners>
          <MiddleBar isActive={props.isActive}><path d="M113,28 L86,28" /></MiddleBar>
        </g>
      </MenuSvg>
  )
});
