const _ = require('../lowbar');

describe('#identity', () => {
  test('returns the value passed as an argument', () => {
    expect(_.identity(3)).toBe(3);
    expect(_.identity('hello')).toBe('hello');
    expect(_.identity(true)).toBe(true);
  });
  test('return value has the same reference when passed an array or object', () => {
    const arr = [];
    expect(_.identity(arr)).toBe(arr);
    const obj = {};
    expect(_.identity(obj)).toBe(obj);
  });
});

describe('_.fromPairs', () => {
  test('if an empty array is passed return an empty object', () => {
    expect(_.fromPairs([])).toEqual({});
  });
  test('if the array has a nested array, return a object', () => {
    expect(_.fromPairs([['a', 1]])).toEqual({ a: 1 });
  });
  test('if the array has more than 1 nested arrays, return an object', () => {
    expect(
      _.fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
      ])
    ).toEqual({ a: 1, b: 2, c: 3 });
  });
});

describe('_.times', () => {
  test('if number is 0, return empty array', () => {
    const number = 0;
    const type = 'string';
    const received = _.times(number, type);
    expect(received).toEqual([]);
  });
  test('if number is N and type is string return an array of stringified number below number', () => {
    const number_1 = 1;
    const number_2 = 5;
    const number_3 = 23;
    const type = 'string';
    const received_1 = _.times(number_1, type);
    const received_2 = _.times(number_2, type);
    const received_3 = _.times(number_3, type);
    expect(received_1).toEqual(['0']);
    expect(received_2).toEqual(['0', '1', '2', '3', '4']);
    expect(received_3).toEqual([
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
    ]);
  });
  test('type is number return array of nums below number', () => {
    const number = 1;
    const type = 'number';
    const received = _.times(number, type);
    expect(received).toEqual([0]);
  });
  test('type is boolean return array of nums below number', () => {
    const number = 1;
    const type = 'boolean';
    const received = _.times(number, type);
    expect(received).toEqual([false]);
  });
});

describe('_.map', () => {
  const square = (n) => {
    return n * n;
  };
  test('if the input is an empty array, return an empty array', () => {
    expect(_.map([], square)).toEqual([]);
  });
  test('if input array of numbers, return square num of nums', () => {
    expect(_.map([2], square)).toEqual([4]);
    expect(_.map([2, 4, 5], square)).toEqual([4, 16, 25]);
  });
  test('if an empty obj is passed, return an empty array', () => {
    expect(_.map({}, square)).toEqual([]);
  });
  test('if an obj is passed with values, return a square number of the values', () => {
    expect(_.map({ a: 4, b: 8 }, square)).toEqual([16, 64]);
  });
  // test('if an array is passed with obj, return an array of values', () => {
  //   const input = [{ user: 'barney' }, { user: 'fred' }];
  //   const functionName = () => {
  //     const key = 'user';
  //     return key;
  //   };
  //   expect(_.map(input, functionName)).toEqual(['barney', 'fred']);
  // });
});
