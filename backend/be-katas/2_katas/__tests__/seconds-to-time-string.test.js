const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('s', () => {
    expect(secondsToTimeString(1)).toBe('1 seconds');
  });
  it('m', () => {
    expect(secondsToTimeString(60)).toBe('1 minutes');
  });
  it('h', () => {
    expect(secondsToTimeString(3600)).toBe('1 hours');
  });
  it('d', () => {
    expect(secondsToTimeString(86400)).toBe('1 days');
  });
  it('w', () => {
    expect(secondsToTimeString(604800)).toBe('1 weeks');
  });
  it('m', () => {
    expect(secondsToTimeString(2629746)).toBe('1 months');
  });
});
