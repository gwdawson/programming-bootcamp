try {
  person;
  let person = "Foluso";
} catch (error) {
  console.log(error);
}

// Preiction => ReferenceError: person is not defined
// Actual => ReferenceError: Cannot access 'person' before initialization
