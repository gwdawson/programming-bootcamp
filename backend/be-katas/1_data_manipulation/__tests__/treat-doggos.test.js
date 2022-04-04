const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  const dogs = [
    { name: 'Bailey', age: 6, hasRabies: true },
    { name: 'Quincy', age: 6, hasRabies: true },
    { name: 'Otis', age: 3, hasRabies: false }
  ];
  it('given an array of dog objects, return a new object with all dogs treated', () => {
    expect(treatDoggos(dogs)).toEqual([
      { name: 'Bailey', age: 6, hasRabies: false },
      { name: 'Quincy', age: 6, hasRabies: false },
      { name: 'Otis', age: 3, hasRabies: false }
    ]);
  });
  test('should not mutate the dogs array', () => {
    expect(treatDoggos(dogs)).not.toBe(dogs);
  });
});
