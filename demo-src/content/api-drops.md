### drops

An array of the following structure:

```js
{
  x: .5,
  y: .5,
  blur: 2,
  scale: 1,
  someOtherField: 'apples'
}
```

For your safety:
* `x`, `y`, `blur` and `scale` must be numbers.
* `-0.1 < x < 1.1`
* `-0.1 < y < 1.1`
* no restrictions on any other fields.
