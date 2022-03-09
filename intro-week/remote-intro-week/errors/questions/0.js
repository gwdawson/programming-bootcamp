try {
  const letters = "abc";
  letters();
} catch (error) {
  console.log(error, "<--- error");
}

// Preiction => ReferenceError: Trying to call a function that doesnt exits
// Actual => TypeError: letters is not a function
