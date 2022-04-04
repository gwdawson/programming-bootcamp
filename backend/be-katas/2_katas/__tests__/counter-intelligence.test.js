const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('Given one lowercase word decode the word using x as a reference', () => {
    expect(counterIntelligence('bcd y')).toBe('abc x');
  });
  it('Given two lowercase word decode the word using x as a reference', () => {
    expect(counterIntelligence('fcjjm umpjb v')).toBe('hello world x');
  });
  it('Given one uppercase word decode the word using x as a reference', () => {
    expect(counterIntelligence('BCD Y')).toBe('ABC X');
  });
  it('Given two uppercase word decode the word using x as a reference', () => {
    expect(counterIntelligence('FCJJM UMPJB V')).toBe('HELLO WORLD X');
  });
  test('Given a word with symbols return the decoded word including symbols', () => {
    expect(counterIntelligence('ictgvj :) z')).toBe('gareth :) x');
  });
});
