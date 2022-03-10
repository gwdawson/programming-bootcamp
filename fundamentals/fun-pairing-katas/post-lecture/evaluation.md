# Testing 101

## Post lecture evaluation

Below are a series of tasks designed to make you _think_ and _engage_ more actively with the content you have just seen in your lecture. An essential prerequisite to writing any good code is being able to learn well and thoroughly - and in order to do this you need to interrogate what you are learning properly. Thinking critically is something we are going to encourage you to do from the very beginning and these questions are designed to help you with the process of rigorous analytical thinking.
​
These questions are _not_ part of an assessment and nor or are they an attempt to trip you up or to catch you out. A well posed question ( we hope ) is one that is designed to make you think. And if you are struggling to answer the questions below - well, that's good, it means you are on the verge of learning something new :)
​

---

### Task 1

```js
// sum.test.js

test('should find the sum of 2 numbers', function () {
  expect(sum(10, 32)).toBe(42);
});
```

Consider the piece of code above and reflect on the following questions:

- What is the role of the `test` function - what are the 2 arguments it takes ?
- What is the role of the argument that is passed to the `expect` function and what is the role of the argument that is passed to the `toBe` function ?
- Overall what term do we use to describe this line shown below:

```js
expect(sum(10, 32)).toBe(42);
```

- Identify the **unit of code** that is being tested in the block above
- What are we **asserting** in the test case above - what claim about the **behaviour** of the function are we trying to make ?
