# JS Fundamentals Revision Day

Today you have several specifications which need to be completed. You are expected to use TDD throughout in order to demonstrate your understanding of the questions and of good TDD practices (the tests for _Section 2 - Using Closures_ have been written for you). Have fun!

## Section 1 human-resources (Array Methods)

For each of these challenges, be sure to **use the appropriate array-method** and **demonstrate your understanding of TDD**.

The functions in this section should be **pure** - so you should also aim to implement test cases to check the functions have no **side effects**, besides any other functionality.

### 1 - `removeAgents`

After a survey of your organisation, it has transpired that a few of the respondents have been very open about committing corporate espionage. As a diligent HR professional, please remove each employee whose admitted profession is `mole`;

Your function should take an array of people objects, and return a new array of people objects whose profession is not `mole`.

```js
const employees = [
  { name: "Sam", profession: "artist" },
  { name: "Mitch", profession: "mole" },
];

removeAgents(employees); // returns [{name: 'Sam', profession: 'artist'}];
```

### 2 - `makeNameTags`

You wouldn't usually be found doing work like this, but Jon is off sick, and the HR Director is having a meeting in a couple of hours to discuss the recent espionage problems. Please make name tags for each of the guests.

Given an array of guest objects containing `title`, `forename`, `lastname` and `company` keys, your makeNameTags function should return a new array with the text (formatted as `<title> <forename> <surname>, <company>`) for each name tag.

```js
const guests = [
  {
    title: "Mr",
    forename: "Sam",
    surname: "Caine",
    age: 30,
    company: "Northcoders",
  },
];

makeNameTags(guests); // returns ['Mr Sam Caine, Northcoders']
```

### 3 - `createPoll`

Usually we'd use survey monkey, but the managers have taken to building polls across the organisation as strings. Given an array of strings, please build a much more useful poll object.

```js
createPoll(["cake", "biscuit", "biscuit"]); // returns {cake: 1, biscuit: 2}
createPoll(["dog", "dog", "dog"]); // returns {dog: 3}
```

Your final test should be using the NCFruitBowl from the challenge1-data file. _DO NOT COPY AND PASTE THIS INTO YOUR SPEC FILE - it's huge!_ Be sure to export it properly. It should return the following object:

```js
{
  apple: 276,
  pear: 223,
  banana: 263,
  orange: 238,
  'lonesome plum': 1
}
```

### 4 - ADVANCED - `removeSmarterAgents`

_This challenge is advanced, if you've reached it, please proceed with the other sections before attempting this_

It turns out there were even more corporate spies than the initial sweep of the organisation turned up. It's become obvious to the resident conspiracy theorist that the moles signify their presence to each other on the company's social media platform's `interests` and `aboutMe` section.

If the `aboutMe` section, or a single `interest` includes the letters `m`, `o`, `l`, `e` in that order, they are almost certainly a spy and should be removed immediately.

Do what you can.

Examples of users to remove:

```js
 const sam = {
   name: 'Sam',
   age: 30,
   aboutMe: 'I have no personality! :D',
   interests: ['code', 'guacamole']
  }

  // removed because of the interest guacamole!

  const mitch = {
    name: 'Mitch',
    age: 29,
    aboutMe: 'I am not a mole - I am a human being!',
    interests: ['Tudor hymns', 'dancing'];
  }

  // removed because of the word mole in aboutMe!

  const jonny = {
    name: 'Jonny',
    age: 32,
    aboutMe: "I'm a father of two girls - it's great!",
    interests: ['parenting']
  }

  // removed about me contains the letters m, o, l, e. In that order:
  //i'M a father Of two girLs - it's grEat"

  const vel = {
    name: 'Vel',
    age: 28,
    aboutMe: 'I love games!',
    interests: ['Magic', 'Monopoly Express'];
  }

  // removed because the interest Monopoly Express contains the letters in the correct order.
```

## Section 2 - Using Closures

### 1 - `invert`

Write a higher-order function called `invert`.

Your `invert` function should...

- ...take a function as its only argument.
- ...return a new function.

The original function that is passed in should...

- ...be able to take any number of arguments

The new function should...

- ...return the boolean opposite to the original function.
- ...uses the same arguments as the original function.

### For Example:

```js
const returnsTrue = () => true;
const returnsFalse = invert(returnsTrue);
returnsFalse(); // returns false
```

