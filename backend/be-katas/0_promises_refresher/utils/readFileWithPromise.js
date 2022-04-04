const fs = require('fs');

module.exports = function readFileWithPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, fileContents) => {
      if (err) reject(err);
      else resolve(fileContents);
    });
  });
};
