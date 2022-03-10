# DNA Pairs

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G and T pairs with A.

## Examples

Here are some examples below.

```js
dnaPair("G");
// should return [ ["G", "C"] ]
```

```js
dnaPair("AG");
// should return [ ["A", "T"], ["G", "C"] ]
```

```js
dnaPair("ATAG");
// should return [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]
```
