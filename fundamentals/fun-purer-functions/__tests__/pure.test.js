const { removePersonWithID, raiseSalaries } = require('../pure');

// TODO => Fix mutation tests!

describe('removePersonWithID', () => {
  const tutors = [
    { id: 1, name: 'foluso' },
    { id: 2, name: 'suneet' },
    { id: 3, name: 'paul r' },
    { id: 4, name: 'liam' },
    { id: 5, name: 'anat' },
    { id: 6, name: 'sam' },
    { id: 7, name: 'tom' },
    { id: 8, name: 'alex' },
  ];
  test('return empty array given empty array', () => {
    expect(removePersonWithID([], 0)).toEqual([]);
  });
  test('given an array of people remove user with id', () => {
    expect(removePersonWithID(tutors, 3)).toEqual([
      { id: 1, name: 'foluso' },
      { id: 2, name: 'suneet' },
      { id: 4, name: 'liam' },
      { id: 5, name: 'anat' },
      { id: 6, name: 'sam' },
      { id: 7, name: 'tom' },
      { id: 8, name: 'alex' },
    ]);
  });
});

describe('raiseSalaries', () => {
  const name = [
    { name: 'Alice', salary: 3000 },
    { name: 'Bob', salary: 2000 },
    { name: 'Vel', salary: 4500 },
  ];
  test('return an empty array given an empty array', () => {
    expect(raiseSalaries([], 0)).toEqual([]);
  });
  test('given an array of people update salary by %', () => {
    expect(raiseSalaries(name, 10)).toEqual([
      { name: 'Alice', salary: 3300 },
      { name: 'Bob', salary: 2200 },
      { name: 'Vel', salary: 4950 },
    ]);
  });
});
