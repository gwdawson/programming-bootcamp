function getEvenNumbers(nums) {
  // filters nums to find even numbers and pushes to evenNumbers
  const evenNumbers = nums.filter((num) => {
    return num % 2 === 0;
  });
  // returns evenNumbers array
  return evenNumbers;
}

function flipBooleans(bools) {
  // maps bools, if true flip to false, if false flip to true
  const flipped = bools.map((bool) => {
    return bool === true ? false : true;
  });
  // returns flipped array;
  return flipped;
}

function translateKey(student, keyToChange, translation) {
  // creates an empty object called newObject
  const newObject = {};
  // loops through every key in student
  for (const key in student) {
    // if key needs changing add updated key and value to newObject
    // if key doesnt need changing add key and value to newObject
    if (key !== keyToChange) {
      newObject[key] = student[key];
    } else {
      newObject[translation] = student[key];
    }
  }
  // returns the newObject
  return newObject;
}

function findFirstDentist(people) {
  // loops through every user in the people array
  for (const user of people) {
    // if user is a dentist, return true
    if (user.isDentist === true) {
      return user;
    }
  }
  // if there are no dentists, return null
  return null;
}

function tallyPeopleInManchester(people) {
  // sets tally to 0
  let tally = 0;
  // loop through all users in the people array
  for (const user of people) {
    // if user if from manchester add 1 to the tally
    if (user.lives.city === 'Manchester') {
      tally++;
    }
  }
  // returns the tally
  return tally;
}

function getPugOwners(dogs) {
  // sets pug owners to enpty array
  const pugOwners = [];
  // loops through all items in object
  for (const dog of dogs) {
    // if dog is a pug, add dogs owner to pugOwners
    if (dog.breed === 'Pug') {
      pugOwners.push(dog.owner);
    }
  }
  // returns pugOwners array
  return pugOwners;
}

function pluraliseKeys(obj) {
  // creates an empty object called newObject
  const newObject = {};
  // for all keys in obj
  for (const key in obj) {
    // if key is not an array, add to newObject
    // if key is an array, add 's' to the end of key and add to newObject
    if (!Array.isArray(obj[key])) {
      newObject[key] = obj[key];
    } else {
      const newKey = key + 's';
      newObject[newKey] = obj[key];
    }
  }
  // return the newObject
  return newObject;
}

function getWordLengths(str) {
  // sets len to an empty array
  const len = [];
  // for every word in str
  for (const i of str.split(' ')) {
    // if there are 0 words return empty string
    if (i.length === 0) {
      return [];
    }
    // else, add length of word to len array
    len.push(i.length);
  }
  // returns len array
  return len;
}

function getPalindromes(words) {
  // sets palindromes to empty array
  const palindromes = [];
  // for every word in words array
  for (const word of words) {
    // sets push default to true
    let push = true;
    // for every letter in word
    for (const i in word) {
      // if letter from the start is not the same as letter from end, set push to false
      if (word[i] !== word[word.length - i - 1]) {
        push = false;
      }
    }
    // if push is still true after checking letters, add word to palindromes arr
    if (push === true) {
      palindromes.push(word);
    }
  }
  // returns palindromes array
  return palindromes;
}

function replaceLettersWithXs(str) {
  // splits each letter of the string
  const split = str.split('');
  // for all indexes in split
  for (const charInd in split) {
    // if index is [a-z] replace character with X
    if (split[charInd].match(/[a-z]/i)) {
      split.splice(charInd, 1, 'X');
    }
  }
  // returns and joins the split array
  return split.join('');
}

function validMobileNumber(num) {
  // checks number against regex pattern to see if it is valid.
  if (/^07[\d]{9}$/.test(num) || /^\+447[\d]{9}$/.test(num) || /^00447[\d]{9}$/.test(num)) {
    // if valid return true
    return true;
  }
  // if not valid return false
  return false;
}

