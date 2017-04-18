//@flow

import styled from 'styled-components';
import { pure } from 'recompose';

export default pure(styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 1.4em;
  height: 3em;
  & .svg--icon__drawer-nav--lower {
    height: 100%;
    fill: #fff;
  }
`)
