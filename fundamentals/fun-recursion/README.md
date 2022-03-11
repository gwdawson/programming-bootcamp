# Recursion

Recursion crops up repeatedly both in web development and in computer science in general. It's used to traverse more complex data structures such as trees. The DOM, for example, is a classic tree structure.

Often times, a recursive solution to a problem is more elegant than an iterative solution, and you may very well be asked to solve a problem in a tech interview that requires a recursive approach.

## Objectives

1. Get used to recursion! And it takes a bit of getting used to but once you understand the basic patterns and you start to develop a mindset for looking for the recursive solution, it becomes more and more natural.
2. Continue to use TDD to make sure we are writing quality code.

## Core Tasks

### Part 1: Iterative Tasks

**Please use recursion for the following problems**

1. Implement the factorial function.
```javascript
factorial(0) // 1
factorial(1) // 1
factorial(2) // 2 * 1 = 2
factorial(4) // 4 * 3 * 2 * 1 = 24
```

2. Implement a function that sums the integers 1 through n.
3. Implement a function that reverses a string.
4. Implement a function that counts the number of white spaces in a string.
5. Implement a function that sums the digits of a number until only one digit remains.
   E.g.

```javascript
sumDigits(11)-- > 2;
// 1 + 1 = 2
sumDigits(99)-- > 9;
// 9 + 9 = 18, 1 + 8 = 9
```

6. Implement the fibonacci function (n.b. You are not expected to come up with the fibonnaci formula yourself, just to implement it in JavaScript).  
   In this problem the fibonacci sequence is as follows: 0, 1, 1, 2, 3, 5, 8,...

E.g

```javascript
fib(1)-- > 0;
fib(2)-- > 1;
fib(7)-- > 8;
```

Note: fib(1) is the first number in the sequence, fib(2) the second, etc...

### Part 2: Nested Structure Tasks

7. Implement a function that totals an arbitrarily nested array of integers.

E.g

```js
deepTotal([1, 2, 3]) // ---> 6
deepTotal([1, [5, 10]]) // ---> 16
deepTotal([3, [[6]], 9]) // ---> 18
```

8. Implement a function that determines if an array includes a particular value at any level of nesting.

```js
deepIncludes([1, 2], 3); // ---> false
deepIncludes(["toast", ["avocado", ["chilli flakes"]]], "avocado"); // ---> true
```

9. Implement a function that counts the number of objects in an arbitrarily nested object.

```js
countObjects({ a: 1 }); // ---> 1
countObjects({ a: { b: { c: 1 } } }); // ---> 3
```

## Advanced Tasks

10. Implement your own version of the [deep-freeze function](https://www.npmjs.com/package/deep-freeze), which takes an object (or an array) and freezes it and all of its child array/objects, meaning none of them can be mutated.

You may wish to read up more on [Object.freeze](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) to understand how it works shallowly on objects and arrays.

11. Write a function `analyzeArray` that takes a string and an arbitrarily complex nested array and console.logs the value of each array element on a separate line. The value of each line should be preceded by the string and numbers indicating the index path to each element. You can assume that the array contains only strings and other nested array.

e.g.

```javascript
const arr = ["carrot", ["car", "boat", "plane"], "turtle", ["house"]];
analyzeArray("jimbo", arr);
```

should console.log:

```javascript
jimbo.0:  carrot
jimbo.1.0: car
jimbo.1.1 : boat
jimbo.1.2: plane
jimbo.2: turtle
jimbo.3.0: house
```

_Hint: Have a look at the [Testing Side Effects Notes](https://notes.northcoders.com/courses/js-fundamentals/mock-functions) for some tips on how to test for the console logs_

12. Implement a [JSON.stringify function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

Just do it step by step, using TDD. Look into what constitutes acceptable [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
and start off testing the simplest JSON object you can think of and build from there.

13. Re-implement javascript's reduce using recursion. It should take 3 arguments, with first being the array you are calling your version of reduce on.

## _Very_ Advanced Tasks

14. Find the most nested object or array in a nested object or array. It should return the result in an array. If there are multiple objects/arrays nested at the same depth, it should return an array of all of them.
    HINT: you may want to give your function more than one parameter.

```js
findMostNested([]); // []
findMostNested({}); // [{}];
findMostNested({ a: "hello" }); // [{a: 'hello}]
findMostNested({ a: { b: "hi" }, c: { d: "bye" }, e: 1 }); // [{b:'hi'}, {d: 'bye'}]
const hell = {
  1: {
    2: {
      3: {
        4: {
          a: "found me!",
        },
      },
    },
  },
};
findMostNested(hell); // [{a: 'found me!'}]
```

15. A [bubble sort](https://en.wikipedia.org/wiki/Bubble_sort) is an inefficient sorting algorithm that takes a list of numbers and iterates through them comparing 2 neighbouring numbers at a time. If the first number is greater than the second number the algorithm will switch their places and move on to the next pair. If the first number is less than the second number the algorithm will move on to the next pair doing nothing. It will continue looping through the array until there are no more changes to make.

```js
const initialList = [1, 4, 2, 3]
// the algorithm starts at the beginning of the array
1 > 4? // no, move on
[1, 4, 3, 2]
4 > 3? // yes, switch them
[1, 3, 4, 2]
4 > 2? // yes, switch them
[1, 3, 2, 4]
// loop through again
1 > 3? // no, move on
[1, 3, 2, 4]
3 > 2? // yes, switch them
[1, 2, 3, 4]
3 > 4? // no, move on
[1, 2, 3, 4]
// no more changes to make
finalArray = [1, 2, 3, 4]
```

Implement the function `bubbleSort` that will sort a list of numbers using this algorithm.

16. Write a function `boggle`. It should take a board (Array) and word (String) and determine if the word is a valid guess as per the rules of the classic board game [boggle](https://en.wikipedia.org/wiki/Boggle).

For the purposes of our game the rules are as follows:

- A guess will contain at least one letter.
- A guess is valid if it can be formed by connecting adjacent characters without re-using any previously used positions.
- Letters are counted as adjacent horizontally, vertically or diagonally.
- The guess does not have to be an English word. Any sequence of characters will count as valid so long as it can be made from the board.
- Boards are represented by nested arrays as below.

```js
const board = [
  ["l", "e", "l"],
  ["p", "h", "l"],
  ["d", "i", "o"],
];
```

Valid words would include 'hello', 'hi', 'helio' or 'help'. 'plod' on the other hand would be invalid as it cannot be made from consecutive characters, despite all the letters being present.

Examples:

```js
const board = [
  ["e", "a", "r", "a"],
  ["n", "l", "e", "c"],
  ["i", "a", "i", "s"],
  ["b", "y", "o", "r"],
];

boggle(board, "ear"); // true
boggle(board, "ears"); // false
boggle(board, "rio"); // true
boggle(board, "cereal"); // false
boggle(board, "rscareioybailnea"); // true
```

17. Re-implement the browser function [getElementsByClassName](https://developer.mozilla.org/en/docs/Web/API/Document/getElementsByClassName) (rename it so it doesn't clash)

Look into [Document.body](https://developer.mozilla.org/en-US/docs/Web/API/Document/body),
[Node.childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) (which
returns a list of type [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList))
& [Element.classList](https://developer.mozilla.org/en/docs/Web/API/Element/classList). You will need to find a library such as [JSDom](https://github.com/tmpvar/jsdom) that will allow you to load HTML into Node in order to work with it.
