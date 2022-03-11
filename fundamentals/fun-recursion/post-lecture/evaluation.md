# Recursion 101

## Post lecture evaluation

Below are a series of tasks designed to make you _think_ and _engage_ more actively with the content you have just seen in your lecture. An essential prerequisite to writing any good code is being able to learn well and thoroughly - and in order to do this you need to interrogate what you are learning properly. Thinking critically is something we are going to encourage you to do from the very beginning and these questions are designed to help you with the process of rigorous analytical thinking.
​
These questions are _not_ part of an assessment and nor or are they an attempt to trip you up or to catch you out. A well posed question ( we hope ) is one that is designed to make you think. And if you are struggling to answer the questions below - well, that's good, it means you are on the verge of learning something new :)
​

---

### Task 1

```js
function printSequence(n) {
  if (n === 1) {
    console.log(`The current value in the sequence is ${n}! End of sequence`);
    return;
  }
  console.log(`The current value in the sequence is ${n}`);

  if (n % 2 === 0) printSequence(n / 2);
  else printSequence(3 * n + 1);
}
```

a) Work out what will be printed to the `console` when `printSequence` is invoked with `10`, so `printSequence(10)`</br>
b) Work out what will be printed to the `console` when `printSequence` is invoked with `8`, so `printSequence(8)`</br>
c) What is the **base case** in the function above ?</br>
d) How is `printSequence` moving towards the **base case** ?

---

### Task 2

```js
function recursiveDoubleArray(list, newList) {
  if (list.length === 0) return newList;

  const firstItem = list[0];
  newList.push(firstItem * 2);
  const leftOverList = list.slice(1);
  return recursiveDoubleArray(leftOverList, newList);
}
```

a) What will `recursiveDoubleArray([1,2,3],[])` evaluate to ?</br>
b) What is the **base case** for `recursiveDoubleArray` ?</br>
c) How does `recursiveDoubleArray` move towards the base case ?
