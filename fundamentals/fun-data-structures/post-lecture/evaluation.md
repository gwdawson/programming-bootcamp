# Object Oriented Programming

## Post lecture evaluation

---

&nbsp;

### Task 1

Consider the following snippet below:

```js
const spaceShip = {
  name: 'USS Enterprise',
  captain: 'Jean Luc-Picard',
  class: 'NCC-1701-D'
}

function createSpaceShip() {
  return spaceShip;
}

const ship1 = createSpaceShip();
const ship2 = createSpaceShip();
console.log(ship1 === ship2);
```

Consider the excerpt of code above and then answer the following questions:

a) What is the **return value** of `createSpaceShip` ( think carefully about this one ) </br>
b) What will line 26 print when `ship1` is compared with `ship2` using `===`</br>
c) How could we change `createSpaceShip` so we have a reusable function that generates brand new space ship instances

---

&nbsp;

### Task 2

Consider the following snippet below:

```js
function createDataSet(...values) {
  const newDataSet = {
    values: values,
  };
  newDataSet.calculateMean = function () {
    const total = values.reduce((total, item) => total + item, 0);
    // calculate sum of all the values in the list
    return total / values.length;
    // divide the total by sum of all the items in the list
  };

  return newDataSet;
}

const dataSet1 = createDataSet(1, 2, 3);
console.log(dataSet1.calculateMean());

const dataSet2 = createDataSet(1, 2, 3, 4, 5);

console.log(dataSet1.calculateMean === dataSet2.calculateMean);
```

Consider the excerpt of code above and then answer the following questions:

a) What is the **return value** of `createDataSet`</br>
b) What does the `...values` mean where the function `createDataSet` is declared</br>
c) What is the **return value** of `calculateMean`</br>
d) What does `dataSet1.calculateMean()` evaluate to ( try reasoning about this without running the code first ) ?</br>
e) What will `dataSet1.calculateMean === dataSet2.calculateMean` evaluate to ?

- why does it evaluate to this value ?
- why is this problematic ?

---

&nbsp;

### Task 3

Consider the following snippet below:

```js
function speak() {
  console.log(`My name is ${this.name} and I am ${this.age} years old! Woof woof!`);
}

function stateBreed() {
  console.log(`I am a ${breed}`);
}

function createDog(name, age, breed) {
  return { name, age, breed, stateBreed, speak };
}

const dog1 = createDog('fido', 10, 'labrador');

dog1.speak();
```

a) What is the syntax `{name , age, breed, stateBreed, speak }` shorthand for ?</br>
b) What does `this` point to when `speak` is invoked on the line with `dog1.speak();`

---

&nbsp;

### Task 4

Consider the following snippet below:

```js
describe('createPerson()', () => {
  test('SOME_BEHAVIOUR_DESCRIPTION', () => {
    const testPerson = createPerson('Paul', 30);

    expect(testPerson.name).toBe('Paul');
    expect(testPerson.age).toBe(30);
  });
});
```

What kind of function is `createPerson` ?
