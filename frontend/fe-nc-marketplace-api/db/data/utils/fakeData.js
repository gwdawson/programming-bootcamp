const faker = require('faker');

exports.genFakeUsers = (userCount = 10, users = []) => {
  for (let i = 0; i < userCount; i++) {
    const fakeUser = {
      username: faker.internet.userName(),
      avatar_url: faker.image.avatar(),
      kudos: Math.floor(Math.random() * 20),
    };
    users.push(fakeUser);
  }
  return users;
};
