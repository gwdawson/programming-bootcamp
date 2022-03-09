try {
  let person = "Foluso";
  var person = "Alex";
} catch (error) {
  console.log(error);
}

// Preiction => SyntaxError: Identifier 'person' has already been declared
// Actual => SyntaxError: Identifier 'person' has already been declared
