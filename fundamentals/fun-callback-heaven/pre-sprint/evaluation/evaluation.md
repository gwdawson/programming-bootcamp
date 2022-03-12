# Post-lecture evaluation

Make some notes to answer the below questions regarding these snippets of code:

## Task 1

```js
function fetchJoke(url, callBack) {
  // do some request logic here
  request(url, function () {});
}

fetchJoke('https://icandadjoke.com', function (error, joke) {
  console.log(joke);
});
```

a) What are the **arguments** being passed to `fetchJoke` ?</br></br>
b) How many **parameters** does `fetchJoke` have ?</br></br>
c) What are the **parameters** for `fetchJoke` ?</br></br>
d) What are the **parameters** for the **2nd argument** of `fetchJoke`</br></br>
e) Why is `fetchJoke` considered to be a higher order function ?</br></br>
f) When should the function passed to fetchJoke be invoked ? <br></br>

---

</br>

## Task 2

```js
const result = fs.readFile('hello.txt', 'utf8', function (error, files) {
  return files;
});
```

In the code above, someone is attempting to gain access to `files` by using a **return statement** inside the callback function. </br>

What will `result` evaluate to in the snippet above and **why** ?
How should someone gain access to the response from an **async function** like `fs.readFile` ?
