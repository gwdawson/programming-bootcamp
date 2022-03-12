const fs = require('fs/promises');
const inquirer = require('inquirer');

fs.readFile('vip-list.txt', 'utf-8')
  .then((content) => {
    inquirer
      .prompt([
        {
          name: 'vip',
          type: 'input',
          message: 'What VIP would you like to remove?',
        },
      ])
      .then((input) => {
        const regex = new RegExp(input.vip, 'i');
        const newContent = content.replace(regex, '');
        fs.writeFile('vip-list.txt', newContent);
        console.log(`Removed ${input.vip.toUpperCase()} from the VIP list!`);
      });
  })
  .catch((e) => {
    console.log(e);
  });
