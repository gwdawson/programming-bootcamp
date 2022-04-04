const treatDoggos = (dogs) => {
  const treatedDogs = [...dogs];
  treatedDogs.forEach((dog) => {
    dog.hasRabies = false;
  });
  return treatedDogs;
};

module.exports = treatDoggos;
