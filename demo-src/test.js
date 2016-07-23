import domReady from 'domready';

import './index.html';

import getRain from './../src/index.js';

const drops = [
  {
    x: .25,
    y: .5,
    scale: 1,
    blur: 0
  },
  {
    x: .52,
    y: .52,
    scale: 1,
    blur: 0
  },
  {
    x: .35,
    y: .5,
    scale: 1,
    blur: 0
  }
];

function generateDrops(n) {
  const drops = [];
  for (let i = 0; i < n; i++) {
    drops.push({
      x: Math.random(),
      y: Math.random(),
      scale: 1,
      blur: 0
    });
  }
  return drops;
}

function stepDrop({x, y, scale, blur}) {
  const isOver = y > 1.4;
  return {
    scale,
    blur,
    x: isOver ? Math.random() : x,
    y: isOver ? -.2 : y + .008
  };
}

function stepDrops(drops) {
  return drops.map(stepDrop);
}

domReady(() => {
  console.log('Hi, Mom!');
  getRain(generateDrops(30), stepDrops, document.getElementById('app'));
});
