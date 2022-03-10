# Value vs Reference

## Post lecture evaluation

Below are a series of scenarios and questions designed to make you _think_ and _engage_ more actively with the content you have just seen in your lecture. An essential prerequisite to writing any good code is being able to learn well and thoroughly - and in order to do this you need to interrogate what you are learning properly. Thinking critically is something we are going to encourage you to do from the very beginning and these questions are designed to help you with the process of rigorous analytical thinking.

These questions are _not_ part of an assessment and nor or are they an attempt to trip you up or to catch you out. A well posed question ( we hope ) is one that is designed to make you think. And if you are struggling to answer the questions below - well, that's good, it means you are on the verge of learning something new :)

---

### Scenario 1

```js
const phoneBook = {
  tom: '0731415926',
  izzi: '0727182920',
  paulr: '079012312'
};

const userName = 'tom';
const phoneNumber = phoneBook.userName;

console.log(
  `Ahh hello there ${userName}, looks like your phone number is ${phoneBook.userName}`
);
```

After running the above snippet, the following is logged to the console:

`Ahh hello there tom, looks like your phone number is undefined`

Ooops, looks like the `phoneNumber` isn't being printed, instead we're getting back `undefined`.

Can you work out how to fix this issue so the actual `phoneNumber` is printed?

---

### Scenario 2

```js
it('comparing 2 arrays', () => {
  const arr = [1, 2, 3];
  expect(arr).toBe([1, 2, 3]);
});
it('comparing 2 arrays', () => {
  const arr = [1, 2, 3];
  expect(arr).toEqual([1, 2, 3]);
});
```

Just 1 of the test cases above will **pass** ✅ and another will **fail** ❌ - can you explain which way around it will be and _critically_ why?

---

### Scenario 3

```js
const jumbledAlpha = ['b', 'c', 'a', 'd'];
function sortList(arr) {
  const sortedArr = arr.sort();
  return sortedArr;
}

const sortedAlpha = sortList(jumbledAlpha);
console.log(sortedAlpha === jumbledAlpha);
```

A student embarks upon the task of implementing a function that can sort a list of items into alphabetical order. At the end there is a `console.log` with a `===` comparison between `sortedAlpha` and `jumbledAlpha`

What will be printed when this log runs - `true` or `false` ?
OK so there is a fifty-fifty chance of guessing the correct answer in the above scenario, can you justify your answer.

See if you can go through the code line by line to work it out.

---

### Scenario 4

```js
const people = [
  { name: 'foluso' },
  { name: 'liam' },
  { name: 'dave' },
  { name: 'suneet' }
];

const updatedPeople = people.map((person) => {
  person.job = 'tutor';
  return person;
});
console.log(people);
```

What will the above `console.log` print out ? Give reasons for your answer :)

---

### Scenario 5

```js
function formatPeople(array) {
  if (array === []) return [];
  else {
    // do other formatting logic here...
  }
}
```

Above shows the beginnings of someone's implementation for a function called `formatPeople`. However, when invoked like this:

```js
formatPeople([]);
```

the student is complaining that the first `if` block is **not** being executed. Can you work out what is going on here ?

---
