//@flow

import React, { cloneElement } from 'react';


const mainNav = {
  "nav": [
    "Projects",
    "About",
    {
      "Download" : [
        "Resume",
        "Portfolio"
      ]
    },
    "Contact"
  ]
};


export default function (nav: Object, navComponent: Object = nav, ulComponents: Array<any> = ['ul'], liComponents: Array<any> = ['li']) {

  let navLevel = 0;

  const getComponent = (ComponentAry) => ComponentAry[navLevel - 1] ? ComponentAry[navLevel - 1] : ComponentAry.slice.pop();
  const newElement = (type) => (children, key = null) => cloneElement(getComponent(type),{key:key},children);

  const Ul = newElement(ulComponents);
  const Li = newElement(liComponents);

  const k = (x: Object) => Object.keys(x);
  const v = (y: Object) => Object.values(y);

  const diveDeeper = (list: Array<any>) => {
    navLevel ++;
    Ul(
        list.map((l, i) => {
          return (
            typeof l === 'string' ?
            Li(l, i + 1)
            :
            typeof l === 'object' ?
            [
              Li(k(l), i + 1),
              diveDeeper(v(l))
            ]
            :
            v.map((v, i) => Li(v, i + 1))
          )
        })
      )
    navLevel --;
  }

  return React.cloneElement(nav, diveDeeper(v(nav)));
}
