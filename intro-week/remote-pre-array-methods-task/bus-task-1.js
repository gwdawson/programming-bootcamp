const bus = ['Driver'];

bus.push('Alice'); // ['Driver', 'Alice']
bus.push('Bob', 'Carlos', 'David'); // ['Driver', 'Alice', 'Bob', 'Carlos', 'David']
bus.pop(); // ['Driver', 'Alice', 'Bob', 'Carlos']
bus.slice(0, 2); // ['Driver', 'Alice'] => This is a copy, the original array will not be modified
bus.push('Erykah'); // ['Driver', 'Alice', 'Bob', 'Carlos', 'Erykah']

// Predict what the bus will look like BEFORE seeing the console.log
// If you were surprised, trace back each of the last methods and try to figure out why

// Prediction => ['Driver', 'Alice', 'Bob', 'Carlos', 'Erykah']
console.log(bus);

bus.push('Fernando'); // ['Driver', 'Alice', 'Bob', 'Carlos', 'Erykah', 'Fernando']
bus[2] = 'Gertrude'; // ['Driver', 'Alice', 'Gertrude', 'Carlos', 'Erykah', 'Fernando']
bus.push('Isaac'); // ['Driver', 'Alice', 'Gertrude', 'Carlos', 'Erykah', 'Fernando', 'Isaac']
bus.splice(1, 0, 'Hamza'); // ['Driver', 'Alice', 'Hamza', 'Gertrude', 'Carlos', 'Erykah', 'Fernando', 'Isaac']
bus.push('Jenny'); // ['Driver', 'Alice', 'Hamza', 'Gertrude', 'Carlos', 'Erykah', 'Fernando', 'Isaac', 'Jenny']

// Predict what the bus will look like now, then uncomment the console.log below to check

// Prediction => ['Driver', 'Alice', 'Hamza', 'Gertrude', 'Carlos', 'Erykah', 'Fernando', 'Isaac', 'Jenny']
// Actual => ['Driver', 'Hamza', 'Alice', 'Gertrude', 'Carlos', 'Erykah', 'Fernando', 'Isaac','Jenny']
console.log(bus);

// When it come to adding 'Hamza' using .splice, i added the value at startIndex + 1
// In reality the value is input at startIndex and all other values are pushed back by 1
