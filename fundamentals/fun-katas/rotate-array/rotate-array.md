# Rotate Array

The challenge is to implement a function which rotates the elements of an array x number of positions

The function takes two arguments, an array and a number, and always returns an array.

## Examples

Here are some examples to help you build out your test suite:

- If the number is zero return the array unchanged

```js
rotateArray([1, 2, 3], 0);
// should return [1,2,3]
```

- If the number is positive return the array rotated x times to the right

```js
rotateArray([1, 2, 3], 1);
// should return [3, 1, 2]
```

```js
rotateArray([1, 2, 3, 4, 5], 3);
// should return [3, 4, 5, 1, 2]
```

- If the number is negative return the array rotated x times to the left

```js
rotateArray([1, 2, 3], -1);
// should return [2, 3, 1]
```

```js
rotateArray([1, 2, 3, 4, 5], -3);
// should return [4, 5, 1, 2, 3]
```
