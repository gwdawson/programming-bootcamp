try {
  let person;
  person.name;
} catch (error) {
  console.log(error);
}

// Preiction => ReferenceError: person is not an object
// Actual => TypeError: Cannot read properties of undefined
