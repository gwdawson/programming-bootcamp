function getLastItem(array) {
  const arrayCopy = [...array];
  return arrayCopy.pop();
}

function removeItem(array, index) {
  const arrayCopy = [...array];
  arrayCopy.splice(index, 1);
  return arrayCopy;
}

function switchKey(obj, oldKey, newKey) {
  objCopy = { ...obj };
  objCopy[newKey] = obj[oldKey];
  delete objCopy[oldKey];
  return objCopy;
}

function joinArrays(arr1, arr2) {
  if (typeof arr2 !== 'undefined') return [...arr1, ...arr2];
  return [...arr1];
}

function addItem(array, item) {
  const arrayCopy = [...array];
  if (!item) return arrayCopy;
  arrayCopy.push(item);
  return arrayCopy;
}

function removeAges(people) {
  const noAge = people.map((person) => {
    const personCopy = { ...person };
    delete personCopy.age;
    return personCopy;
  });
  return noAge;
}

module.exports = {
  getLastItem,
  removeItem,
  switchKey,
  joinArrays,
  addItem,
  removeAges,
};
