# remote-pre-hof-primer

This mornings warm up is to get you _thinking_ about alternative solutions to challenges you may have already completed. You are not expected to have an answer or a completed solution but the thought itself will prepare you for some of the concepts we will cover today.

Work through the tasks below in `index.js` and then consider possible reworks or changes that you can make.

## Section 1

### 1. doubleNum

- Write a function called doubleNum that will take a number and double it
- Instead of a testing library this morning get used to making expectations or _assertions_ i.e. saying to yourself "If i give my function _x_ it should return _y_"

Example assertion to test yourself with

```js
console.log('I expect:');
console.log(doubleNum(2));
console.log('to be:');
console.log(4);
```

### 2. doubleManyNums

- Now write a function called doubleManyNums that will take an _array of numbers_ and return an _array of all those numbers doubled_
- Again make sure to write some _assertions_ e.g.

```js
console.log('I expect:');
console.log(doubleManyNums([4, 5, 6]));
console.log('to be:');
console.log([8, 10, 12]);
```

## Section 2

Now have a look at your 2 solutions. Do you notice anything .... repetitive? Is there any way you could make your code a little less repetitive by reworking your `doubleManyNums` solution to reuse any code you have already written elsewhere?