```js
const isEven = (num) => num % 2 === 0;
const isOdd = invert(isEven);
isOdd(1); // returns true
isOdd(2); // returns false
```

### 2 - `flip`

Write a higher-order function called `flip` which takes a function as its only argument.

It should do the following:

- It should return a new function.

- The new function should take any number of arguments and then return an invocation to the original passed function with the same arguments **BUT** in reverse order.

### 3 - ADVANCED - `rememberMe`

_This challenge is advanced, if you've reached it, please proceed with the other sections before attempting this_

_This challenge is advanced, if you've reached it, please proceed with the other sections before attempting this_

Write a higher-order function called `rememberMe`, which takes a function as it's only argument.

It should do the following:

- It should return a new function.

- The new function should work in exactly the same way as the old one

- If the new function has not previously been called with those arguments, it should return the output of the original function, but store it in a cache

- If the function has been called with those arguments, it should return the output of the original function **WITHOUT** having to execute the functionality

## Section 3 - OOP Vending Machine

Write a `VendingMachine` class that will return vending machine instances.

It must have a `credit` property, which will be a **number** representing amount of pence, starting at `0`.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0;
```

It must have a stock property, an object representing the rows of items in the machine. Individual positions in the machine can then be referenced by the row, either "A", "B" or "C" e.g.

```js
const testMachine = new VendingMachine();
testMachine.stock;
/** {
A : {},
B : {},
C : {},
};
**/
```

It must have an `addStock` method which will add new stock to the vending machine at the correct position.

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.stock;
/**
{ A: { name: 'marsBar', price: 50, quantity: 6 },
  B: {},
  C: {} }
 **/
```

It must have an `addCredit` method which will update the machine credit.

```js
const testMachine = new VendingMachine();
testMachine.credit; // 0
testMachine.addCredit(50);
testMachine.credit; // 50
testMachine.addCredit(10);
testMachine.credit; // 60;
```

It must have a `purchaseItem` method which will **decrease** the quantity of the stock if there is sufficient credit and returns the stock name.

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.addCredit(30);
testMachine.purchaseItem("A"); // returns 'Insufficent credit!'
```

```js
const marsBars = { name: "marsBar", price: 50, quantity: 6 };
const testMachine = new VendingMachine();
testMachine.addStock(marsBars, "A");
testMachine.addCredit(60);
testMachine.purchaseItem("A"); // returns 'marsBar'
testMachine.stock;
/**
{ A: { name: 'marsBar', price: 50, quantity: 5 },
  B: {},
  C: {}
}
 **/
testMachine.credit; // 10
```

## Section 4 - Recursion

### 1 - `deepEntries`

Implement a function `deepEntries` that will take an object as its argument and go through that object to convert any nested-objects into an array of entries. Each entry is itself a sub-array with the key-value pair from the original object. Your function should be a recursive version of the native method [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries). Use the documentation to help you in your implementation, but avoid using the method.

```js
deeplyEntries({ name: "Sam" }); // returns [ ["name", "Sam"] ]
deepEntries({ name: "Sam", favBook: "Blood Meridian" });
// returns [ ["name", "Sam"], ["favBook", "Blood Meridian"] ]

// more nested object
deepEntries({ name: "Sam", pets: { name: "fido" } }); /** returns [
  ["name", "Sam"],
  ["pets",[["name", "fido"]]]
]
**/
// even more nesting...
deepEntries({
  name: "Sam",
  favBook: { title: "Blood Meridian", author: { name: "Cormac McCarthy" } },
});
/** returns [
  ["name","Sam"],
  ["favBook",[["title","Blood Meridian"],["author", [["name","Cormac McCarthy"]]]
]]]
**/
```

### 2 - `deeplyEquals`

Implement a function called `deeplyEquals`. This function will check if two passed variables contain the same values. If passed _arrays_ or _objects_ the function will check the contents for equality.
You will nee to use recursion in your implementation of this method.
Be sure to build up your tests carefully and take care in building up your logic step by step.

```js
deeplyEquals("a", "a"); // true
deeplyEquals("a", "b"); // false
deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "hello" }]); // true
deeplyEquals([1, 2, { a: "hello" }], [1, 2, { a: "bye" }]); // false
```

NOTE - do not use `JSON.stringify` for this. If you were considering it, well done, you're very smart.

### 3 - ADVANCED - `flat`

_This challenge is advanced, if you've reached it, please proceed with the other sections before attempting this_

Reimplement the experimental array method `flat`. You can find the [docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
