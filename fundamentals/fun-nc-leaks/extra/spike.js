const request = require('superagent');
const inquire = require('inquirer');

const question = {
  type: 'input',
  name: 'pokemon',
  message: 'What pokemon would you like to view?',
};

function askQuestion() {
  inquire.prompt([question]).then((answer) => {
    getPokemonStats(answer.pokemon.toLowerCase());
    setTimeout(() => askQuestion(), 500);
  });
}

function getPokemonStats(name) {
  request.get(`pokeapi.co/api/v2/pokemon/${name}`).then((pokemon) => {
    console.log(`${name}'s stats:\n`);
    pokemon.body.stats.forEach((stat) => {
      console.log(`${name}'s ${stat.stat.name} is ${stat.base_stat}`);
    });
    console.log(' ');
  });
}

askQuestion();
