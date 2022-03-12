const fs = require('fs');

// Use fs.readdir in order to print the names of all of the `.js` files in the "library" directory to the terminal
// You can find reasonable documentation on how to use fs.readdir here: https://www.geeksforgeeks.org/node-js-fs-readdir-method/

fs.readdir('./library', (err, response) => {
  const filtered = response.filter(filename => {
    if (filename.endsWith('.js')) return filename;
  });

  console.log(filtered);
});
