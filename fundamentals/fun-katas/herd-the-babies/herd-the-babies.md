# Herd the babies

Write a function called herdTheBabies which takes a string as its argument. The string will consist of several 'baby' (lowercase) letters, that belong to a 'parent' (uppercase) letter.

The function should return a string that is sorted alphabetically, with the parent letter coming before its babies.

## Examples

```js
herdTheBabies("aA"); // should return 'Aa'
```

```js
herdTheBabies("aBA"); // should return 'AaB'
```

```js
herdTheBabies("bbaBccAC"); // should return 'AaBbbCcc'
```

```js
herdTheBabies("AaBbbBaAbAbbAbB"); // should return 'AAAAaaBBBbbbbbb'
```
