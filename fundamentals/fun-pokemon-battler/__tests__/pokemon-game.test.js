const { Pokemon, PokemonTrainer, Battle } = require("../pokemon-game");

describe("Pokemon", () => {
  describe("properties", () => {
    test("Pokemon has a name property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.name).toBe("Eevee");
    });

    test("Pokemon has a HP property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.HP).toBe(55);
    });

    test("Pokemon has a damage property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.damage).toBe(18);
    });

    test("Pokemon has a move property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.move).toBe("Headbutt");
    });

    test("Pokemon has a sound property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev...Eevee!"
      );
      expect(testPokemon.sound).toBe("Eev...Eevee!");
    });

    test("Pokemon has a type property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.type).toBe("Normal");
    });
    test("Pokemon has a strength property", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.strength).toBe("None");
    });
  });
  describe("methods", () => {
    test("talk method returns pokemon sound", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev...Eevee!"
      );
      expect(testPokemon.talk()).toBe("Eev...Eevee!");
    });
    test("useYourMoves method returns pokemon favourite move", () => {
      const testPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      expect(testPokemon.useYourMove()).toBe("Headbutt");
    });
  });
});
describe("PokemonTrainer", () => {
  describe("Trainer", () => {
    test("trainer name is equal to input value", () => {
      const newTrainer = new PokemonTrainer("Ash");
      expect(newTrainer.name).toBe("Ash");
    });

    test("trainer pokedex has 1 (starting) pokemon", () => {
      const startingPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const newTrainer = new PokemonTrainer("Ash", startingPokemon);
      expect(newTrainer.pokedex).toEqual([startingPokemon]);
    });

    test("catch adds a pokemon to your pokedex", () => {
      const startingPokemon = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const newTrainer = new PokemonTrainer("Ash", startingPokemon);
      newTrainer.catch();
      console.log(newTrainer.pokedex);
      expect(newTrainer.pokedex.length).toBe(2);
    });
  });
});
describe("Battle", () => {
  describe("properties", () => {
    test("has two trainer properties", () => {
      const startingPokemon1 = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const startingPokemon2 = new Pokemon(
        "Eevee2",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const trainer1 = new PokemonTrainer("Ash", startingPokemon1);
      const trainer2 = new PokemonTrainer("Tony", startingPokemon2);
      const testBattle = new Battle(
        trainer1,
        trainer2,
        startingPokemon1,
        startingPokemon2
      );

      expect(testBattle.trainer1).toEqual(trainer1);
      expect(testBattle.trainer2).toEqual(trainer2);
    });
    test("has two pokemon properties", () => {
      const startingPokemon1 = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const startingPokemon2 = new Pokemon(
        "Eevee2",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const trainer1 = new PokemonTrainer("Ash", startingPokemon1);
      const trainer2 = new PokemonTrainer("Tony", startingPokemon2);
      const testBattle = new Battle(
        trainer1,
        trainer2,
        startingPokemon1,
        startingPokemon2
      );

      expect(testBattle.pokemon1).toEqual(startingPokemon1);
      expect(testBattle.pokemon2).toEqual(startingPokemon2);
    });
  });
  describe("methods", () => {
    test("fight method takes each pokemon's strengths and weaknesses into account and ends with one pokemon fainting", () => {
      const startingPokemon1 = new Pokemon(
        "Eevee",
        "Normal",
        55,
        "Headbutt",
        18,
        "Eev..Eevee!"
      );
      const startingPokemon2 = new Pokemon(
        "Leafon",
        "Grass",
        65,
        "Giga drain",
        17,
        "Lea... Leafeon!"
      );
      const trainer1 = new PokemonTrainer("Ash", startingPokemon1);
      const trainer2 = new PokemonTrainer("Tony", startingPokemon2);
      const testBattle = new Battle(
        trainer1,
        trainer2,
        startingPokemon1,
        startingPokemon2
      );
      testBattle.fight();
      expect(
        (startingPokemon1.HP === 4 && startingPokemon2.HP === -7) ||
          (startingPokemon1.HP === -13 && startingPokemon2.HP === 11)
      ).toBe(true);
    });
  });
});
