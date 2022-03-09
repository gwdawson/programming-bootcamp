const { expect } = require('chai');
const {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getEvenNumbers,
  getItemsLongerThan,
  getSandwichFilling,
  getLastItems,
  removeItem,
  mergeArrays,
  flattenArrayByOne,
  isItemOmnipresent,
  isOver40,
  getUserAge,
  getUserPetAge,
  createProduct,
  addPriceToProduct,
  getPropertyOfProduct,
  addPropertyToProduct,
  createNorthcoder,
  updateVoterAddress,
  createUserString,
  getNorthcodersNames,
  getAlbumProperties,
  deleteManyPasswords,
  countTheObjects,
} = require('../challenges');

describe('types', () => {
  describe('Basic Maths', () => {
    it('mod returns the remainder of dividing a by b', () => {
      expect(modulo(4, 2)).to.equal(0);
      expect(modulo(7, 2)).to.equal(1);
    });

    it('squareRoot returns the square root of n', () => {
      expect(squareRoot(4)).to.equal(2);
      expect(squareRoot(16)).to.equal(4);
    });

    it('raiseToPower returns m to the nth power§', () => {
      expect(raiseToPower(2, 3)).to.equal(8);
      expect(raiseToPower(3, 4)).to.equal(81);
      expect(raiseToPower(8, 0)).to.equal(1);
    });
  });

  describe('formatMoney', () => {
    it('adds zeroes up to 2 decimal numbers', () => {
      expect(formatMoney(1)).to.equal('£1.00');
    });
    it('rounds to 2 decimal numbers', () => {
      expect(formatMoney(3.457)).to.equal('£3.46');
    });
  });

  describe('calculateCircleArea', () => {
    it('returns the area of a circle', () => {
      expect(calculateCircleArea(1)).to.equal(3.142);
      expect(calculateCircleArea(2)).to.equal(12.566);
      expect(calculateCircleArea(3)).to.equal(28.274);
    });
  });

  describe('calculateFullTurns', () => {
    it('returns the amount of full turns you can make with the passed degrees', () => {
      expect(calculateFullTurns(90)).to.equal(0);
      expect(calculateFullTurns(363)).to.equal(1);
      expect(calculateFullTurns(800)).to.equal(2);
      expect(calculateFullTurns(2000)).to.equal(5);
    });
  });

  describe('getLength', () => {
    it('returns the length of the passed string', () => {
      expect(getLength('')).to.equal(0);
      expect(getLength('hello')).to.equal(5);
      expect(getLength('hello northcoders')).to.equal(17);
    });
  });

  describe('putNamesTogether', () => {
    it('returns the passed names separated by a space', () => {
      expect(putNamesTogether('Kevin', 'Durant')).to.equal('Kevin Durant');
      expect(putNamesTogether('Stephen', 'Curry')).to.equal('Stephen Curry');
    });
  });

  describe('capitaliseString', () => {
    it('returns the passed string with the first letter capitalised', () => {
      expect(capitaliseString('hello')).to.equal('Hello');
      expect(capitaliseString('hello northcoders')).to.equal('Hello northcoders');
    });
  });

  describe('dontShoutSentence', () => {
    it('returns the passed sentence in lower case, keeping the first char capitalised', () => {
      expect(dontShoutSentence('HELLO NORTHCODERS!!!')).to.equal('Hello northcoders!!!');
    });
  });

  describe('getMiddle', () => {
    it('returns the middle character of an odd length string', () => {
      expect(getMiddle('abc')).to.equal('b');
    });
    it('returns the middle character of an odd length string', () => {
      expect(getMiddle('abcde')).to.equal('c');
    });
    it('returns the middle two chracters of an even length string', () => {
      expect(getMiddle('aabbcc')).to.equal('bb');
    });
  });

  describe('getLastWord', () => {
    it('returns the last word of the passed sentence', () => {
      expect(getLastWord('hello')).to.equal('hello');
      expect(getLastWord('hello northcoders')).to.equal('northcoders');
      expect(getLastWord('hello northcoders, what is going on')).to.equal('on');
    });
  });

  describe('hyphenateWords', () => {
    it('returns the passed string with spaces replaced by hyphens', () => {
      expect(hyphenateWords('hello')).to.equal('hello');
      expect(hyphenateWords('hello northcoders')).to.equal('hello-northcoders');
      expect(hyphenateWords('what is going on')).to.equal('what-is-going-on');
    });
  });

  describe('convertToCamelCase', () => {
    it('returns the passed string convertedToCamelCase', () => {
      expect(convertToCamelCase('hello')).to.equal('hello');
      expect(convertToCamelCase('hello northcoders')).to.equal('helloNorthcoders');
      expect(convertToCamelCase('what is going on')).to.equal('whatIsGoingOn');
    });
    it('The very first letter should always be lower case', () => {
      expect(convertToCamelCase('Hello')).to.equal('hello');
      expect(convertToCamelCase('I start lower cased')).to.equal('iStartLowerCased');
    });
  });

  describe('areValuesEqual', () => {
    it('returns true if passed values are equal', () => {
      expect(areValuesEqual(1, 1)).to.equal(true);
      expect(areValuesEqual('hello', 'hello')).to.equal(true);
      expect(areValuesEqual(true, true)).to.equal(true);
      const arr = [];
      expect(areValuesEqual(arr, arr)).to.equal(true);
    });
    it('returns false if passed values that are not equal', () => {
      expect(areValuesEqual(2, 1)).to.equal(false);
      expect(areValuesEqual('hello', false)).to.equal(false);
      expect(areValuesEqual(true, 'apple')).to.equal(false);
      expect(areValuesEqual([], [])).to.equal(false);
    });
  });

  describe('areValuesNotEqual', () => {
    it('returns true if passed values that are not equal', () => {
      expect(areValuesNotEqual(2, 1)).to.equal(true);
      expect(areValuesNotEqual('hello', false)).to.equal(true);
      expect(areValuesNotEqual(true, 'apple')).to.equal(true);
      expect(areValuesNotEqual([], [])).to.equal(true);
    });
    it('returns false if passed values are equal', () => {
      expect(areValuesNotEqual(1, 1)).to.equal(false);
      expect(areValuesNotEqual('hello', 'hello')).to.equal(false);
      expect(areValuesNotEqual(true, true)).to.equal(false);
      const arr = [];
      expect(areValuesNotEqual(arr, arr)).to.equal(false);
    });
  });

  describe('isFromThe60s', () => {
    it('returns true if the passed value is between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1960)).to.equal(true);
      expect(isFromThe60s(1965)).to.equal(true);
      expect(isFromThe60s(1969)).to.equal(true);
    });
    it('returns false if the passed value is not between 1960 and 1969 (inclusive)', () => {
      expect(isFromThe60s(1959)).to.equal(false);
      expect(isFromThe60s(1860)).to.equal(false);
      expect(isFromThe60s(1970)).to.equal(false);
    });
  });

  describe('isEvenLength', () => {
    it('returns true if the passed string has an even-numbered length', () => {
      expect(isEvenLength('aabb')).to.equal(true);
      expect(isEvenLength('aabbcc')).to.equal(true);
      expect(isEvenLength('')).to.equal(true);
    });
    it('returns false if the passed string has an odd-numbered length', () => {
      expect(isEvenLength('aabbc')).to.equal(false);
      expect(isEvenLength('aabbccd')).to.equal(false);
      expect(isEvenLength('d')).to.equal(false);
    });
  });

  describe('areStringsEqualCaseInsensitive', () => {
    it('returns true if the passed strings are equal (case insensitive)', () => {
      expect(areStringsEqualCaseInsensitive('hello', 'hello')).to.equal(true);
      expect(areStringsEqualCaseInsensitive('hello', 'HELLO')).to.equal(true);
      expect(areStringsEqualCaseInsensitive('bAnAnA', 'BANana')).to.equal(true);
    });
    it('returns false if the passed strings are not equal (case insensitive)', () => {
      expect(areStringsEqualCaseInsensitive('hello', 'hellA')).to.equal(false);
      expect(areStringsEqualCaseInsensitive('apple', 'BANANA')).to.equal(false);
    });
  });

  describe('getEvenNumbers', () => {
    it('returns an array of all even numbers in the passed array', () => {
      expect(getEvenNumbers([1, 2, 3])).to.eql([2]);
      expect(getEvenNumbers([2, 4, 6])).to.eql([2, 4, 6]);
      expect(getEvenNumbers([1, 3, 5])).to.eql([]);
    });
  });

  describe('getItemsLongerThan', () => {
    it('returns an array of items in the passed array that are longer than the passed length', () => {
      const array = ['ccc', 'a', 'dddd', 'bb'];
      expect(getItemsLongerThan(array, 0)).to.eql(array);
      expect(getItemsLongerThan(array, 1)).to.eql(['ccc', 'dddd', 'bb']);
      expect(getItemsLongerThan(array, 2)).to.eql(['ccc', 'dddd']);
      expect(getItemsLongerThan(array, 10)).to.eql([]);
    });
  });

  describe('getLastItems', () => {
    it('returns an array with the n last items of the passed array', () => {
      const array = ['a', 2, true, 4, null];
      expect(getLastItems(array, 1)).to.eql([null]);
      expect(getLastItems(array, 3)).to.eql([true, 4, null]);
      expect(getLastItems(array, 5)).to.eql(array);
    });
  });

  describe('getSandwichFilling', () => {
    it('returns an array with all the items of the passed array except the first and last ones', () => {
      const array = [1, 2, 3];
      expect(getSandwichFilling(array)).to.eql([2]);
      const burger = ['bread', 'tomato', 'lettuce', 'cheese', 'patty', 'bread'];
      expect(getSandwichFilling(burger)).to.eql(['tomato', 'lettuce', 'cheese', 'patty']);
      const sadSandwich = ['bread', 'bread'];
      expect(getSandwichFilling(sadSandwich)).to.eql([]);
    });
  });

  describe('removeItem', () => {
    it('returns a new array without the item in the passed position', () => {
      expect(removeItem([1], 0)).to.eql([]);
      expect(removeItem([1, 2, 3], 1)).to.eql([1, 3]);
      expect(removeItem([1, 7, 0, 4], 2)).to.eql([1, 7, 4]);
      expect(removeItem([1, 2, 1], 2)).to.eql([1, 2]);
    });
    it("doesn't mutate the passed array, i.e. it returns a new array, leaving the original one unmodified", () => {
      const original = [1, 2, 3];
      const modified = removeItem(original, 1);
      expect(original).to.not.equal(modified);
      expect(original).to.eql([1, 2, 3]);
    });
    it('ignores arguments out of the length of the array', () => {
      expect(removeItem([1, 2, 3], 8)).to.eql([1, 2, 3]);
    });
  });

  describe('mergeArrays', () => {
    it('returns a new array with all the elements of the two passed arrays', () => {
      let a, b;
      (a = [1, 2, 3]), (b = [4, 5, 6]);
      expect(mergeArrays(a, b)).to.eql([1, 2, 3, 4, 5, 6]);
      (a = []), (b = [4, 5, 6]);
      expect(mergeArrays(a, b)).to.eql([4, 5, 6]);
      (a = [1, 2, 3]), (b = []);
      expect(mergeArrays(a, b)).to.eql([1, 2, 3]);
    });
    it('does not mutate the passed arrays, i.e. returns a new array, leaving the original arrays untouched', () => {
      const a = [1, 2, 3],
        b = [4, 5, 6];
      const merged = mergeArrays(a, b);
      expect(merged).to.not.equal(a);
      expect(merged).to.not.equal(b);
      expect(a).to.eql([1, 2, 3]);
      expect(b).to.eql([4, 5, 6]);
    });
  });

  describe('flattenArrayByOne', () => {
    it('returns a flat array with all the elements of the nested arrays in their original order', () => {
      let arrayOfArrays, expected;
      arrayOfArrays = [[1, 2], [], [3], ['hello', true]];
      expected = [1, 2, 3, 'hello', true];
      expect(flattenArrayByOne(arrayOfArrays)).to.eql(expected);

      arrayOfArrays = [[1], [2], [[3, 4]]];
      expected = [1, 2, [3, 4]];
      expect(flattenArrayByOne(arrayOfArrays)).to.eql(expected);
    });
    it('does not mutate the passed array, i.e. returns a new array, leaving the original untouched', () => {
      const original = [[1, 2], [], [3, 4]];
      const flat = flattenArrayByOne(original);
      expect(original).to.not.equal(flat);
      expect(original).to.eql([[1, 2], [], [3, 4]]);
    });
  });

  describe('isItemOmnipresent', () => {
    it('returns true if the passed value is present in all the arrays inside the passed array', () => {
      const arrayOfArrays = [
        [9, 2, 3],
        [4, 5, 9],
        [-2, 9, -1],
        [1, 2, 3, 4, 5, 9],
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.true;
    });
    it('returns false if the passed value is not present in at least one array inside the passed array', () => {
      let arrayOfArrays = [
        [9, 2, 3],
        [4, 5, 9],
        [-2, 1, -1],
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
      arrayOfArrays = [
        [6, 2, 3],
        [4, 5, 8],
        [-2, 9, -1],
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
      arrayOfArrays = [
        [4, 2, 3],
        [4, 5, 9],
        [-2, 9, 9],
      ];
      expect(isItemOmnipresent(arrayOfArrays, 9)).to.be.false;
    });
  });

  describe('isOver40', function () {
    it('returns true if the user is over 40', function () {
      expect(isOver40({ age: 55 })).to.be.true;
      expect(isOver40({ age: 41 })).to.be.true;
      expect(isOver40({ age: 107 })).to.be.true;
      expect(isOver40({ age: 999 })).to.be.true;
    });
    it('returns false if the user is 40 or younger', function () {
      expect(isOver40({ age: 40 })).to.be.false;
      expect(isOver40({ age: 4 })).to.be.false;
      expect(isOver40({ age: 10 })).to.be.false;
      expect(isOver40({ age: 29 })).to.be.false;
    });
    it('ignores other properties', () => {
      expect(isOver40({ age: 4, favouriteNumber: 60 })).to.be.false;
    });
  });

  describe('getUserAge', () => {
    it('returns the age of the passed user based on its yearOfBirth property', () => {
      const currentYear = new Date().getFullYear();
      const user = {
        yearOfBirth: 1989,
      };
      expect(getUserAge(user)).to.equal(currentYear - 1989);
    });
  });

  describe('getUserPetAge', () => {
    it("returns the age of the user's pet", () => {
      const tom = {
        name: 'Tom',
        age: 26,
        pet: { name: 'Barney', age: 6, type: 'good boy' },
      };
      const paul = {
        name: 'Paul',
        age: 29,
        pet: { name: 'Dave', age: 13, type: 'cat' },
      };
      expect(getUserPetAge(tom)).to.equal(6);
      expect(getUserPetAge(paul)).to.equal(13);
    });
  });

  describe('createProduct', function () {
    it('should create the expected product', function () {
      expect(createProduct()).to.haveOwnProperty('type');
      expect(createProduct()).to.haveOwnProperty('price');
      expect(createProduct().price).to.be.a('number');
      expect(createProduct().type).to.be.a('string');
    });
  });

  describe('addPriceToProduct', () => {
    it('adds a price property to the passed product set to the passed price', () => {
      const product = {
        type: 'Tofu slices',
      };
      let newProduct = addPriceToProduct(product, 1.25);
      expect(newProduct).to.eql({ type: 'Tofu slices', price: 1.25 });
      expect(product.price).to.equal(1.25);
      delete product.price;
      expect(product).to.eql({ type: 'Tofu slices' });
      newProduct = addPriceToProduct(product, 1.35);
      expect(newProduct).to.eql({ type: 'Tofu slices', price: 1.35 });
      expect(product.price).to.equal(1.35);
    });
  });

  describe('getPropertyOfProduct', () => {
    it('returns the value associated with the property on the product', () => {
      const satsumas = {
        type: 'Easy-peeler satsumas',
        price: '£1.09',
        quantity: 8,
      };
      expect(getPropertyOfProduct(satsumas, 'price')).to.equal('£1.09');
      expect(getPropertyOfProduct(satsumas, 'quantity')).to.equal(8);
      expect(getPropertyOfProduct(satsumas, 'type')).to.equal('Easy-peeler satsumas');
    });
    it('returns the value associated with the property on the product', () => {
      const springGreens = {
        type: 'Crisp spring greens',
        price: '£0.79',
        quantity: 1,
      };
      expect(getPropertyOfProduct(springGreens, 'price')).to.equal('£0.79');
      expect(getPropertyOfProduct(springGreens, 'quantity')).to.equal(1);
      expect(getPropertyOfProduct(springGreens, 'type')).to.equal('Crisp spring greens');
    });
  });

  describe('addPropertyToProduct', () => {
    it('return an updated product object with a new property and value', () => {
      const dvd = {
        type: 'Terminator 2: Judgement Day',
        price: '£6.99',
        quantity: 1,
      };
      expect(addPropertyToProduct(dvd, 'length', '2h 36m')).to.eql({
        type: 'Terminator 2: Judgement Day',
        price: '£6.99',
        quantity: 1,
        length: '2h 36m',
      });
      expect(
        addPropertyToProduct(dvd, 'cast', [
          'Arnold Schwarzenegger',
          'Linda Hamilton',
          'Robert Patrick',
          'Edward Furlong',
        ])
      ).to.eql({
        type: 'Terminator 2: Judgement Day',
        price: '£6.99',
        quantity: 1,
        length: '2h 36m',
        cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Robert Patrick', 'Edward Furlong'],
      });
    });
  });

  describe('createNorthcoder', () => {
    it("returns an object with a 'name' property set to the passed name argument", () => {
      let northcoder = createNorthcoder('Mauro');
      expect(northcoder).to.haveOwnProperty('name');
      expect(northcoder.name).to.equal('Mauro');

      northcoder = createNorthcoder('Ant');
      expect(northcoder).to.haveOwnProperty('name');
      expect(northcoder.name).to.equal('Ant');
    });
    it("returns an object with an 'age' property set to the user's age in the year 2019 according to the passed yearOfBirth argument", () => {
      let northcoder = createNorthcoder('Mauro', 1989);
      expect(northcoder).to.haveOwnProperty('age');
      expect(northcoder.age).to.equal(30);

      northcoder = createNorthcoder('Ant', 1991);
      expect(northcoder).to.haveOwnProperty('age');
      expect(northcoder.age).to.equal(28);
    });
    it("returns an object with a 'language' property set to JavaScript", () => {
      const northcoder = createNorthcoder('Mauro', 1989);
      expect(northcoder).to.haveOwnProperty('language');
      expect(northcoder.language).to.equal('JavaScript');
    });
  });

  describe('updateVoterAddress', () => {
    it("changes the voter's house number", () => {
      const mitch = {
        name: 'Mitch',
        age: 27,
        address: { houseNumber: 61, street: 'Bushwood Rd', city: 'Manchester' },
      };
      const alex = {
        name: 'Alex',
        age: 39,
        address: { houseNumber: 2, street: 'Old St', city: 'Chester' },
      };
      updateVoterAddress(mitch, 10);
      updateVoterAddress(alex, 23);
      expect(mitch.address.houseNumber).to.equal(10);
      expect(alex.address.houseNumber).to.equal(23);
    });
  });

  describe('createUserString', () => {
    it('returns a string containing "name : <user\'s name>"', () => {
      const mitch = { name: 'Mitch', age: 27, language: 'Javascript' };
      const actual = createUserString(mitch);
      expect(actual.includes('name: Mitch')).to.be.true;
    });
    it('returns a string containing "age : <user\'s age>"', () => {
      const mitch = { name: 'Mitch', age: 27, language: 'Javascript' };
      const actual = createUserString(mitch);
      expect(actual.includes('age: 27')).to.be.true;
    });
    it('returns a string containing "language : <user\'s language>"', () => {
      const mitch = { name: 'Mitch', age: 27, language: 'Javascript' };
      const actual = createUserString(mitch);
      expect(actual.includes('language: Javascript')).to.be.true;
    });
    it("returns a whole string with all of the user's details", () => {
      const mitch = { name: 'Mitch', age: 27, language: 'Javascript' };
      let actual = createUserString(mitch);
      expect(actual.includes('name: Mitch, age: 27, language: Javascript')).to.be.true;

      const ant = { name: 'Ant', age: 28, language: 'Java' };
      actual = createUserString(ant);
      expect(actual.includes('name: Ant, age: 28, language: Java')).to.be.true;
    });
  });

  describe('getNorthcodersNames', () => {
    it('returns an empty array when given an empty list of northcoders', () => {
      const northcoders = [];
      const actual = getNorthcodersNames(northcoders);
      const expected = [];
      expect(actual).to.deep.equal(expected);
    });
    it('returns an array of one name when given a list containing only one northcoder', () => {
      const northcoders = [{ name: 'Mitch', age: 27, language: 'Javascript' }];
      const actual = getNorthcodersNames(northcoders);
      const expected = ['Mitch'];
      expect(actual).to.deep.equal(expected);
    });
    it('returns all the names of all the northcoders', () => {
      const northcoders = [
        { name: 'Mitch', age: 27, language: 'Javascript' },
        { name: 'Ant', age: 28, language: 'Java' },
        { name: 'Natalia', age: 29, language: 'C' },
        { name: 'Foluso', age: 26, language: 'Ruby' },
      ];
      const actual = getNorthcodersNames(northcoders);
      const expected = ['Mitch', 'Ant', 'Natalia', 'Foluso'];
      expect(actual).to.deep.equal(expected);
    });
  });

  describe('getAlbumProperties', () => {
    it("returns an array of the album's keys", () => {
      const input = {
        title: 'Pablo Honey',
        yearReleased: 1993,
        producer: 'Nigel Godrich',
      };
      const actual = getAlbumProperties(input);
      const expected = ['title', 'yearReleased', 'producer'];
      expect(actual).to.eql(expected);
    });
  });

  describe('deleteManyPasswords', function () {
    it('deletes the password key value pair on every object in an array of createUserString', function () {
      expect(
        deleteManyPasswords([
          { name: 'Barry', password: 'ilovetea' },
          { name: 'Sandeep', password: 'ilovecoffee' },
          { name: 'Kavita', password: 'ilovepie' },
        ])
      ).to.eql([{ name: 'Barry' }, { name: 'Sandeep' }, { name: 'Kavita' }]);
      expect(
        deleteManyPasswords([
          { name: 'Carmen', password: 'ilovetea' },
          { name: 'Lisa', password: 'ilovepie' },
        ])
      ).to.eql([{ name: 'Carmen' }, { name: 'Lisa' }]);
    });
  });

  describe('countTheObjects', function () {
    it('returns the count of objects inside an array of random data types', function () {
      expect(countTheObjects([])).to.equal(0);
      expect(countTheObjects([1, 3, 4, 5])).to.equal(0);
      expect(countTheObjects([1, 3, 4, 5, 'foo'])).to.equal(0);
      expect(countTheObjects([1, 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
      expect(countTheObjects([1, [], 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
      expect(countTheObjects([1, [], null, 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(3);
      expect(countTheObjects([1, {}, [], null, null, 'foo', 3, 4, 5, {}, {}, {}, 'foo'])).to.equal(
        4
      );
    });
  });
});
