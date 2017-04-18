//@flow
import React from 'react';
import { onlyUpdateForKeys } from 'recompose';
import navBuilder from '../../hoc/navBuilder';

import Ul  from './LeftDrawerBottomNavUl';
import ItemsWrapper from './ItemsWrapper';

const enhancer = onlyUpdateForKeys(['contactNavItems']);

export default enhancer((props: {'navItems': Array<mixed>}) => {
  const Hyacinth = navBuilder(ItemsWrapper, null, Ul);
  return <Hyacinth navItems={props.navItems} />
});
