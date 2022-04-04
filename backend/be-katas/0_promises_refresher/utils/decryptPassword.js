module.exports = function decryptPassword(encryptedPassword) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (encryptedPassword === 's3edcft6') {
        return resolve('myrobin');
      }
      reject('Incorrect Password');
    }, Math.random() * 500);
  });
};
