const fs = require('fs/promises');

exports.removePet = (id) => {
  return fs.unlink(`./data/pets/p${id}.json`).catch((err) => {
    return true;
  });
};
