import domReady from 'domready';

import './index.html';

import getRain from './../src/index.js';

const drops = [
  {
    x: .25,
    y: .5,
    scale: 1,
    blur: 5
  },
  {
    x: .52,
    y: .52,
    scale: 1,
    blur: 3
  },
  {
    x: .35,
    y: .5,
    scale: 1,
    blur: 6
  }
];

domReady(() => {
  console.log('Hi, Mom!');
  const rain = getRain(document.getElementById('app'));
  rain(drops);
});
