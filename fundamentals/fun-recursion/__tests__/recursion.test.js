const {
  factorial,
  sum,
  reverseAString,
  countWhiteSpace,
  sumDigits,
  fibonacci,
  nestedArrays,
  deepIncludes,
  countObjects,
} = require('../recursion');

describe('factorial', () => {
  test('0! should equal 1', () => {
    expect(factorial(0)).toBe(1);
  });
  test('1! should equal 1', () => {
    expect(factorial(1)).toBe(1);
  });
  test('2! should equal 2', () => {
    expect(factorial(2)).toBe(2);
  });
  test('5! should equal 120', () => {
    expect(factorial(5)).toBe(120);
  });
});

describe('sum', () => {
  test('0 should equal 0', () => {
    expect(sum(0)).toBe(0);
  });
  test('1 should equal 1', () => {
    expect(sum(1)).toBe(1);
  });
  test('4 should equal 10', () => {
    expect(sum(4)).toBe(10);
  });
  test('n should equal sum(n)', () => {
    expect(sum(10)).toBe(55);
    expect(sum(12)).toBe(78);
    expect(sum(6)).toBe(21);
  });
});

describe('reverseAString', () => {
  test("empty string should equal ''", () => {
    expect(reverseAString('')).toBe('');
  });
  test("'a' should equal 'a'", () => {
    expect(reverseAString('a')).toBe('a');
  });
  test("'hi' should equal 'ih'", () => {
    expect(reverseAString('hi')).toBe('ih');
  });
  test("'hello' should equal 'olleh'", () => {
    expect(reverseAString('hello')).toBe('olleh');
  });
  test("'recursion is easy' should equal 'ysae si noisrucer'", () => {
    expect(reverseAString('recursion is easy')).toBe('ysae si noisrucer');
  });
});

describe('countWhiteSpace()', () => {
  test("empty string should equal '0'", () => {
    expect(countWhiteSpace('', 0)).toBe(0);
  });
  test('given a string with 1 space, return 1', () => {
    expect(countWhiteSpace('Hi there!', 0)).toBe(1);
  });
  test('given a string with 3 spaces, return 3', () => {
    expect(countWhiteSpace('Hi there bob bob', 0)).toBe(3);
  });
  test('given a string with 6 spaces, return 6', () => {
    expect(countWhiteSpace('Hi there bob bobHi there bob bob', 0)).toBe(6);
  });
  test('given a string with', () => {
    expect(countWhiteSpace('Hi this is a long string and I have no creative side.', 0)).toBe(11);
  });
});

describe('sumDigits', () => {
  test('If length of input is 1 then return input', () => {
    expect(sumDigits(1)).toBe(1);
  });
  test('Given a two digit number it should return the value', () => {
    expect(sumDigits(99)).toBe(9);
  });
  test('Given a three digit number it should return the value', () => {
    expect(sumDigits(420)).toBe(6);
  });
  test('Given a four digit number it should return the value', () => {
    expect(sumDigits(5699)).toBe(2);
  });
});

describe('fibonacci', () => {
  it('given 1 it should return 1', () => {
    expect(fibonacci(1)).toBe(1);
  });
  it('given 7 it should return 8', () => {
    expect(fibonacci(7)).toBe(13);
  });
  it('given 12 it should return ', () => {
    expect(fibonacci(12)).toBe(144);
  });
});

describe('nestedArrays', () => {
  test('if passed a 2d array, return array length', () => {
    expect(nestedArrays([1, 2, 'c', true])).toBe(4);
  });
  test('if passed a 3d array, return array length', () => {
    expect(nestedArrays([1, 2, 'c', true, [1, 2]])).toBe(7);
  });
  test('if passed a 3d array, return array length', () => {
    expect(nestedArrays([[1, 2, [3, 4, [5]]], 6])).toBe(9);
  });
});

describe('deepIncludes', () => {
  test('if 2d array includes item, return true', () => {
    expect(deepIncludes([1, 2, 3], 1)).toBe(true);
  });
  test('if 3d array includes item, return true', () => {
    expect(deepIncludes([1, 2, [3, 4, 5]], 5)).toBe(true);
  });
  test('if 3d array includes item, return true', () => {
    expect(deepIncludes([1, [2, [3]]], 3)).toBe(true);
  });
  test('if 3d array includes item, return true!', () => {
    expect(deepIncludes([6, [2, null, [1, 'hello', [1, [undefined]]]]], 'hello')).toBe(true);
  });
});

describe('countObjects', () => {
  test('if 2d obj is passed return deepLength', () => {
    expect(countObjects({ a: 'b' })).toBe(1);
  });
  test('if 3d obj is passed return deepLength', () => {
    expect(countObjects({ a: { b: 'c' } })).toBe(2);
  });
  test('if 3d obj is passed return deepLength', () => {
    expect(countObjects({ a: { b: { c: { d: { e: { f: 'f to pay respect' } } } } } })).toBe(6);
  });
});
