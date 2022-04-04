const ageDog = (dog, num) => {
  const updatedDog = { ...dog };
  updatedDog.age += num;
  return updatedDog;
};

module.exports = ageDog;
