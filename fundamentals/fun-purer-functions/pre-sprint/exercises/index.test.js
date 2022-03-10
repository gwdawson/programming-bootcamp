const {
  getLastItem,
  removeItem,
  switchKey,
  joinArrays,
  addItem,
  removeAges,
} = require('./index.js');

describe('impure functions', () => {
  describe('getLastItem()', () => {
    test('gets last item from an array', () => {
      expect(getLastItem(['a', 'b', 'c'])).toBe('c');
      expect(getLastItem([1, 2, 3])).toBe(3);
    });
    test('input is not mutated', () => {
      const input = ['a', 'b', 'c'];
      getLastItem(input);
      expect(input).toEqual(['a', 'b', 'c']);
    });
  });

  describe('removeItem()', () => {
    test('removes item at specified index', () => {
      expect(removeItem(['a', 'b', 'c'], 1)).toEqual(['a', 'c']);
      expect(removeItem(['a', 'b', 'c'], 2)).toEqual(['a', 'b']);
      expect(removeItem(['a', 'b', 'c', 'd'], 2)).toEqual(['a', 'b', 'd']);
      expect(removeItem(['a', 'b', 'c', 'd'], 0)).toEqual(['b', 'c', 'd']);
    });
    test('input is not mutated', () => {
      const input = ['a', 'b', 'c'];
      removeItem(input, 1);
      expect(input).toEqual(['a', 'b', 'c']);
    });
  });

  describe('switchKey()', () => {
    test('keys in object are switched around', () => {
      expect(switchKey({ name: 'Anat' }, 'name', 'nom')).toEqual({
        nom: 'Anat',
      });
      expect(switchKey({ book: 'To Kill a Mockingbird' }, 'book', 'livre')).toEqual({
        livre: 'To Kill a Mockingbird',
      });
    });
    test('input is not mutated', () => {
      const input = { name: 'Anat' };
      switchKey(input, 'name', 'nom');
      expect(input).toEqual({ name: 'Anat' });
    });
    test('unrelated keys are also copied to new object', () => {
      expect(switchKey({ move: 'kickflip', rating: 'radical' }, 'move', 'trick')).toEqual({
        trick: 'kickflip',
        rating: 'radical',
      });
    });
  });

  describe('joinArrays()', () => {
    test('will join 2 arrays together', () => {
      expect(joinArrays(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    });
    test('will return an identical array to array 1 when no 2nd array passed', () => {
      expect(joinArrays(['a', 'b'])).toEqual(['a', 'b']);
    });
    test('will return a new array', () => {
      const input = ['a', 'b']; /* 0x2ABC*/
      expect(joinArrays(input)).not.toBe(input);
    });
    test('inputs are not mutated', () => {
      const input1 = ['a', 'b'];
      const input2 = ['c', 'd'];
      joinArrays(input1, input2);
      expect(input1).toEqual(['a', 'b']);
      expect(input2).toEqual(['c', 'd']);
    });
  });

  describe('addItem()', () => {
    test('will add an item on to the end of an array', () => {
      expect(addItem(['a', 'b', 'c'], 'd')).toEqual(['a', 'b', 'c', 'd']);
    });
    test('will return a new array', () => {
      const input = [];
      expect(addItem(input)).not.toBe(input);
    });
  });

  describe('removeAges()', () => {
    test('will work for a single person object', () => {
      const people = [{ name: 'Fraz', age: 30 }];
      expect(removeAges(people)).toEqual([{ name: 'Fraz' }]);
    });
    test('will work for a multiple persons objects', () => {
      const people = [
        { name: 'Fraz', age: 30 },
        { name: 'Em', age: 30 },
      ];
      expect(removeAges(people)).toEqual([{ name: 'Fraz' }, { name: 'Em' }]);
    });
    test('input is not mutated', () => {
      const people = [
        { name: 'Fraz', age: 30 },
        { name: 'Em', age: 30 },
      ];
      removeAges(people);
      expect(people).toEqual([
        { name: 'Fraz', age: 30 },
        { name: 'Em', age: 30 },
      ]);
    });
    test('returns a new array', () => {
      const input1 = [
        { name: 'Fraz', age: 30 },
        { name: 'Em', age: 30 },
      ];
      expect(removeAges(input1)).not.toBe(input1);
      const input2 = [];
      expect(removeAges(input2)).not.toBe(input2);
    });
  });
});
