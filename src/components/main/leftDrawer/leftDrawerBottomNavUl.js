//@flow

import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import { Link } from 'react-router-dom';

import * as icons from '../../svg/DrawerNavContactButtons';

const enhanced = onlyUpdateForKeys(['label', 'childItems']);

export default enhanced((props) => {
    const { label, childItems } = props;
    const Symbol = icons[label];
    return (
      <Link to={`${childItems[1]}`}>
        <Symbol />
      </Link>
    )
  })
