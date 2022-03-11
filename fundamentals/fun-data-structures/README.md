# Data Structures

In this sprint you will be implementing 2 data structures that are commonly used in computer science: [stacks](https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm) and [queues](https://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm).

**Stacks** are named as such as they behave like real-world stacks and allow data operations at one end only. Stacks have a LIFO (Last In First Out) data structure, meaning the element which is added last is accessed first. \
You have already learned about one use of stacks: using the call stack to keep track of a pile of functions that are in the process of execution.

**Queues** differ from stacks in that they are open at both ends; one end is used to insert data and the other end is used to access/remove data. Queues have a FIFO (First In First Out) data structure, meaning that the item stored first will also be accessed first, and the item stored last will be accessed last - like a real queue!\
A queue data structure would be useful on occasions where you want to process tasks in the same order as they arrive, such as in a messaging application or a printer queue.

### **Learning objectives**

- Fully understand the functional pattern of object creation in JavaScript, together with its pros and cons. 
- Learn, throughout the sprint, about the rules of `this` in JavaScript.
- Introduce yourself to data structures.

### * Important! *

- Each data structure should be implemented within it's own dedicated file
- Each data structure **must** have it's own test file and be implemented using TDD.
- You must **not** use JavaScript arrays or any array methods or properties to implement your stack and queue structures. Everything should be implemented with _objects_ and custom methods.

## **Stacks**

1.  Implement a `createStack` factory function.\
An instance of `createStack` should have the following:

* A `quantity` property which has an initial value of 0 and represents the number of items currently in the stack storage.
```js
const testStack = createStack();
testStack.quantity  // 0
```

* A `storage` property, which is initially set to an empty object.
```js
const testStack = createStack();
testStack.storage // {}
```

* A `maxSize` property, which can either be passed as an argument when creating the stack, or when no argument is passed it uses a default value.
```js
const testStack = createStack(5);
testStack.maxSize // 5
```

* A `push` method, which adds items to the stack storage, provided the stack is not already full.
```js 
const testStack = createStack();
testStack.push('apple');
testStack.storage; // { 1 : 'apple' }
testStack.push('orange');
testStack.storage; // { 1 : 'apple', 2 : 'orange' } 
```

* A `pop` method, which can remove items from the stack storage, provided the stack is not empty.  It will also return the item removed from the stack.
```js
const testStack = createStack();
testStack.push('apple');
testStack.push('orange');
testStack.push('banana'); 
testStack.storage; // { 1 : 'apple', 2 : 'orange', 3: 'banana' }
testStack.pop(); // returns 'banana'
testStack.storage; // {1 : 'apple', 2 : 'orange' }
```

* An `isEmpty` method, which returns a boolean. Should return `true` when the stack storage is empty and the current quantity is 0.
```js
const testStack = createStack();
testStack.isEmpty() // true;
```

* An `isFull` method, which returns a boolean. Should return `true` when the storage is full, i.e. when the current quantity equals the maxSize.
```js
const testStack = createStack();
testStack.isFull() // false;
```

* A `peek` method that will show the item at the top of the stack storage.
```js
const testStack = createStack();
testStack.push('apple');
testStack.push('orange');
testStack.push('banana');
testStack.push('kiwi');
testStack.push('pear');
testStack.storage; // { 1 : 'apple', 2 : 'orange', 3: 'banana', 4: 'kiwi', 5: 'pear' }
testStack.peek() // returns 'pear'
```

## **Queues**

2.  Implement a `createQueue` factory function that returns a queue instance.\
The `createQueue` function will take a single argument representing the `maxSize`, the limit of the number of items in the queue.

```js 
const testQueue = createQueue(5);
// the new queue instance is allowed up to 5 items in the queue storage
```

An instance of `createQueue` should have the following:

* `front` and `back` properties, representing the position of the front and back of the queue respectively.  You should use these properties to add and remove items from the queue at the correct position.

* A `storage` property, which is initially an empty object `{}`.

* An `enQueue` method that adds items to the **back** of the queue.  Items can only be added if the queue isn't full.

* A `deQueue` method that removes items from the **front** of the queue, provided the queue isn't already empty.

* A `getQuantity` method that returns the number of items in the queue.

* An `isEmpty` method that will return a boolean indicating if the queue is empty or not.

* An `isFull` method that will return a boolean indicating if the queue is full or not.

* A `peek` method that returns the element at the **front** of the queue (without removing it)


## Advanced - only attempt these if you get through both stacks and queues!

For the advanced section you will have to do some research of your own for information about each data structure.

1) Implement the **set** data structure.\
[Sets](https://en.wikipedia.org/wiki/Set_(abstract_data_type)) have lots of potential methods you could implement so pick out a few that seem most useful/interesting and implement those. A good place to start would be`add`, `delete`, `has`, `union` and `intersection`.

2) Implement the **tree** data structure.\
[Trees](https://en.wikipedia.org/wiki/Tree_(data_structure)) also have a lot of methods. Focus on implementing methods that add and remove data (e.g. addData, removeData) or return a boolean, (e.g. isParent, isRoot, hasSiblings, isLeaf). Look through the article for ideas on the terminology to use.

Once you are able to create and store data implement methods to traverse your trees. Research and implement `breadthFirstSearch` and `depthFirstSearch`

3) Re-implement the Javascript **Map** data structure.\
[Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) has a series of iteration methods that make use of Javascript iterators. Research these and re-implement the methods available on JS Maps. 

**Further Reading** Research `Linked List` and `Graph` data structures and their variations.