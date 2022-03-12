const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'user_name',
      type: 'input',
      message: 'What is your name?',
    },
  ])
  .then((response) => {
    console.log(`Hello ${response.user_name}!`);
  })
  .catch((error) => {
    console.log(error);
  });
