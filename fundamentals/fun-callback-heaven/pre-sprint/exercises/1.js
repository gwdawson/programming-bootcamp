const fs = require('fs');

// Use fs.readFile in order to read the file contents of './library/hello.txt' and console.log the contents to the terminal.
// You can find documentation on fs.readFile here: https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

fs.readFile('./library/hello.txt', 'utf-8', (err, response) => {
  console.log(response);
});
