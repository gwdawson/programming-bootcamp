## Counter Intelligence

For this kata, you need to write a function called counterIntelligence. It takes a string, and should return a decoded string. 

We've intercepted a channel of communication between spies. The messages have been encryted by shifting the letters by a random number, but we know whoever has been sending them always signs off with a kiss ('x'). Using the last letter, establish how the messages have been shifted, and return the decoded string. 

Punctuation is not encrypted, so can be ignored. 

The messages should be returned in upper case.



EXAMPLES: 

```javascript
counterIntelligence('Y') // should return 'X' - the string has been shifted by 1. 
```

```javascript
counterIntelligence('BCD Y') // should return 'ABC X' - the string has been shifted by 1
```


```javascript
counterIntelligence('NKRRU YCKKZNKGXZ D') // should return 'HELLO SWEETHEART X'
```

```javascript
counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G') // should return 'REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X'
```

```javascript
counterIntelligence('ngbk g toik jge :) d') // should return 'HAVE A NICE DAY :) X'
```
