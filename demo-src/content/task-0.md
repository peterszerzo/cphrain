## Task 0

Display one drop located smack in the middle, with scale 1, no blur, and not moving.

To get a feel for the helper function, I'll give this one away :).

```js
const drops = [
  {
    x: .5,
    y: .5,
    scale: 1,
    blur: 0
  }
];

const step = drops => drops;

const container =
  document.getElementById('app');

cphRain(
  drops,
  step,
  container
);
```
