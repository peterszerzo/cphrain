## Task 0

One drop, smack in the middle, scale 1, blur 0, not moving.

```js
const drops = [{
  x: .5,
  y: .5,
  scale: 1,
  blur: 0
}];

const step = drops => drops;
/* function step(drops) {return drops;} */

const container = document.getElementById('app');

cphRain(drops, step, container);
```
