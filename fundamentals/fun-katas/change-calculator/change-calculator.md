# Change Calculator

The challenge is to implement a function that calculates the coins you would use to give a customer their change in a shop. The function takes one argument, which is the amount of change needed, in pence. The function should always return an object.

## Examples

You can use these examples to start building up your test suite

```js
changeCalculator(1);
// should return {'1':1}
```

```js
changeCalculator(2);
// should return {'2':1}
```

```js
changeCalculator(7);
// should return {'5':1,'2':1}
```

```js
changeCalculator(13);
// should return {'10':1,'2':1,'1':1}
```
