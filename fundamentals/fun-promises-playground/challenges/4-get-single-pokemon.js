const axios = require('axios');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      name: 'pokemon',
      type: 'input',
      message: 'What Pokemon woudld you like to view?',
    },
  ])
  .then((response) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${response.pokemon}`)
      .then((response) => {
        console.log(`#${response.data.id}: ${response.data.name}`);
      })
      .catch((error) => {
        console.log(`error: ${response.pokemon} is not a pokemon!`);
      });
  })
  .catch((error) => {
    console.log(error);
  });
