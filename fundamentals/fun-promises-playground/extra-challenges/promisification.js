const fs = require('fs');
const path = require('path');

// do not alter this function
function readSecretFile(cb) {
  const filePath = path.join(__dirname, '../challenges/secret-message.txt');
  fs.readFile(filePath, 'utf8', cb);
}

function promisifiedReadSecretFile() {
  // your code here
}

module.exports = { readSecretFile, promisifiedReadSecretFile };
