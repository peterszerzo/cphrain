import domReady from 'domready';

import './index.html';

import getRain from './../src/index.js';

const drops = [
  {
    x: 3.25,
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

const style = {
  dropColor: '#000',
  backgroundColor: '#fff'
};

domReady(() => {
  console.log('Hi, Mom!');
  const rain = getRain(document.getElementById('app'));
  rain(drops, style);
});
