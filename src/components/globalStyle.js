
const WebFont = require('webfontloader');
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${normalize()}
  ${WebFont.load({
    google: {
      families: ['Fira Sans:300', 'Fira Mono:500', 'Noto Serif:400,400i','Montserrat:700']
    }
    }
  )}
  html {
    text-rendering: op­ti­mizeLeg­i­bil­ity;
    font-size: 100%;
    @media screen and (min-width: 320px) {
        font-size: calc(1em + 0.5 * ( (100vw - 320px) / 60));
        font-size: -webkit-calc(100% + 0.5 * (100vw - 20em) / 60);
    }

    @media screen and (min-width: 1280px) {
        font-size: 150%;
    }
  }
  body {
    background-color: red;
  }
`