function sumDigitsFromString(str) {
  // sets total to 0
  let total = 0;
  // filters through numbers in str, if num add to numbers array
  const numbers = str.split('').filter((char) => {
    if (char.match(/[0-9]/)) {
      return char;
    }
  });
  // for every num in numbers array
  for (const num of numbers) {
    // add number to total
    total += parseInt(num);
  }
  // returns the total count
  return total;
}

function getWilliams(arr) {
  // filters through all users in arr
  const williams = arr.filter((user) => {
    // if users last name is Williams
    if (user.split(' ')[1] === 'Williams') {
      // add the user to williams array
      return user;
    }
  });
  // returns the williams array
  return williams;
}

function getFactorials(nums) {
  // creates an empty array of complete factorials
  const complete = [];
  // for every number in the nums array
  for (number of nums) {
    // gets the answer from getFactorial
    const answer = getFactorial(number);
    // add answer to the complete array
    complete.push(answer);
  }
  // creates a function called getFactorial
  function getFactorial(number) {
    // sets the dafualt count to 0
    let count = 0;
    // if number is 0 return 1
    if (number === 0) {
      return 1;
    } else {
      // uses recursion to add (n * n-1) to count
      count += number * getFactorial(number - 1);
      // returns count
      return count;
    }
  }
  // returns the array with all factorials
  return complete;
}

function largestNumber(num) {
  // if num is single digit return num
  if (num < 10) {
    return num;
  }
  // converts num into an array
  const split = num.toString().split('');
  // sorts num into ascending order
  const sort = split.sort((a, b) => {
    return a - b;
  });
  // reversed ascending order to decending order
  const reverse = sort.reverse();
  // returns reverse after convering back to number
  return parseInt(reverse.join(''));
}

function generateMatrix(n) {
  // creates empty arrays
  const outerArray = [];
  const innerArray = [];
  // repeat n tiemes
  for (let i = n; i > 0; i--) {
    // add null to innerArray
    innerArray.push(null);
    // push innerArray to outerArray
    outerArray.push(innerArray);
  }
  // returns outerArray
  return outerArray;
}

function findWrongWayFruit(orchard) {
  // if orchars has less than three items
  if (orchard.length < 3) {
    // returns 0
    return 0;
  }
  // sets reversed to empty string
  let reversed = '';
  // if first item is the same as last item, set reversed to first item reversed
  // if first item is not the same, first item must be the wrong way, set reversed to second item
  if (orchard[0] === orchard[orchard.length - 1]) {
    reversed = orchard[0].split('').reverse().join('');
  } else {
    reversed = orchard[1].split('').reverse().join('');
  }
  // returns the index of the reversed fruit
  return orchard.indexOf(reversed);
}

function pairDNA(dna) {
  //creates an object of all pairs
  const dnaPairs = {
    A: 'T',
    C: 'G',
    G: 'C',
    T: 'A',
  };
  // splits dna string into array of single dna
  const single = dna.toUpperCase().split('');
  // creates empty array for complete pairs
  const pairs = [];
  // sets match to empty string
  let match = '';
  // for every piece of dna in single
  for (const i of single) {
    // if i is a valid dna piece
    if (dnaPairs.hasOwnProperty(i)) {
      // add peice to dna
      match += i;
      // add the matching peice of dna to match
      match += dnaPairs[i];
      // pushed the matched pair to pairs array
      pairs.push(match);
      // clears the match variable
      match = '';
    }
  }
  // returns an array with all matching pairs
  return pairs;
}

function tallyHashtagsAndMentions(str) {
  // sets default log counts to 0
  const logs = { hashtags: 0, mentions: 0 };
  // creates an array of words from str
  const words = str.split(' ');
  // for every word in the array
  for (const word of words) {
    // if word has # add 1 to hashtags log
    // if word has @ add 1 to mentions log
    if (word.search(/#/) !== -1) {
      logs.hashtags += 1;
    } else if (word.search(/@/) !== -1) {
      logs.mentions += 1;
    }
  }
  // returns logs of hashtags and mentions
  return logs;
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  translateKey,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  pluraliseKeys,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
};
