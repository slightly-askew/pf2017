//@flow
import { cloneElement } from 'react';

export default function (navObject: Object, liComponents: Array<mixed> = ['li'], ulComponents: Array<mixed> = ['ul'], navComponent:{}|string = 'nav') {

  let navLevel = 0;

  const getComponent = (ComponentAry: Array<React$Component<?*,?*,?*>>):
  (React$Component<?*,?*,?*> | React$Element<?*,?*,?*>) => (
    ComponentAry[navLevel - 1] ?
    ComponentAry[navLevel - 1] :
    ComponentAry.slice.pop()
  );


  const newElement = (type) => (children, key = undefined) => cloneElement(getComponent(type), {key:key},children);

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

  return cloneElement(navComponent, diveDeeper(v(navObject)));
}
