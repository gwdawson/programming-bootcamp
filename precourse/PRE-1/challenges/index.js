// Fill in the body of the functions following the instructions.
// Important! Don't change the name of the functions.

function modulo(a, b) {
  // returns the remainder of a / b
  return a % b;
}

function squareRoot(n) {
  // returns the sqrt of n
  return Math.sqrt(n);
}

function raiseToPower(m, n) {
  // returns mⁿ
  return Math.pow(m, n);
}

function formatMoney(amount) {
  // rounds ammount to 2 decimal numbers
  const rounded = amount.toFixed(2);
  // adds £ infront of rounded number
  const formatted = `£${rounded}`;
  // returns formatted
  return formatted;
}

function calculateCircleArea(r) {
  // calculates the area of a circle
  const area = Math.PI * (r * r);
  // formats the area to 3 decimal numbers
  const formatted = parseFloat(area.toFixed(3));
  // returns formatted
  return formatted;
}

function calculateFullTurns(degrees) {
  // returns the ammount of times 360 fits into degrees (rounded down)
  return Math.floor(degrees / 360);
}

function getLength(str) {
  // returns the length of str
  return str.length;
}

function putNamesTogether(firstName, lastName) {
  // returns firstName and lastName as one string
  return `${firstName} ${lastName}`;
}

function capitaliseString(str) {
  // sets capital to the first letter of the string
  const capital = str[0].toUpperCase();
  // sets strWithoutFirst to string - string[0]
  const strWithoutFirst = str.slice(1, str.length);
  // returns capital and strWithoutFirst as a new string
  return capital + strWithoutFirst;
}

function dontShoutSentence(SENTENCE) {
  // sets capital to the first letter of the string(uppercase)
  const capital = SENTENCE[0].toUpperCase();
  // sets lowercaseWithoutFirst to string(lowercase) - string[0]
  const lowercaseWithoutFirst = SENTENCE.toLowerCase().slice(1, SENTENCE.length);
  // returns capital and lowercaseWithoutFirst as a new string
  return capital + lowercaseWithoutFirst;
}

function getMiddle(str) {
  // converts str into an array called strArray
  const strArray = str.split('');
  // sets remove to the ammount of chars that need to be removed from both sides of the array
  const remove = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    // if string length is even
    // remove amount - 1 from each side of strArray
    for (let i = 0; i < remove - 1; i++) {
      strArray.shift();
      strArray.pop();
    }
  } else {
    // if string length is not even
    // remove amount from each side of strArray
    for (let i = 0; i < remove; i++) {
      strArray.shift();
      strArray.pop();
    }
  }
  // returns strArray converted back to a string
  return strArray.join('');
}

function getLastWord(words) {
  // converts words into an array called wordArray
  const wordArray = words.split(' ');
  // retuns the last word in wordArray
  return wordArray[wordArray.length - 1];
}

function hyphenateWords(words) {
  // returns words with all spaces replaced with -
  return words.replaceAll(' ', '-');
}

function convertToCamelCase(words) {
  // converts words into an array called wordsArray
  const wordsArray = words.split(' ');
  // sets firstWord to the first word of wordsArray(lowercase)
  const firstWord = wordsArray[0].toLowerCase();
  // makes an array with firstWord in it
  const array = [...firstWord];
  // for all words in wordsArray (except first word)
  for (let i = 1; i < wordsArray.length; i++) {
    // sets lower to word (lowercase)
    const lower = wordsArray[i].toLowerCase();
    // sets upper to first letter of word (uppercase)
    const upper = lower[0].toUpperCase();
    // sets capitalised to upper + lower-lower[0]
    const capitalised = upper + lower.slice(1, lower.length);
    // pushes capitalised to the end of array
    array.push(capitalised);
  }
  // returns array converted back to a string
  return array.join('');
}

function areValuesEqual(left, right) {
  // returns true if left is the same as right, otherwise returns false
  return left === right;
}

function areValuesNotEqual(left, right) {
  // returns true if left is not the same as right, otherwise returns false
  return left !== right;
}

function isFromThe60s(year) {
  // sets sixties to an array of all years in the sixties
  const sixties = [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969];
  // returns true if the year is included in sixties, otherwise returns false
  return sixties.includes(year);
}

function isEvenLength(string) {
  // returns true if string is even, otherwise return false
  return string.length % 2 === 0;
}

function areStringsEqualCaseInsensitive(left, right) {
  // returns true if left(lowercase) is the same as right(lowercase), otherwise returns false
  return left.toLowerCase() === right.toLowerCase();
}

function getEvenNumbers(nums) {
  // sets array to an empty array
  const array = [];
  // for all numbers in the array nums
  for (let number of nums) {
    // if number is even
    if (number % 2 === 0) {
      // push number to array
      array.push(number);
    }
  }
  // returns array once all even numbers have been added
  return array;
}

function getItemsLongerThan(array, len) {
  // sets largerArray to an empty array
  const largerArray = [];
  // for all words in array
  for (word of array) {
    // if word is longer than len
    if (word.length > len) {
      // push word to largerArray
      largerArray.push(word);
    }
  }
  // returns an array with all of the larger words
  return largerArray;
}

function getLastItems(array, n) {
  // sets lastItemsArray to an empty array
  const lastItemsArray = [];
  // adds the last n items of array to lastItemsArray
  lastItemsArray.push(...array.slice(array.length - n));
  // returns the array with n last items
  return lastItemsArray;
}

function getSandwichFilling(sandwich) {
  // returns sandwich array (except first and last index)
  return sandwich.slice(1, -1);
}

