const obj = {};

obj.push("pat");

console.log(obj);

// What will happen when this file is executed with Node?
// What is the problem with this code?

// Prediction => ReferenceError: push is not defined
// Actual => TypeError: obj.push is not a function
