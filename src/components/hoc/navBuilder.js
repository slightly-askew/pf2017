
import React from 'react';

export default function (NavComponent, LiComponent, UlComponent) {
  return class extends NavComponent {
    getLi(value, i, childUl) {
      if (LiComponent) {
        return <LiComponent key={i} li={value} childUl={childUl} />
      }
      return <li key={i}>[{value},{childUl ? childUl : null}]</li>;
    }

    getUl(data, i) {
      const ulVal = Object.keys(data);
      const childLiVals = Object.values(data).reduce((a,v) => a.concat(v), []);
      if (UlComponent) {
        return <UlComponent key={i} label={ulVal} childlis={childLiVals}/>
      }
      const mapChildLis = childLiVals.map((l,n) => this.getLi(l,n))
      const mappedChildLis = <ul>{mapChildLis}</ul>
      return this.getLi(ulVal.toString(), i, mappedChildLis)
    }

    mapItems (navItems) {
      return(
        navItems.map((l, i) => {
          if (typeof l === 'object') {
            return this.getUl(l, i);
          }
            return this.getLi(l,i);
          }
        )
      )
    }
    render() {
      let newProps = {};
      const navWrap = super.render()
      const props = Object.assign({}, navWrap.props, newProps);
      return (
        React.cloneElement(navWrap, props, this.mapItems(this.props.navItems))
      )
    }
  }
}
