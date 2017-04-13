import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { onlyUpdateForPropTypes, setPropTypes, compose } from 'recompose';

import Beam from './Beam';
import Background from './Background';

const enhancer = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    menuIsActive: PropTypes.bool.isRequired
  })
);


export default enhancer((props) => {
    return (
        <Background styleName='background'>
            <Beam isActive={props.menuIsActive}/>
        </Background>
    );
})
