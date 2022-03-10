# Higher Order Fun

## Goals

1. Get completely comfortable with the concept of **higher-order functions** in JavaScript (functions that receive other functions as arguments and/or return other functions)
2. Continue to use TDD to arrive at your implementations. Tests are provided (until task 9) but feel free to inspect them and add your own.
3. Prepare your minds for the many practical examples of this pattern that you'll see in the libraries we'll be using in this course.

## Tasks

1. Write an _identity_ function that takes an argument and returns that same argument.

2. Write a function `identityf` that takes an argument and returns a function that returns that argument.

```js
const three = identityf(3);
three(); // 3
```

3. Write three binary functions (_functions that take two arguments_), `add`, `sub` and `mul` that take two numbers and return their sum, difference and product respectively.

```js
add(3, 4); // 7
sub(3, 4); // -1
mul(3, 4); // 12
```

4. Write a function called `inc` that uses one of your previous functions to return a number incremented by 1.

```js
const inc = ___; // <-- function definition
inc(5); // 6
inc(inc(5)); // 7
```

5. Write a function `addf` that adds from two invocations).

```js
const add3 = addf(3);
const result = add3(4);
console.log(result); // 7

const result2 = addf(5)(6);
console.log(result2); // 11
```

6. Write a function `curry` that takes two arguments, a binary function and second argument, and returns a function that can take an argument to pass to the binary function.

```js
const add3 = curry(add, 3);
add3(4); // 7
```

```js
const mul5 = curry(mul, 5);
const result = mul5(6);
console.log(result); // 30
```

7. Write a function `liftf` that takes a binary function, and makes it callable with two invocations.

```js
const add = (a, b) => a + b;
const addf = liftf(add);
const add3 = addf(3);
const result = add3(4);
console.log(result); // 7
```

```js
const mul = (a, b) => a * b;
const mulf = liftf(mul);
const mul5 = mulf(5);
const result = mul5(6);
console.log(result); // 30
```

8. Write a function `twice` that takes a binary function and returns a unary function (_a function that takes one argument_) that passes its argument to the binary function twice.

```js
const doubl = twice(add);
const result = doubl(11);
console.log(result); // 22
```

```js
const square = twice(mul);
const result = square(11);
console.log(result); // 121
```

## Special Task

**You will need to write your own tests for this one!**

9. Write a function `once` that works in the same way as the [lodash version](https://lodash.com/docs/4.17.15#once). **nb** You can ignore the this bindings mentioned in the docs. We'll cover this later in the course.

## More Tasks

10. Write a function `composeu` that takes two unary functions and returns a unary function that calls them both, in argument order.

```js
const double = (a) => a * 2;
const square = (a) => a ** 2;
composeu(double, square)(5); // 100
composeu(square, double)(5); // 50
```

11. Write a function `composeb` that takes two binary functions and returns a function that calls them both. The return value of the first function will get passed as the first argument to the second one.

```js
mul(add(2, 3), 7); // 35
composeb(add, mul)(2, 3, 7); // 35
```

12. Write a `limit` function that allows a binary function to be called a limited number of times.

```js
const add_ltd = limit(add, 1);
add_ltd(3, 4); // 7
add_ltd(3, 5); // undefined
```

13. Write a `from` function that produces a generator that will produce a series of consecutive numerical values starting from the argument passed.

```js
const index = from(0);
index(); // 0
index(); // 1
index(); // 2
```

14. Write a `to` function that takes a generator and an end value, and returns a generator that will produce numbers up to that limit (not inclusive).

```js
const index = to(from(1), 3);
index(); // 1
index(); // 2
index(); // undefined
```

15. Write a `fromTo` function that produces a generator that will produce values in a range.

```js
const index = fromTo(0, 3);
index(); // 0
index(); // 1
index(); // 2
index(); // undefined
```

16. Write an `element` function that takes an array and a generator and returns a generator that will produce elements from the array.

```js
const ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));
ele(); // 'b'
ele(); // 'c'
ele(); // undefined
```

17. Modify the `element` function so that the generator argument is optional. If a generator in not provided, then each of the elements of the array will be produced.

```js
const ele = element(['a', 'b', 'c', 'd']);
ele(); // 'a'
ele(); // 'b'
ele(); // 'c'
ele(); // 'd'
ele(); // undefined
```

18. Write a `collect` function that takes a generator and an array and produces a function that will collect the results in the array by mutating it.

```js
const array = [];
const col = collect(fromTo(0, 2), array);
col(); // 0
col(); // 1
col(); // undefined
array; // [0, 1]
```

19. Write a `filter` function that takes a generator and a predicate and produces a generator that produces only the values approved by the predicate.

```js
function third(value) {
  return value % 3 === 0;
}
const fil = filter(fromTo(0, 5), third);
fil(); // 0
fil(): // undefined
fil(): // undefined
fil(); // 3
fil(); // undefined
```

20. Write a `concat` function that takes two generators and produces a generator that combines the sequences.

```js
const con = concat(fromTo(0, 3), fromTo(0, 2));
con(); // 0
con(); // 1
con(); // 2
con(); // 0
con(); // 1
con(); // undefined
```

21. Make a function `fibonaccif` that returns a generator that will return consecutive fibonacci numbers starting with the first two arguments.

```js
const fib = fibonaccif(0, 1);
fib(); // 0
fib(); // 1
fib(); // 1
fib(); // 2
fib(); // 3
fib(); // 5
```

22. Make a function `gensymf` that makes a function that generates unique symbols.

```js
const genG = gensymf('G');
const genH = gensymf('H');
genG(); // "G0"
genH(); // "H0"
genG(); // "G1"
genH(); // "H1"
genG(); // "G2"
genH(); // "H2"
```

23. Write a function `gensymff` that takes a unary function and a seed and returns a `gensymf`

```js
const gensymf = gensymff(inc, 0);
const genG = gensymf('G');
const genH = gensymf('H');
genG(); // "G1"
genH(); // "H1"
genG(); // "G2"
genH(); // "H2"
```

24. Write a `counter` function that returns an object containing two functions that implement an up/down counter, hiding the counter value itself.

```js
const object = counter(10);
const up = object.up;
const down = object.down;
up(); // 11
down(); // 10
down(); // 9
up(); // 10
```

25. Write a `revokable` function that takes a binary function, and returns an object containing an `invoke` function that can invoke the binary function, and a `revoke` function that disables the `invoke` function.

```js
const add = revokable(add);
add.invoke(3, 4); // 7
add.revoke();
add.invoke(5, 7); // undefined
```

## Even More difficult tasks

26. Implement `curry` so that it works with any number of arguments. `.call`
   and `.apply` are your friends here. You'll also need to use the `arguments` key variable.

```js
function multiply5(a, b, c, d, e) {
  return a * b * c * d * e;
}
curry(multiply5, 1, 2)(3, 4, 5); // 120
curry(multiply5, 1, 2, 3)(4, 5); // 120
```

- Wow, that was ugly. Research ES6 spread syntax. Can you make it a lot more elegant?
- Write `composeu` such that it can take any number of unary functions

## A much more difficult task

27. Reimplement the `concat` function so that it will take any number of generators

### Credits for this sprint to Douglas Crockford
