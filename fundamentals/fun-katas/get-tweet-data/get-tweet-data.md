# Get certain data from a tweet

The challenge is to implement a function which returns an object containing data from a given tweet.

We want easy access to the following data:

- The length of the tweet
- The amount of hash tags ( #awesomeNorthcoders ) in the tweet as well as an array of them
- The amount of mentions ( @northcoders ) in the tweet as well as an array of them
- We only want to return unique hash tags and handles mentioned

## Examples

You can use these examples to start building up your test suite

```js
getTweetData("My awesome tweet");
// should return { tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 }
```

```js
getTweetData("My awesome tweet to @northcoders");
// should return { tags: [], mentions: ['@northcoders'], tagCount: 0, mentionCount: 1, length: 32 }
```

```js
getTweetData("My awesome tweet about #coding");
// should return { tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 }
```

```js
getTweetData("My awesome tweet about #coding to @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 }
```

```js
getTweetData("I am #coding with @northcoders I love #coding and @northcoders");
// should return { tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 }
```

