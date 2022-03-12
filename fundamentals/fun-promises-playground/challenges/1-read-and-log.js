const fs = require('fs/promises');

fs.readFile('secret-message.txt', 'utf-8')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
