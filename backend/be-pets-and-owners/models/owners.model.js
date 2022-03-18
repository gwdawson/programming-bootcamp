const fs = require('fs/promises');

exports.getOwnerModel = (id) => {
  return fs.readFile(`data/owners/o${id}.json`, 'utf8').then((fileContents) => {
    return JSON.parse(fileContents);
  });
};

exports.writeData = (file, text, id) => {
  let data = { id: `o${id}`, ...text };
  data = JSON.stringify(data, null, 2);

  return fs.writeFile(file, data).then(() => {
    return data;
  });
};

exports.postOwner = (newOwner) => {
  const id = Date.now();
  newOwner = { id, ...newOwner };
  newOwner = JSON.stringify(newOwner, null, 2);

  return fs.writeFile(`./data/owners/o${id}.json`, newOwner).then(() => {
    return newOwner;
  });
};

exports.postPetToOwner = (newPet, ownerId) => {
  return this.getOwnerModel(ownerId).then((owner) => {
    const id = Date.now();
    newPet.id = id;
    newPet.owner = ownerId;
    newPet = JSON.stringify(newPet, null, 2);
    return fs.writeFile(`./data/pets/p${id}.json`, newPet).then(() => {
      return JSON.parse(newPet);
    });
  });
};
