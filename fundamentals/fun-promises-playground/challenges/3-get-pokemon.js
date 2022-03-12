const axios = require('axios');
const inquirer = require('inquirer');

console.clear();

inquirer
  .prompt([
    {
      name: 'page',
      type: 'input',
      default: '0 - 56',
      message: 'What page would you like to view?',
    },
  ])
  .then((res = 0) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${res.page * 20}`)
      .then((response) => {
        console.log('');
        response.data.results.forEach((pokemon) => {
          console.log(pokemon);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
