//@flow

import React from 'react';

export const Centered = ( {children} ) => (
  <div style={{
    height: "100%",
    textAlign: "center",
    marginTop: "3em",
  }}>{ children }</div>
);
