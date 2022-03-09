const somethingFromFile1 = require("./examples/file-1");
const somethingFromFile2 = require("./examples/file-2");
const somethingFromFile3 = require("./examples/file-3");
const somethingFromFile4 = require("./examples/file-4");
const somethingFromFile5 = require("./examples/file-5");
const somethingFromFile6 = require("./examples/file-6");

// somethingFromFile1:
// Prediction => print 'Vel' to the console
// Actual => print 'Vel' to the console

// somethingFromFile2:
// Prediction => print { tutor: 'Vel' } to the console
// Actual => print { tutor: 'Vel' } to the console

// somethingFromFile3:
// Prediction => print 'Hello' to the console
// Actual => print '[Function: printHello]' to the console

// omethingFromFile4:
// Prediction => print '{ add: [Function: add] }' to the console
// Actual => print '{ add: [Function: add] }' to the console

// somethingFromFile5:
// Prediction => print '{ printHello: [Function: printHello], add: [Function: add] }'
// Actual => print '{ printHello: [Function: printHello], add: [Function: add] }'

// somethingFromFile6:
// Prediction => print '{}' to the console
// Actual => print '{}' to the console

console.log(somethingFromFile2.tutor);

console.log(somethingFromFile3());

console.log(somethingFromFile5.printHello());
