const { invert, flip, rememberMe } = require('../challenges/2-closure');

describe('invert()', () => {
  test('returns a new function', () => {
    const originalFunc = jest.fn();
    const invertedOriginalFunc = invert(originalFunc);
    expect(typeof invertedOriginalFunc).toBe('function');
    expect(invertedOriginalFunc).not.toBe(originalFunc);
  });
  test("new function's first argument is passed to the original function", () => {
    let originalFunc = jest.fn();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc('a');
    expect(originalFunc).toBeCalledWith('a');
  });
  test("new function's first 2 arguments are passed to the original function", () => {
    let originalFunc = jest.fn();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc(1, 2);
    expect(originalFunc).toBeCalledWith(1, 2);
  });
  test("all of the new function's arguments are passed to the original function", () => {
    let originalFunc = jest.fn();
    let invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc(1, 2, 3, 4, 5);
    expect(originalFunc).toBeCalledWith(1, 2, 3, 4, 5);

    originalFunc = jest.fn();
    invertedOriginalFunc = invert(originalFunc);
    invertedOriginalFunc('a', 'c', 'hello', 1, 2);
    expect(originalFunc).toBeCalledWith('a', 'c', 'hello', 1, 2);
  });
  test('new function returns negated invocation of the original function', () => {
    let returnsFalse = () => false;
    let returnsTrue = invert(returnsFalse);
    expect(returnsTrue()).toBe(!returnsFalse());

    let checkIsOdd = (num) => num % 2 === 1;
    let checkIsEven = invert(checkIsOdd);
    expect(checkIsEven(100)).toBe(!checkIsOdd(100));
    expect(checkIsEven(13)).toBe(!checkIsOdd(13));

    let isBiggerThan100 = (a, b, c, d) => a + b + c + d > 100;
    let isLessThanOrEqualTo100 = invert(isBiggerThan100);
    expect(isLessThanOrEqualTo100(10, 10, 10, 10)).toBe(!isBiggerThan100(10, 10, 10, 10));
    expect(isLessThanOrEqualTo100(49, 49, 1, 1)).toBe(!isBiggerThan100(49, 49, 1, 1));
    expect(isLessThanOrEqualTo100(100, 1, 1, 1)).toBe(!isBiggerThan100(100, 1, 1, 1));
  });
});

describe('flip()', () => {
  test('returns a new function', () => {
    const originalFunc = jest.fn();
    const flippedOriginalFunc = flip(originalFunc);
    expect(typeof flippedOriginalFunc).toBe('function');
    expect(flippedOriginalFunc).not.toBe(originalFunc);
  });
  test("new function's first argument is passed to the original function", () => {
    let originalFunc = jest.fn();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('a');
    expect(originalFunc).toBeCalledWith('a');
  });
  test("new function's first 2 arguments are passed to the original function in reverse order", () => {
    let originalFunc = jest.fn();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc(1, 2);
    expect(originalFunc).toBeCalledWith(2, 1);

    originalFunc = jest.fn();
    flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('a', 'b');
    expect(originalFunc).toBeCalledWith('b', 'a');
  });
  test("all of the new function's arguments are passed to the original function in reverse order", () => {
    let originalFunc = jest.fn();
    let flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc(1, 2, 3, 4, 5);
    expect(originalFunc).toBeCalledWith(5, 4, 3, 2, 1);

    originalFunc = jest.fn();
    flippedOriginalFunc = flip(originalFunc);
    flippedOriginalFunc('hello', 'northcoders', 42, 100, 2019);
    expect(originalFunc).toBeCalledWith(2019, 100, 42, 'northcoders', 'hello');
  });
  test('new function returns invocation of original func', () => {
    let subtract = (a, b) => a - b;
    let flipSubtract = flip(subtract);
    let actual = flipSubtract(10, 3);
    let expected = -7;
    expect(actual).toBe(expected);

    let joinChars = (...letters) => letters.join('-');
    let flipJoin = flip(joinChars);
    actual = flipJoin('a', 'b', 'c', 'd', 'e');
    expected = 'e-d-c-b-a';
    expect(actual).toBe(expected);
  });
});

describe('rememberMe', () => {
  test('returns a new function', () => {
    expect(typeof rememberMe()).toBe('function');
  });
  test('maintains the functionality of the input function when no args are passed', () => {
    const returnTwo = () => 2;
    const rememberReturnTwo = rememberMe(returnTwo);
    expect(rememberReturnTwo()).toBe(2);
  });
  test('maintain the functionality of the input function with args', () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const rememberAddNums = rememberMe(addNums);
    expect(rememberAddNums(1, 2, 3, 4, 5)).toBe(15);
  });
  test('only calls the function once per unique set of arguments', () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const spiedAdder = jest.fn(addNums);
    const rememberSpiedAdder = rememberMe(spiedAdder);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).toBe(15);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).toBe(15);
    expect(spiedAdder).toBeCalledTimes(1);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).toBe(16);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).toBe(16);
    expect(spiedAdder).toBeCalledTimes(2);
  });
});
