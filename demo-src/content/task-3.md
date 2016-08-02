## Task 3

With the same 30 random drops, implement the depth effect:
* 1/3 of the drops are rendered and animated as before.
* 1/3 are bigger, blurred and move faster.
* 1/3 are smaller, blurred and move slower.

```js
const rm = Math.random();
if (rm < 1/3) {
  /* small, blurred, slow */
} else if (rm < 2/3) {
  /* regular, regular, regular */
} else {
  /* large, blurred, fast */
}
```
