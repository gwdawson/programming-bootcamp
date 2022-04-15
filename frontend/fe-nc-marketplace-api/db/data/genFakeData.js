const testData = require('./test');
const { genFakeUsers } = require('./utils/fakeData');
const { writeFile } = require('fs').promises;

// 10 users total
const updateData = async () => {
  const users = genFakeUsers(7, testData.users);
  await writeFile(
    `${__dirname}/dev/users.js`,
    `module.exports = ${JSON.stringify(users, null, 2)}`
  );
};

updateData();
