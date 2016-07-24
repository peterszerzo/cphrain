import cphRain from './cphrain';

if (typeof global.module === 'object' && global.module.exports) {
  module.exports = cphRain;
} else {
  global.cphRain = cphRain;
}
