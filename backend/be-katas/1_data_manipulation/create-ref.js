const createRef = (people, ...args) => {
  const ref = {};

  if (args.length === 0) {
    people.forEach((person) => (ref[person.name] = person.phoneNumber));
    return ref;
  }

  const [arg1, arg2] = args;
  people.forEach((person) => (ref[person[arg1]] = person[arg2]));
  return ref;
};

module.exports = createRef;
