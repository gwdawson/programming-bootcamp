const alternateCase = require('../katas/alternate-case');
const areOrdered = require('../katas/are-ordered');
const caesarCipher = require('../katas/caesar-cipher');
const checkStudents = require('../katas/check-students');
const checkUsernames = require('../katas/check-usernames');
const { max, min } = require('../katas/max-and-min');
const mergeArrays = require('../katas/merge-arrays');
const sumArgs = require('../katas/sum-args');
const sumDigits = require('../katas/sum-digits');
const lengthenDate = require('../katas/lengthen-date');

// Test for alternateCase function
describe('alternateCase', () => {
  test('returns a capital when 1 character is passed', () => {
    expect(alternateCase('a')).toBe('A');
  });
  test('returns alternate case when length > 1', () => {
    expect(alternateCase('ab')).toBe('Ab');
    expect(alternateCase('abc')).toBe('AbC');
    expect(alternateCase('abcd')).toBe('AbCd');
    expect(alternateCase('abcde')).toBe('AbCdE');
    expect(alternateCase('abcdef')).toBe('AbCdEf');
  });
});

// Test for areOrdered function
describe('areOrdered', () => {
  test('if array is empty, return false', () => {
    expect(areOrdered([])).toBe(false);
  });
  test('if array is ordered, return true', () => {
    expect(areOrdered([1, 2, 3, 4, 5])).toBe(true);
    expect(areOrdered([45, 47, 93, 107, 200])).toBe(true);
  });
  test('if array is not ordered, return false', () => {
    expect(areOrdered([5, 2, 7, 2, 5])).toBe(false);
    expect(areOrdered([1000, 2, 347, 1, 34])).toBe(false);
  });
});

// Test for caesarCipher function
describe('caesarCipher', () => {
  test('if empty string return empty string', () => {
    expect(caesarCipher('')).toBe('');
  });
  test('if single letter return single letter + n', () => {
    expect(caesarCipher('a', 2)).toBe('c');
    expect(caesarCipher('a', 9)).toBe('j');
    expect(caesarCipher('h', 3)).toBe('k');
  });
  test('if multiple letters return cipher letters', () => {
    expect(caesarCipher('abc', 3)).toBe('def');
    expect(caesarCipher('hello abc', 2)).toBe('jgnnq cde');
    expect(caesarCipher('cd', -1)).toBe('bc');
  });
  test('if character + n longer than alphabet wrap to the start', () => {
    expect(caesarCipher('zz', 2)).toBe('bb');
    expect(caesarCipher('za', 2)).toBe('bc');
    expect(caesarCipher('z', 2)).toBe('b');
  });
  test('if character + n longer than alphabet wrap to the start', () => {
    expect(caesarCipher('aa', -2)).toBe('yy');
    expect(caesarCipher('ab', -2)).toBe('yz');
    expect(caesarCipher('a', -2)).toBe('y');
  });
});

// Test for checkStudents function
describe('checkStudents', () => {
  test('if students array is empty, return falese', () => {
    expect(checkStudents([], 'April')).toBe(false);
  });
  test('if not the same return false', () => {
    expect(
      checkStudents(
        [
          { name: 'Ben', cohort: 'October' },
          { name: 'Amanda', cohort: 'April' },
          { name: 'Matt', cohort: 'April' },
        ],
        'April'
      )
    ).toBe(false);
  });
  test('if the same return true', () => {
    expect(
      checkStudents(
        [
          { name: 'Ben', cohort: 'April' },
          { name: 'Amanda', cohort: 'April' },
          { name: 'Matt', cohort: 'April' },
        ],
        'April'
      )
    ).toBe(true);
  });
});

// Test for checkUsernames function
describe('checkUsernames', () => {
  test('if empty array is passed, return false', () => {
    expect(checkUsernames([])).toBe(false);
  });
  test('if username is less than 5 characters, return false', () => {
    expect(checkUsernames(['abcd'])).toBe(false);
  });
  test('if username is 5 characters or more, return true', () => {
    expect(checkUsernames(['abcde'])).toBe(true);
  });
  test('if username is larger than 20 characters, return false', () => {
    expect(checkUsernames(['abcdefghijklmnopqrstuvwxyz'])).toBe(false);
  });
  test('if username contains only lowecase, numbers and _, return true', () => {
    expect(checkUsernames(['abc123_'])).toBe(true);
  });
  test('if username doesnt only lowecase, numbers and _, return false', () => {
    expect(checkUsernames(['ABC123_'])).toBe(false);
  });
});

// Test for max and min functions
describe('max', () => {
  test('If array has no items, return 0', () => {
    expect(max([])).toBe(0);
  });
  test('If array has 1 item, return item', () => {
    expect(max([6])).toBe(6);
  });
  test('If array has n item, return largest item', () => {
    expect(max([6, 4, 7, 1, 8, 12, 8, -12, 98, 0, -98])).toBe(98);
  });
});
describe('min', () => {
  test('If array has no items, return 0', () => {
    expect(min([])).toBe(0);
  });
  test('If array has 1 item, return item', () => {
    expect(min([6123])).toBe(6123);
  });
  test('If array has n item, return smallest item', () => {
    expect(min([6, 4, 7, 1, 8, 12, 8, -12, 98, 0, -98])).toBe(-98);
  });
});

// Test for mergeArrays function
describe('mergeArrays', () => {
  test('2 empty arr return empty arr', () => {
    expect(mergeArrays([], [])).toEqual([]);
  });
  test('2 arrays with 1 item returns 1 arr with 2 items', () => {
    expect(mergeArrays([1], [2])).toEqual([1, 2]);
  });
  test('mutiple items in 2 arrays go in to a single array', () => {
    expect(mergeArrays([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 2, 3, 3, 4]);
  });
  test('mutiple items in 2 arrays go in to a single array in a alternating order', () => {
    expect(mergeArrays([1, 2, 3], ['a', 'b', 'c'])).toEqual([1, 'a', 2, 'b', 3, 'c']);
  });
});

// Test for sumArgs function
describe('sumArgs', () => {
  test('if no arguments are passed, return 0', () => {
    expect(sumArgs()).toBe(0);
  });
  test('if given 1 argument, return argument', () => {
    expect(sumArgs(56)).toBe(56);
  });
  test('if given 3 arguments, return sum of args', () => {
    expect(sumArgs(10, 10, 10)).toBe(30);
  });
  test('if given 15 arguments, return sum of args', () => {
    expect(sumArgs(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toBe(15);
  });
});

// Test for sumDigits function
describe('sumDigits', () => {
  test('if 1 digit return digit', () => {
    expect(sumDigits(1)).toBe(1);
  });
  test('if 19 digit return 10', () => {
    expect(sumDigits(19)).toBe(10);
  });
  test('if 290 digit return 11', () => {
    expect(sumDigits(290)).toBe(11);
  });
  test('if 29.5 digit return 16', () => {
    expect(sumDigits(29.5)).toBe(16);
  });
});

// Test for lengthenDate
describe('lengthenDate', () => {
  test('empty string returns Not a Valid date', () => {
    expect(lengthenDate('')).toBe('Not a Valid date');
  });
  test('invalid date returns Not a Valid date', () => {
    expect(lengthenDate('52.12.2021')).toBe('Not a Valid date');
  });
  test('valid date returns formatted date', () => {
    expect(lengthenDate('21.03.2017')).toBe('Tuesday 21th March 2017');
  });
});
