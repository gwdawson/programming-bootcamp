const { findClosingParenthesis } = require('../find-closing-parenthesis');

describe('findClosingParenthesis()', () => {
  it('given a string with one ")" return the index', () => {
    expect(findClosingParenthesis('hell)0')).toBe(4);
  });
  it('given a string with (n) ")" return the index of the n\'th given', () => {
    expect(findClosingParenthesis('hell)0)))))', 3)).toBe(8);
  });
});
