import styled from 'styled-components';
import {baseAdjust} from '../styleUtils';

import NavItems from '../main/NavItems';


const Nav = styled.nav`
  display: none;
  @media (min-width: 600px) {
    display: inline-block;
    background: transparent;
    z-index: 10;
  }
`
const ListItem = styled.li`
  position: relative;
  color: #bbb;
  font-family: 'Fira Mono', monospace;
  font-size: 0.75em;
  font-weight: 400;
  line-height: 2;
  letter-spacing: -0.02em;
  margin-right: 1.5em;
  ${baseAdjust(9)}
  transition: color 0.2s;
  &:hover{
    color: white;
    & .singleton {
      cursor: pointer;
    }
    & .singleton:before {
      visibility: visible;
      transform: scaleX(1);
      background-color: #fff;
    }
  }
`
const LiSpan = styled.span.attrs({
  className: "singleton"
  })`
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.111em;
    bottom: 0.189em;
    left: 0;
    background-color: #bbb;
    visibility: hidden;
    transform-origin: bottom left;
    transform: scaleX(0);
    will-change: transform;
    transition: all 0.2s ease-out;
  }
`
