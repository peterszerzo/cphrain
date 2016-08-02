import domReady from 'domready';

import rains from './rains.json';

import './demo.css';
const cphRainDemo = {};

rains.forEach((rain) => {
  cphRainDemo[rain] = require(`./scripts/${rain}.js`).default;
});

function addEventListeners(document) {
  document.getElementById('nav').addEventListener('click', function(e) {
    e.preventDefault();
    const linkNode = e.path.filter((node) => {
      const {className} = node;
      return className && className.indexOf && className.indexOf('nav-link') > -1;
    })[0];
    if (linkNode) {
      fadeOutSite();
      setTimeout(() => {
        window.location = linkNode.href;
      }, 150);
    }
  });

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
  addEventListeners(document);
});

function fadeInSite() {
  document.getElementById('wrapper').className = 'wrapper';
}

function fadeOutSite() {
  document.getElementById('wrapper').className = 'wrapper wrapper--hidden';
}

global.fadeInSite = fadeInSite;
global.fadeOutSite = fadeOutSite;
global.domReady = domReady;
global.cphRainDemo = cphRainDemo;