function removeItem(array, n) {
  // sets leftOfN to all items infront of n
  leftOfN = array.slice(0, n);
  // sets rightOfN to all items after n
  rightOfN = array.slice(n + 1, array.length);
  // returns an array with itens fron each side of n
  return [...leftOfN, ...rightOfN];
}

function mergeArrays(arr1, arr2) {
  // returns an array with items of arr1 and arr2
  return [...arr1, ...arr2];
}

function flattenArrayByOne(arrayOfArrays) {
  // sets contentArray to an empty aray
  const contentArray = [];
  // for all arrays inside arrayOfArrays
  for (const array of arrayOfArrays) {
    // push the content from array to contentArray
    contentArray.push(...array);
  }
  // returns an array with the contents of all arrays inside arrayOfArrays
  return contentArray;
}

function isItemOmnipresent(arrayOfArrays, item) {
  // for all arrays in arrayOfArrays
  for (let array of arrayOfArrays) {
    // if array doesent include item
    if (array.includes(item) === false) {
      // return false
      return false;
    }
  }
  // returns true if all arrays include item
  return true;
}

function isOver40(user) {
  // const user = { age: 55 }

  // if users age is over 40
  if (user.age > 40) {
    // return true
    return true;
  }
  // returns false if age is 40 or under
  return false;
}

function getUserAge(user) {
  // const user = { yearOfBirth: 1989 }

  // returns current year - the year of users birth
  return 2022 - user.yearOfBirth;
}

function getUserPetAge(user) {
  // const user = {
  //   name: 'Tom',
  //   age: 26,
  //   pet: { name: 'Barney', age: 6, type: 'good boy' }
  // }

  // returns the age of the users pet
  return user.pet.age;
}

function createProduct() {
  // creates an object with a type and a price
  const object = {
    type: '2021 M1 MacbookPro 16"',
    price: 2399,
  };
  // returns object
  return object;
}

function addPriceToProduct(product, price) {
  // const product = { type: 'Tofu slices' }

  // adds price to prodice and sets the value to price
  product.price = price;
  // returns product
  return product;
}

function getPropertyOfProduct(product, property) {
  // const product = {
  //   type: 'Easy-peeler satsumas',
  //   price: '£1.09',
  //   quantity: 8
  // }

  // returns the property of product
  return product[property];
}

function addPropertyToProduct(product, property, value) {
  // const product = {
  //   type: 'Terminator 2: Judgement Day',
  //   price: '£6.99',
  //   quantity: 1,
  //   length: '2h 36m'
  // }

  // sets the property of product to value
  product[property] = value;
  // returns product
  return product;
}

function createNorthcoder(name, yearOfBirth) {
  // creates an object called northcoder with name, age and language keys
  const northcoder = {
    name: name,
    age: 2019 - yearOfBirth,
    language: 'JavaScript',
  };
  // returns northcoder
  return northcoder;
}

function updateVoterAddress(voter, correctHouseNumber) {
  // const voter = {
  //   name: 'Mitch',
  //   age: 27,
  //   address: { houseNumber: 61, street: 'Bushwood Rd', city: 'Manchester' }
  // }

  // sets voters house number to correctHouseNumber
  voter.address.houseNumber = correctHouseNumber;
}

function createUserString(userObj) {
  // const userObj = {
  //   name: 'Ant',
  //   age: 28,
  //   language: 'Java'
  // }

  // returns a string with the user's details
  return `name: ${userObj.name}, age: ${userObj.age}, language: ${userObj.language}`;
}

function getNorthcodersNames(northcoders) {
  // const northcoders = [
  //   { name: 'Mitch', age: 27, language: 'Javascript' },
  //   { name: 'Ant', age: 28, language: 'Java' },
  //   { name: 'Natalia', age: 29, language: 'C' },
  //   { name: 'Foluso', age: 26, language: 'Ruby' }
  // ]

  // sets names to an empty array
  const names = [];
  // for all users in northcoders
  for (const users of northcoders) {
    // push the users name to names
    names.push(users.name);
  }
  // returns the names array
  return names;
}

function getAlbumProperties(obj) {
  // const obj = {
  //   title: 'Pablo Honey',
  //   yearReleased: 1993,
  //   producer: 'Nigel Godrich'
  // }

  // returns an array of all object keys
  return Object.keys(obj);
}

function deleteManyPasswords(users) {
  // const users = [
  //   { name: 'Barry', password: 'ilovetea' },
  //   { name: 'Sandeep', password: 'ilovecoffee' },
  //   { name: 'Kavita', password: 'ilovepie' }
  // ]

  // for each user in users
  for (let user of users) {
    // delete the passwords key
    delete user.password;
  }
  // returns users
  return users;
}

function countTheObjects(arr) {
  // sets cout to 0
  let count = 0;
  // for each item in array
  for (let item of arr) {
    // if item is an object, not an array, and not null
    if (typeof item == 'object' && item != null && !Array.isArray(item)) {
      // add 1 to count
      count++;
    }
  }
  // returns the count
  return count;
}

module.exports = {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
  areValuesEqual,
  areValuesNotEqual,
  isFromThe60s,
  isEvenLength,
  areStringsEqualCaseInsensitive,
  getLength,
  putNamesTogether,
  capitaliseString,
  dontShoutSentence,
  getMiddle,
  getLastWord,
  hyphenateWords,
  convertToCamelCase,
  getEvenNumbers,
  getItemsLongerThan,
  getLastItems,
  getSandwichFilling,
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
};
