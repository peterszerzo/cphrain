## Task 2

The drops from before, moving uniformly.

**Recycling recommended** - in the step function, if a drop goes over, you need to put it back on top. Remember, if your `y` goes over 1.2, you'll get the good old ridiculous error messages :).

```js
function step(drops) {
  return drops.map((drop) => {
    if (drop.y > 1.1) {
      return {
        x: Math.random(),
        y: -.1,
        scale: 1,
        blur: 0
      };
    }
    return {
      x: drop.x,
      y: 'Forgot my raincoat!',
      scale: drop.scale,
      blur: drop.blur
    };
  });
}
```
