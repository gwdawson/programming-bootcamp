try {
  const name = "mitch";
  name = "Izzi";
} catch (error) {
  console.log(error);
}

// Preiction => TypeError: Assignment to constant variable.
// Actual => TypeError: Assignment to constant variable.
