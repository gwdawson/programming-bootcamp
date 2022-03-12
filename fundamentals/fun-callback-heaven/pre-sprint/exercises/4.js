const fs = require('fs');

function getJSFiles(directory, func) {
  fs.readdir(directory, func);
}
// Implement the function getJSFiles, it should take as arguments:
// a directory (string)
// a callback function
// the callback function must be invoked with an error and an array of js files only

getJSFiles('./library', function (err, jsFiles) {
  const filters = jsFiles.filter(filt => {
    if (filt.endsWith('.js')) return filt;
  });

  console.log(`The jsFiles are: `, filters);
});
