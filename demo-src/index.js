import pages from './pages.json';

import './demo.css';
const cphRainDemo = {};

pages.forEach(({slug}) => {
  cphRainDemo[slug] = require(`./scripts/${slug}.js`).default;
});

global.cphRainDemo = cphRainDemo;
