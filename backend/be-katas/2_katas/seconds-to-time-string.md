## Seconds to time sentence

The challenge is to implement a function which returns a human readable string when passed a number of seconds

##### examples

You can use these examples to start building up your test suite

```javascript
    secondsToTimeString(1);
    // -> "1 second"
```

```javascript
    secondsToTimeString(2);
    // -> "2 seconds"
```

```javascript
    secondsToTimeString(60);
    // -> "1 minute"
```

```javascript
    secondsToTimeString(120);
    // -> "2 minutes"
```

```javascript
    secondsToTimeString(121);
    // -> "2 minutes and 1 second"
```

```javascript
    secondsToTimeString(3661);
    // -> "1 hour, 1 minute and 1 second"
```

```javascript
    secondsToTimeString(31626061);
    // -> "1 year, 1 day, 1 hour, 1 minute and 1 second"
```

```javascript
    secondsToTimeString(127702942);
    // -> "4 years, 18 days, 1 hour, 2 minutes and 22 seconds"
```
