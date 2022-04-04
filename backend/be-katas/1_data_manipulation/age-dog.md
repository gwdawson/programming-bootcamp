## ageDog

This weeks tasks are a series of katas designed to practice the art of manipulating data without mutation.

The [rest](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/rest_parameters) / [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) operator will particularly useful for these challenges. If you've not come across these before, spend some time researching before you embark on these challenges.

This function will take a `single dog object with an age property` and a `number`. You should increment age property by the provided number and return `the aged dog` --- all `without mutating` the original dog!

EXAMPLES: 
```js
const dog = { name: 'Otis', age: 1 };
ageDog(dog, 1) // returns { name: 'Otis', age: 2 }
// dog is not mutated and still has the form { name: 'Otis', age: 1 }
```