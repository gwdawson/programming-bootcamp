try {
  let person;
  person.name = "Alex";
} catch (error) {
  console.log(error);
}

// Preiction => TypeError: Cannot set properties of undefined (setting 'name')
// Actual => TypeError: Cannot set properties of undefined (setting 'name')
