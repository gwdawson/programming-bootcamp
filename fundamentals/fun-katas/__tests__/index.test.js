const { calculateDivisors } = require('../calculate-divisors/calculate-divisors');
const { changeCalculator } = require('../change-calculator/change-calculator');
const { dnaPairs } = require('../dna-pairs/dna-pairs');
const { foldString } = require('../fold-strings/fold-string');
const { getTweetData } = require('../get-tweet-data/get-tweet-data');
// const { herdTheBabies } = require('../herd-the-babies/herd-the-babies');
// const { morseCode } = require('../morse-code/morse-code');
const { pigLatin } = require('../pig-latin/pig-latin');
// const { rotateArray } = require('../rotate-array/rotate-array');
const { sentenceToCamelCase } = require('../sentence-to-camel-case/sentence-to-camel-case');
const { tillAddition } = require('../till-addition/till-addition');

describe('calculateDivisors', () => {
  test('if num is 0 return 0', () => {
    expect(calculateDivisors(0)).toBe(0);
  });
  test('if num is 5 return 3', () => {
    expect(calculateDivisors(5)).toBe(3);
  });
  test('if num is 12 return 33', () => {
    expect(calculateDivisors(12)).toBe(33);
  });
});

describe('changeCalculator', () => {
  test('if change is 0 return 0', () => {
    expect(changeCalculator(0)).toBe(0);
  });
  test('if change is 1 return {5: 1}', () => {
    expect(changeCalculator(1)).toEqual({ 1: 1 });
  });
  test('if change is 5 return {5: 1}', () => {
    expect(changeCalculator(5)).toEqual({ 5: 1 });
  });
  test('if change is 10 return {10: 1}', () => {
    expect(changeCalculator(10)).toEqual({ 10: 1 });
  });
  test('if change is 50 return {50: 1}', () => {
    expect(changeCalculator(50)).toEqual({ 50: 1 });
  });
  test('given a random amount, return that amount', () => {
    expect(changeCalculator(23)).toEqual({ 20: 1, 2: 1, 1: 1 });
    expect(changeCalculator(62)).toEqual({ 50: 1, 10: 1, 2: 1 });
    expect(changeCalculator(78)).toEqual({ 50: 1, 20: 1, 5: 1, 2: 1, 1: 1 });
  });
});

describe('dnaPairs', () => {
  test('given 0 dna piece return 0', () => {
    expect(dnaPairs('')).toEqual(0);
    expect(dnaPairs('')).toEqual(0);
    expect(dnaPairs('')).toEqual(0);
  });
  test('given 1 dna piece return the match', () => {
    expect(dnaPairs('A')).toEqual([['A', 'T']]);
    expect(dnaPairs('G')).toEqual([['G', 'C']]);
    expect(dnaPairs('C')).toEqual([['C', 'G']]);
  });
  test('given multiple dna piece return the matchs', () => {
    expect(dnaPairs('AT')).toEqual([
      ['A', 'T'],
      ['T', 'A'],
    ]);
    expect(dnaPairs('GA')).toEqual([
      ['G', 'C'],
      ['A', 'T'],
    ]);
    expect(dnaPairs('CT')).toEqual([
      ['C', 'G'],
      ['T', 'A'],
    ]);
  });
});

describe('foldString', () => {
  test('given an empty string return empty string', () => {
    expect(foldString('')).toBe('');
  });
  test('given an even length sting fold the string', () => {
    expect(foldString('abcd')).toBe('badc');
    expect(foldString('javascript')).toBe('savajtpirc');
  });
  test('given an odd length sting fold the string and keep middle char', () => {
    expect(foldString('abcde')).toBe('baced');
    expect(foldString('Northcoders')).toBe('htroNcsredo');
  });
});

describe('getTweetData', () => {
  test('given no tweet return empty data', () => {
    expect(getTweetData('')).toEqual({
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 0,
    });
  });
  test('given a tweet with no #/@ return data', () => {
    expect(getTweetData('northcoders is the best')).toEqual({
      tags: [],
      mentions: [],
      tagCount: 0,
      mentionCount: 0,
      length: 23,
    });
  });
  test('given a tweet with a # return data', () => {
    expect(getTweetData('#northcoders is the best')).toEqual({
      tags: ['#northcoders'],
      mentions: [],
      tagCount: 1,
      mentionCount: 0,
      length: 24,
    });
  });
  test('given a tweet with a @ return data', () => {
    expect(getTweetData('@northcoders when do we move on to backend')).toEqual({
      tags: [],
      mentions: ['@northcoders'],
      tagCount: 0,
      mentionCount: 1,
      length: 42,
    });
  });
  test('given a tweet with both @ and # return data', () => {
    expect(getTweetData('@northcoders today was great #recursion')).toEqual({
      tags: ['#recursion'],
      mentions: ['@northcoders'],
      tagCount: 1,
      mentionCount: 1,
      length: 39,
    });
  });
});

describe('pigLatin', () => {
  test('return empty strign given an empty string', () => {
    expect(pigLatin('')).toBe('');
  });
  test('return translation when word starts with consonant', () => {
    expect(pigLatin('northcoders')).toBe('orthcodersnay');
  });
  test('return translation when word starts with vowel', () => {
    expect(pigLatin('algorithm')).toBe('algorithmway');
    expect(pigLatin('algorithm algorithm')).toBe('algorithmway algorithmway');
  });
});

describe('sentenceToCamelCase', () => {
  test('return an empty string given no sentence', () => {
    expect(sentenceToCamelCase('', true)).toBe('');
    expect(sentenceToCamelCase('', false)).toBe('');
  });
  test('return a capitalized word given 1 word and true', () => {
    expect(sentenceToCamelCase('test', true)).toBe('Test');
  });
  test('return a lowercase word given 1 word and false', () => {
    expect(sentenceToCamelCase('test', false)).toBe('test');
  });
  test('return a UppercaseCamelCase sentence given sentence and true', () => {
    expect(sentenceToCamelCase('this is my test sentence', true)).toBe('ThisIsMyTestSentence');
  });
  test('return a lowercaseCamelCase sentence given sentence and false', () => {
    expect(sentenceToCamelCase('this is my test sentence', false)).toBe('thisIsMyTestSentence');
  });
});

describe('tillAddition', () => {
  test('return £0.00 when theres no cash', () => {
    expect(tillAddition({})).toBe('£0.00');
  });
  test('return amount when a single coins are passed', () => {
    expect(tillAddition({ '2p': 1 })).toBe('£0.02');
  });
  test('return amount when theres many coins are passed', () => {
    expect(tillAddition({ '1p': 50, '2p': 1, '50p': 9, '£10': 3 })).toBe('£35.02');
  });
});
