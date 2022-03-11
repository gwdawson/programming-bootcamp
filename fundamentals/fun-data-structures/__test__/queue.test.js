const createQueue = require('../data-structures/queue');

describe('createQueue()', () => {
  test('newQueue.maxLength should equal 5', () => {
    const newQueue = createQueue(8);
    expect(newQueue.maxLength).toBe(8);
  });
  test('newQueue.storage should be equal {}', () => {
    const newQueue = createQueue();
    expect(newQueue.storage).toEqual({});
  });
  test('newQueue.front should equal 0', () => {
    const newQueue = createQueue();
    expect(newQueue.front).toBe(0);
  });
  test('newQueue.back should equal 0', () => {
    const newQueue = createQueue();
    expect(newQueue.back).toBe(0);
  });
});

describe('createQueue().enQueue(item)', () => {
  test('adds a single item to queue', () => {
    const newQueue = createQueue();
    newQueue.enQueue('TWICE');
    expect(newQueue.storage).toEqual({ 1: 'TWICE' });
  });
  test('updates this.back when item is added to queue', () => {
    const newQueue = createQueue();
    newQueue.enQueue('TWICE');
    expect(newQueue.back).toBe(1);
  });
  test('adds multiple items to queue', () => {
    const newQueue = createQueue();
    newQueue.enQueue('ITZY');
    newQueue.enQueue('IVE');
    expect(newQueue.storage).toEqual({ 1: 'ITZY', 2: 'IVE' });
  });
  test('updates this.back when multiple items are added to queue', () => {
    const newQueue = createQueue();
    newQueue.enQueue('ITZY');
    newQueue.enQueue('IVE');
    expect(newQueue.back).toBe(2);
  });
  test('ignores item if queue exceeds maxLength', () => {
    const newQueue = createQueue(4);
    newQueue.enQueue('BLACKPINK');
    newQueue.enQueue('ITZY');
    newQueue.enQueue('EVERGLOW');
    newQueue.enQueue('IZ*ONE');
    newQueue.enQueue('STRAY KIDS');
    expect(newQueue.storage).toEqual({ 1: 'BLACKPINK', 2: 'ITZY', 3: 'EVERGLOW', 4: 'IZ*ONE' });
    expect(newQueue.back).toBe(4);
  });
});

describe('createQueue().deQueue()', () => {
  test('removes first item from the queue', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('BLACKPINK');
    newQueue.enQueue('ITZY');
    newQueue.enQueue('EVERGLOW');
    newQueue.enQueue('IZ*ONE');
    newQueue.deQueue();
    expect(newQueue.storage).toEqual({ 1: 'ITZY', 2: 'EVERGLOW', 3: 'IZ*ONE' });
  });
  test('updates this.back to represent the new storage', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('BLACKPINK');
    newQueue.enQueue('ITZY');
    newQueue.deQueue();
    expect(newQueue.storage).toEqual({ 1: 'ITZY' });
    expect(newQueue.back).toBe(1);
  });
  test('ignores if the storage is already empty', () => {
    const newQueue = createQueue(5);
    newQueue.deQueue();
    expect(newQueue.storage).toEqual({});
    expect(newQueue.back).toBe(0);
  });
});

describe('createQueue().getQuantity()', () => {
  test('returns the quantity of empty storage', () => {
    const newQueue = createQueue(5);
    expect(newQueue.getQunatity()).toBe(0);
  });

  test('returns the quantity of used storage', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('BLACKPINK');
    newQueue.enQueue('ITZY');
    newQueue.enQueue('EVERGLOW');
    expect(newQueue.getQunatity()).toBe(3);
  });
  test('returns qunatity after using deQueue', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('BLACKPINK');
    newQueue.enQueue('ITZY');
    newQueue.enQueue('EVERGLOW');
    newQueue.enQueue('IZ*ONE');
    newQueue.deQueue();
    expect(newQueue.getQunatity()).toBe(3);
  });
});

describe('createQueue().isEmpty', () => {
  test('returns true if storage is empty', () => {
    const newQueue = createQueue(5);
    expect(newQueue.isEmpty()).toBe(true);
  });
  test('returns false if storage is not empty', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('BTS');
    expect(newQueue.isEmpty()).toBe(false);
  });
});

describe('createQueue().isFull', () => {
  test('returns true if storage is full', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('ATEEZ');
    newQueue.enQueue('NCT 127');
    newQueue.enQueue('ONEUS');
    newQueue.enQueue('iKON');
    newQueue.enQueue('STRAY KIDS');
    expect(newQueue.isFull()).toBe(true);
  });
  test('returns false if storage is not full', () => {
    const newQueue = createQueue(5);
    expect(newQueue.isFull()).toBe(false);
  });
});

describe('createQueue().peek()', () => {
  test('returns the last item in storage', () => {
    const newQueue = createQueue(5);
    newQueue.enQueue('ENHYPEN');
    expect(newQueue.peek()).toEqual('ENHYPEN');
  });
  test('returns empty string of storage is empty', () => {
    const newQueue = createQueue(5);
    expect(newQueue.peek()).toEqual('');
  });
});
