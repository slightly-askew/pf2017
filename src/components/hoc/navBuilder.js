//@flow
import React from 'react';

export default function (NavComponent, UlComponent, LiComponent) {
  return class extends NavComponent {
    mapItems (navItems) {
      return(
        navItems.map((l, i) => {
          if (typeof l === 'object') {
            return (
              <UlComponent key={i} value={l} />
            )
          }
            return (
              <LiComponent key={i} value={l} />
            )
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
