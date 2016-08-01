import rains from './rains.json';

import './demo.css';
const cphRainDemo = {};

rains.forEach((rain) => {
  cphRainDemo[rain] = require(`./scripts/${rain}.js`).default;
});

global.cphRainDemo = cphRainDemo;
