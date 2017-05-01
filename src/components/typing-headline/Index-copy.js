//@flow

import React from 'react';
import styled from 'styled-components';
import { compose, pure } from 'recompose';
import componentQuery from 'react-component-queries';

const sizeQueries = {
  queries: [
    ({ width }) => (width > 500) && {medium: true},
    ({ width }) => (width > 800) && {large: true}
  ]
};


const enhancer = compose(
  componentQuery(sizeQueries),
  pure
);

const Heading = styled.h1`
  font-size: 1em;
  color: white;
  ${props => console.log(props)}
  ${({ medium, large }) => ((
    medium && `
      color: orange;
    `
    )+(
    large && `
      color: red;
      font-size: 1.4em;
    `
    ))
  }
`;

export default enhancer((props) => <Heading {...props} >I am a test of container queries</Heading>);
