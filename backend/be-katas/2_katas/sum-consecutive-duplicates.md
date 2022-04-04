## Sum consecutives

The challenge is to implement a function which adds together all the consecutive numbers in an array and pushes them into a new array.

##### examples

You can use these examples to start building up your test suite

```javascript
    sumConsecutiveDuplicates([1,2,3]]);
    // -> [1,2,3]
```

```javascript
sumConsecutiveDuplicates([1, 1, 2, 3]);
// -> [2,2,3]
```

```javascript
sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3]);
// -> [2,4,6]
```

```javascript
sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);
// -> [2,2,4,2,3]
```

##### Extra credit

In the last example the array which would return has consecutive elements in it. Write a function `reduceConsecutives()` which recursively uses your `sumConsecutiveDuplicates()` function to reduce the array down to a single value made off adding the array elements together once the array has no consecutive numbers.

For example

```javascript
sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1]);
// -> [2,2,4,2,3]
// the returned array has consecutives
sumConsecutiveDuplicates([2, 2, 4, 2, 3]);
// -> [4,4,2,3]
// once again it has consecutives!
sumConsecutiveDuplicates([4, 4, 2, 3]);
// -> 8,2,3
```
