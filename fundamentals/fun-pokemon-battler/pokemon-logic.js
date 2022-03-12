function selectStartPokemon(choice, pokemons) {
  for (const pokemon of pokemons) {
    if (pokemon.name === choice) {
      return pokemon;
    }
  }
}

class PokemonTrainer {
  constructor(name, startingPokemon) {
    this.name = name;
    this.pokedex = [startingPokemon];
  }
  catch() {
    const index = Math.floor(Math.random() * allPokemon.length);
    if (allPokemon[index] === undefined) return "You have caught all pokemon";
    this.pokedex.push(allPokemon[index]);
    allPokemon.splice(index, 1);
    return allPokemon[index];
  }
}

class Pokemon {
  constructor(name, type = "Normal", HP, move, damage, sound) {
    this.name = name;
    this.HP = HP;
    this.damage = damage;
    this.move = move;
    this.sound = sound;
    this.type = type;
    switch (type) {
      case "Normal":
        this.strength = "None";
        this.weekness = "Fighting";
        break;
      case "Fire":
        this.strength = "Grass";
        this.weekness = "Water";
        break;
      case "Water":
        this.strength = "Fire";
        this.weekness = "Grass";
        break;
      case "Grass":
        this.strength = "Water";
        this.weekness = "Fire";
        break;
    }
  }
  talk() {
    return this.sound;
  }

  useYourMove() {
    return this.move;
  }
}

class Battle {
  constructor(trainer1, trainer2, pokemon1, pokemon2) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
    const trainers = ["trainer1", "trainer2"];
    const index = Math.floor(Math.random() * 2);
    this.turn = trainers[index];
  }
  fight() {
    let isAlive = true;
    let winningMessage;
    const attackMessages = [
      "Super effective!",
      "Well defended",
      "Decent hit",
      "Nicely constructed attack",
      "Such a classy attack",
    ];
    function attack(pokemon1, pokemon2) {
      const index = Math.floor(Math.random() * attackMessages.length);
      let message;

      if (pokemon2.weekness === pokemon1.strength) {
        pokemon2.HP -= pokemon1.damage * 1.25;
        message = `    ${attackMessages[index]}. ${pokemon1.name} used ${
          pokemon1.move
        } with ${pokemon1.damage * 1.25} damage! ${
          pokemon2.name
        }'s remaining HP: ${pokemon2.HP}`;
      } else if (pokemon2.strength === pokemon1.weekness) {
        pokemon2.HP -= pokemon1.damage * 0.75;
        message = `    ${attackMessages[index]}. ${pokemon1.name} used ${
          pokemon1.move
        } with ${pokemon1.damage * 0.75} damage. ${
          pokemon2.name
        }'s remaining HP: ${pokemon2.HP}`;
      } else {
        pokemon2.HP -= pokemon1.damage;
        message = `    ${attackMessages[index]}. ${pokemon1.name} used ${pokemon1.move} with ${pokemon1.damage} damage. ${pokemon2.name}'s remaining HP: ${pokemon2.HP}`;
      }
      return message;
    }

    let timeout = 1000;
    while (isAlive) {
      if (this.turn === "trainer1") {
        const message = attack(this.pokemon1, this.pokemon2);
        setTimeout(() => {
          console.log(message);
        }, timeout);
        timeout += 2000;
        this.turn = "trainer2";
        if (this.pokemon2.HP <= 0) {
          isAlive = false;
          winningMessage = `    ${
            this.pokemon2.name
          } fainted. Congratulations ${
            this.trainer1.name
          }. You won the battle!\n    ${
            this.pokemon1.name
          } says ${this.pokemon1.talk()}\n`;
        }
      } else {
        const message = attack(this.pokemon2, this.pokemon1);
        setTimeout(() => {
          console.log(message);
        }, timeout);
        timeout += 2000;
        this.turn = "trainer1";
        if (this.pokemon1.HP <= 0) {
          isAlive = false;

          winningMessage = `    ${
            this.pokemon1.name
          } fainted. Congratulations ${
            this.trainer2.name
          }. You won the battle!\n    ${
            this.pokemon2.name
          } says ${this.pokemon2.talk()}\n`;
        }
      }
    }
    setTimeout(() => {
      // console.clear();
      console.log(`
  
        
      ██╗    ██╗██╗███╗   ██╗███╗   ██╗███████╗██████╗ 
      ██║    ██║██║████╗  ██║████╗  ██║██╔════╝██╔══██╗
      ██║ █╗ ██║██║██╔██╗ ██║██╔██╗ ██║█████╗  ██████╔╝
      ██║███╗██║██║██║╚██╗██║██║╚██╗██║██╔══╝  ██╔══██╗
      ╚███╔███╔╝██║██║ ╚████║██║ ╚████║███████╗██║  ██║
      ╚══╝╚══╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
        `);
      console.log(winningMessage);
    }, timeout);
  }
}

const eevee = new Pokemon("Eevee", "Normal", 55, "Headbutt", 18, "Eev..Eevee!");
const flareon = new Pokemon(
  "Flareon",
  "Fire",
  65,
  "Fire blast",
  20,
  "Fla...Flareon!"
);
const vaporeon = new Pokemon(
  "Vaporeon",
  "Water",
  70,
  "Hydro pump",
  19,
  "Vap... Vaporeon!"
);
const leafeon = new Pokemon(
  "Leafeon",
  "Grass",
  65,
  "Giga drain",
  17,
  "Lea... Leafeon!"
);
const charmander = new Pokemon(
  "Charmander",
  "Fire",
  44,
  "Flamethrower",
  17,
  "Cha... Charmander!"
);
const squirtle = new Pokemon(
  "Squirtle",
  "Water",
  44,
  "Surf",
  16,
  "Squ... Squirtle!"
);
const bulbasaur = new Pokemon(
  "Bulbasaur",
  "Grass",
  45,
  "Razor leaf",
  16,
  "Bul... Bulbasaur!"
);
const snorlax = new Pokemon(
  "Snorlax",
  "Normal",
  65,
  "Defense Curl",
  12,
  "Sno... Snorlax!"
);
const allPokemon = [
  eevee,
  flareon,
  vaporeon,
  leafeon,
  charmander,
  squirtle,
  bulbasaur,
  snorlax,
];

module.exports = {
  Pokemon,
  PokemonTrainer,
  Battle,
  selectStartPokemon,
  allPokemon,
};
