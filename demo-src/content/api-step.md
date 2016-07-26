## step

A function that converts a list of drops into a new list of drops, the way you want them to be in the next animation frame:

```js
function step(drops) {
  return drops.map((drop) => {
    return {
      x: drop.x,
      y: drop.y + .08,
      blur: drop.blur,
      scale: drop.scale
    };
  });
}
```
