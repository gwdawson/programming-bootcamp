//GAME UI////
console.clear();
("use strict");
const inquirer = require("inquirer");
const {
  Pokemon,
  PokemonTrainer,
  Battle,
  selectStartPokemon,
  allPokemon,
} = require("./pokemon-logic");
console.log(`
    ██████╗  ██████╗ ██╗  ██╗███████╗███╗   ███╗ ██████╗ ███╗   ██╗    ██████╗  █████╗ ████████╗████████╗██╗     ███████╗██████╗ 
    ██╔══██╗██╔═══██╗██║ ██╔╝██╔════╝████╗ ████║██╔═══██╗████╗  ██║    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝██╔══██╗
    ██████╔╝██║   ██║█████╔╝ █████╗  ██╔████╔██║██║   ██║██╔██╗ ██║    ██████╔╝███████║   ██║      ██║   ██║     █████╗  ██████╔╝
    ██╔═══╝ ██║   ██║██╔═██╗ ██╔══╝  ██║╚██╔╝██║██║   ██║██║╚██╗██║    ██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝  ██╔══██╗
    ██║     ╚██████╔╝██║  ██╗███████╗██║ ╚═╝ ██║╚██████╔╝██║ ╚████║    ██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗██║  ██║
    ╚═╝      ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚═╝  ╚═╝

`);
const playerQuestions = [
  {
    type: "input",
    name: "name1",
    message: "What is your name Player 1?",
    default: "Ash",
  },
  {
    type: "list",
    name: "pokemon1",
    message: "Which pokemon do you choose?",
    choices: ["Eevee", "Flareon", "Vaporeon", "Bulbasaur"],
  },
  {
    type: "input",
    name: "name2",
    message: "What is your name Player 2?",
    default: "Jessie",
  },
  {
    type: "list",
    name: "pokemon2",
    message: "Which pokemon do you choose?",
    choices: ["Leafeon", "Charmander", "Squirtle", "Snorlax"],
  },
];

let player1;
let player2;

function playGame() {
  inquirer.prompt(playerQuestions).then(function (answers) {
    // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
    player1 = new PokemonTrainer(
      answers.name1,
      selectStartPokemon(answers.pokemon1, allPokemon)
    );
    player2 = new PokemonTrainer(
      answers.name2,
      selectStartPokemon(answers.pokemon2, allPokemon)
    );
    // return inquirer.prompt(secondPlayerQuestions);
    const battle = new Battle(
      player1,
      player2,
      player1.pokedex[0],
      player2.pokedex[0]
    );

    setTimeout(() => {
      console.clear();
      console.log(`
    ██████╗  █████╗ ████████╗████████╗██╗     ███████╗
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██║     ██╔════╝
    ██████╔╝███████║   ██║      ██║   ██║     █████╗  
    ██╔══██╗██╔══██║   ██║      ██║   ██║     ██╔══╝  
    ██████╔╝██║  ██║   ██║      ██║   ███████╗███████╗
    ╚═════╝ ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝
      `);
    }, 1000);

    setTimeout(() => {
      console.log(
        `    Get Ready! Your battle between ${player1.pokedex[0].name} and ${player2.pokedex[0].name} will begin in ...`
      );
    }, 1000);
    setTimeout(() => {
      console.log("    3...");
    }, 3000);
    setTimeout(() => {
      console.log("    2...");
    }, 5000);
    setTimeout(() => {
      console.log("    1...");
    }, 7000);
    setTimeout(() => {
      console.log("    Fight!\n");
    }, 10000);
    setTimeout(() => {
      battle.fight();
    }, 13000);
  });
}

playGame();
