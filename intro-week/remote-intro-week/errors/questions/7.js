try {
  const name = "jonny";
  name.push("apple");
} catch (error) {
  console.log(error);
}

// Preiction => TypeError: cant push to a string
// Actual => TypeError: name.push is not a function
