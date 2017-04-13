//@flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes , compose } from 'recompose';

const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    isActive: PropTypes.bool
  })
)

export default enhance(styled.button.attrs({
  })`
    height: inherit;
    width: inherit;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
  `);
