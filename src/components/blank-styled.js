//@flow
import { PropTypes } from 'react';
import styled from 'styled-components';
import { compose, onlyUpdateForPropTypes, setPropTypes } from 'recompose';

const enhancers = compose(
  onlyUpdateForPropTypes,
  setPropTypes({

  })
)

export default enhancers();
