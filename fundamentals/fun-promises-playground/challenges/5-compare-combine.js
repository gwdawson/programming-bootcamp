const fs = require('fs/promises');

Promise.all([
  fs.readFile('secret-message.txt', 'utf-8'),
  fs.readFile('super-secret-message.txt', 'utf-8'),
])
  .then(([secretMessage, superSecretMessage]) => {
    const smLen = secretMessage.length;
    const ssmLen = superSecretMessage.length;
    const fileNames = ['secret-message.txt', 'super-secret-message.txt'];
    if (smLen > ssmLen) {
      console.log(`${fileNames[0]} is longer by ${smLen - ssmLen} characters!`);
    } else {
      console.log(`${fileNames[1]} is longer by ${ssmLen - smLen} characters!`);
    }
    return fs
      .writeFile('mega-secret-message.txt', secretMessage + '\n' + superSecretMessage)
      .then(() => {
        console.log('Successfully merged both files!');
      })
      .catch((e) => {
        console.log(e);
      });
  })
  .catch((e) => {
    console.log(e);
  });
