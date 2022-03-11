function createStack(maxStackSize = 5) {
  const newStack = {};
  newStack.maxSize = maxStackSize;
  newStack.storage = {};
  newStack.quantity = 0;
  newStack.push = pushToStack;
  newStack.pop = removeFromStack;
  newStack.isEmpty = stackIsEmpty;
  newStack.isFull = stackIsFull;
  newStack.peek = peekInStortage;
  return newStack;
}

function pushToStack(item) {
  if (this.quantity === this.maxSize) return;
  this.storage[this.quantity + 1] = item;
  this.quantity += 1;
}

function removeFromStack() {
  const popped = this.storage[this.quantity];
  delete this.storage[this.quantity];
  this.quantity -= 1;
  return popped;
}

function stackIsEmpty() {
  return this.quantity === 0;
}

function stackIsFull() {
  return this.quantity === this.maxSize;
}

function peekInStortage() {
  return this.storage[this.quantity];
}

module.exports = createStack;
