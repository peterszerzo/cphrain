import domReady from 'domready';

import rains from './rains.json';

import './demo.css';
const cphRainDemo = {};

rains.forEach((rain) => {
  cphRainDemo[rain] = require(`./scripts/${rain}.js`).default;
});

function addKeyboardListeners(document) {
  document.addEventListener('keydown', (e) => {
    const {keyCode} = e;
    if (keyCode === 37) {
      let node = document.getElementsByClassName('nav-link--left')[0];
      node && node.click();
    }
    if (keyCode === 39) {
      let node = document.getElementsByClassName('nav-link--right')[0];
      node && node.click();
    }
  });
}

domReady(() => {
  addKeyboardListeners(document);
});

global.cphRainDemo = cphRainDemo;
