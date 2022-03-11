const createStack = require('../data-structures/stack');

const newStack = createStack();
console.log(newStack);

describe('newStack', () => {
  describe('createStack()', () => {
    test('returns default values for all keys', () => {
      expect(typeof newStack).toBe('object');
      expect(newStack.quantity).toBe(0);
      expect(newStack.storage).toEqual({});
      expect(newStack.maxSize).toBe(5);
    });
  });

  describe('createStack(8)', () => {
    test('returns maxSixe value equal to parameter', () => {
      const newStack = createStack(8);
      expect(newStack.maxSize).toBe(8);
    });
  });

  describe('createStack().push(item)', () => {
    test('adds item to storage', () => {
      const newStack = createStack();
      newStack.push('TWICE');
      expect(newStack.storage).toEqual({ 1: 'TWICE' });
    });
    test('ignores item if quantity exceeds maxSize', () => {
      const newStack = createStack();
      newStack.push('TWICE');
      newStack.push('BLACKPINK');
      newStack.push('MOMOLAND');
      newStack.push('IVE');
      newStack.push('WEEEKLY');
      newStack.push('OH MY GIRL');
      newStack.push('IU');
      expect(newStack.storage).toEqual({
        1: 'TWICE',
        2: 'BLACKPINK',
        3: 'MOMOLAND',
        4: 'IVE',
        5: 'WEEEKLY',
      });
    });
  });

  describe('createStack().pop()', () => {
    test('removes last item from storage', () => {
      const newStack = createStack();
      newStack.push('AESPA');
      newStack.push('JEON SOMI');
      newStack.push('BTS');
      newStack.pop();
      expect(newStack.storage).toEqual({ 1: 'AESPA', 2: 'JEON SOMI' });
    });
    test('returns the item removed from sorage', () => {
      const newStack = createStack();
      newStack.push('AESPA');
      newStack.push('JEON SOMI');
      newStack.push('BTS');
      const popped = newStack.pop();
      expect(popped).toBe('BTS');
    });
  });

  describe('createStack().isEmpty()', () => {
    test('returns true if sotrage is empty', () => {
      const newStack = createStack();
      console.log(newStack);
      expect(newStack.isEmpty()).toBe(true);
    });
    test('returns false if sotrage is not empty', () => {
      const newStack = createStack();
      newStack.push('ITZY');
      newStack.push('IZ*ONE');
      expect(newStack.isEmpty()).toBe(false);
    });
  });

  describe('createStack().isFull()', () => {
    test('returns true if sotrage is full', () => {
      const newStack = createStack();
      newStack.push('ITZY');
      newStack.push('ROSY');
      newStack.push('MAMAMOO');
      newStack.push('GFRIEND');
      newStack.push('NATTY');
      expect(newStack.isFull()).toBe(true);
    });
    test('returns true if sotrage is not full', () => {
      const newStack = createStack();
      expect(newStack.isFull()).toBe(false);
    });
  });

  describe('createStack().peek()', () => {
    test('returns the most recent item added to storage', () => {
      const newStack = createStack();
      newStack.push('DJ ELLIA');
      expect(newStack.peek()).toBe('DJ ELLIA');
    });
  });
});
