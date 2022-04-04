const {
  fetchSuperHeroes,
  fetchEnemies,
  hackBatman,
  handleNonCompleteRequest,
  readJSONFiles,
  orderPizza
} = require('../promises');

describe('fetchSuperHeroes', function () {
  test('resolves with an array of superHeroes', () => {
    return fetchSuperHeroes().then((heroes) => {
      expect(heroes).toEqual([
        'SUPERMAN',
        'BATMAN',
        'WONDER WOMAN',
        'SPIDERMAN',
        'CAPTAIN AMERICA',
        'THOR',
        'WOLVERINE'
      ]);
    });
  });
});

describe('fetchEnemies', function () {
  test('resolves with an array of enemies', () => {
    return fetchEnemies().then((enemies) => {
      expect(Array.isArray(enemies)).toBe(true);
      expect(enemies[0]).toBe('LEX LUTHOR');
    });
  });
  test('null values are removed from the enemies array', () => {
    return fetchEnemies().then((enemies) => {
      expect(enemies).toEqual([
        'LEX LUTHOR',
        'THE JOKER',
        'THE GREEN GOBLIN',
        'THE RED SKULL',
        'MAGNETO'
      ]);
    });
  });
});

describe('orderPizza', function () {
  test('resolves with a pizza if the shop is open and phone number is valid', () => {
    return orderPizza("Liam's Special Pizza").then((result) => {
      expect(result).toBe(
        'sit back, relax, your pizza will be with you shortly 🍕'
      );
    });
  });
  test('rejects if pizza shop doesnt exist', () => {
    return expect(orderPizza("Vel's Satisfactory Pizza")).rejects.toBe(
      'pizza shop not found! 😢'
    );
  });
  test('resolves with healthy meal if pizza shop isnt open', () => {
    return expect(orderPizza("Nicki's Amazing Pizza")).resolves.toBe(
      'you cooked a healthy meal and feel better for it! 🥦'
    );
  });
});

describe('readJSONFiles', function () {
  test('resolves with an array with a single files contents parsed to JS', () => {
    return readJSONFiles([`${__dirname}/../data/villains/v1.json`]).then(
      (files) => {
        expect(files[0]).toEqual({
          id: 'v1',
          name: 'The Joker'
        });
      }
    );
  });
  test('resolves with an array of multiple files in the correct order', () => {
    const paths = [
      `${__dirname}/../data/villains/v1.json`,
      `${__dirname}/../data/villains/v2.json`,
      `${__dirname}/../data/villains/v3.json`
    ];
    const villains = [
      {
        id: 'v1',
        name: 'The Joker'
      },
      {
        id: 'v2',
        name: 'Catwoman'
      },
      {
        id: 'v3',
        name: 'Bane'
      }
    ];
    return readJSONFiles(paths).then((files) => {
      expect(files).toEqual(villains);
    });
  });
});

describe('handleNonCompleteRequest', function () {
  test('numbers < 0.3 resolve with You win!', () => {
    return handleNonCompleteRequest(0.1).then((result) => {
      expect(result).toBe('You win!');
    });
  });
  test('numbers === 0.3 resolve with You win!', () => {
    return handleNonCompleteRequest(0.3).then((result) => {
      expect(result).toBe('You win!');
    });
  });
  test('numbers > 0.3 resolve with House wins!', () => {
    return handleNonCompleteRequest(0.4).then((result) => {
      expect(result).toBe('House wins!');
    });
  });
});

xdescribe('hackBatman', function () {
  test("resolves with a batman's personal info", () => {
    return expect(hackBatman('bruce wayne')).resolves.toEqual({
      name: 'Bruce Wayne',
      city: 'Gotham',
      favouriteAnimal: 'Bat',
      likes: ['caves', 'fighting', 'cars'],
      lookingForLove: true
    });
  });
});
