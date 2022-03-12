# Inquirer

If you get to trying to make your Pokemon game an actual game, you’ll want to have a look at how inquirer works - some of the examples in this folder on their github will help https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples

This uses something called Promises in javascript, which we will cover in more detail at the end of next week, but for now, the general idea is along the lines of the following:

```js
const inquirer = require('inquirer');

const firstQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Ash',
  },
  {
    type: 'list',
    name: 'pokemon',
    message: 'Which pokemon do you choose?',
    choices: ['Pikachu', 'Magikarp'],
  },
  // etc...
];

const secondQuestions = [
  //... see examples to how to format questions
];

function playGame() {
  inquirer
    .prompt(firstQuestions)
    .then(function(firstAnswers) {
      // do stuff with the answers to the firstQuestions, e.g. create trainers and catch pokemon
      console.log(firstAnswers);
      return inquirer.prompt(secondQuestions);
    })
    .then(function(secondAnswers) {
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
    });
}

playGame();
```
