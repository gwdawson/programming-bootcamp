const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  const original = { name: 'Bailey', age: 7 };
  const modified = ageDog(original, 1);
  it('the dogs age should increment by n', () => {
    expect(modified).toEqual({
      name: 'Bailey',
      age: 8
    });
  });
  it('the dog object should not be mutated', () => {
    expect(modified).not.toEqual(original);
  });
});
