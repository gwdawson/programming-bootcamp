function createQueue(maxQueueLen = 5) {
  const newQueue = {};
  newQueue.maxLength = maxQueueLen;
  newQueue.storage = {};
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.enQueue = enQueue;
  newQueue.deQueue = deQueue;
  newQueue.getQunatity = getQunatity;
  newQueue.isEmpty = isEmpty;
  newQueue.isFull = isFull;
  newQueue.peek = peek;
  return newQueue;
}

function enQueue(item) {
  if (this.back === this.maxLength) return;
  this.back++;
  this.storage[this.back] = item;
}

function deQueue(item) {
  if (Object.keys(this.storage).length === 0) return;
  delete this.storage[this.front + 1];
  const len = Object.keys(this.storage).length + 1;
  for (let i = 1; i < len; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.back];
  this.back--;
}

function getQunatity() {
  return this.back;
}

function isEmpty() {
  if (Object.keys(this.storage).length === 0) return true;
  return false;
}

function isFull() {
  if (this.back === this.maxLength) return true;
  return false;
}

function peek() {
  if (this.back === 0) return '';
  return this.storage[this.back];
}

module.exports = createQueue;
