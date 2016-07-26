## cphRain()

In your Codepen link, the function above is available in the global name space. It handles rendering and animation for you, and you only need to call it once:

```js
cphRain(drops, stepDrops, container);
```

* `drops` &rarr; array of drops
* `stepDrops` &rarr; step function (takes drops, returns new drops)
* `container` &rarr; dom node
