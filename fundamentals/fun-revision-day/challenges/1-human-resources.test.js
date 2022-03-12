const {
  removeAgents,
  makeNameTags,
  createPoll,
  removeSmarterAgents,
} = require("./1-human-resources");

describe("removeAgents", () => {
  test("return an empty array when given empty array", () => {
    expect(removeAgents([])).toEqual([]);
  });
  test("given an array with no moles return the array", () => {
    expect(removeAgents([{ name: "Sam", profession: "artist" }])).toEqual([
      { name: "Sam", profession: "artist" },
    ]);
  });
  test("given an array with 1 moles return the array - mole", () => {
    expect(
      removeAgents([
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
      ])
    ).toEqual([{ name: "Sam", profession: "artist" }]);
  });
  test("given an array with (n) moles return the array - mole(s)", () => {
    expect(
      removeAgents([
        { name: "Sam", profession: "artist" },
        { name: "Mitch", profession: "mole" },
        { name: "Doug", profession: "mole" },
      ])
    ).toEqual([{ name: "Sam", profession: "artist" }]);
  });
});

describe("makeNameTags", () => {
  test("return an empty array when given empty array", () => {
    expect(makeNameTags([])).toEqual([]);
  });
  test("given an array with 1 guest, return an array with 1 nametag", () => {
    expect(
      makeNameTags([
        {
          title: "Mr",
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
      ])
    ).toEqual(["Mr Sam Caine, Northcoders"]);
  });
  test("given an array with (n) guest(s), return an array with (n) nametag(s)", () => {
    expect(
      makeNameTags([
        {
          title: "Mr",
          forename: "Sam",
          surname: "Caine",
          age: 30,
          company: "Northcoders",
        },
        {
          title: "Miss",
          forename: "Roseanne",
          surname: "Park",
          age: 25,
          company: "YG Entertainment",
        },
      ])
    ).toEqual([
      "Mr Sam Caine, Northcoders",
      "Miss Roseanne Park, YG Entertainment",
    ]);
  });
});

describe("createPoll", () => {
  test("return an empty object when given empty array", () => {
    expect(createPoll([])).toEqual({});
  });

  test("given an array with 1 vote, return an object with 1 key", () => {
    expect(createPoll(["dog"])).toEqual({ dog: 1 });
    expect(createPoll(["dog", "dog", "dog"])).toEqual({ dog: 3 });
  });

  test("given an array with (n) vote(s), return an object with (n) key(s)", () => {
    expect(createPoll(["dog", "cat", "parrot"])).toEqual({
      dog: 1,
      cat: 1,
      parrot: 1,
    });
    expect(createPoll(["dog", "dog", "dog", "cat", "parrot"])).toEqual({
      dog: 3,
      cat: 1,
      parrot: 1,
    });
  });
});

describe("removeSmarterAgents", () => {
  test("given an empty array return an empty array", () => {
    expect(removeSmarterAgents([])).toEqual([]);
  });
  test("given an array of 1 object without a spy, return array", () => {
    expect(
      removeSmarterAgents([
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "unicorns"],
        },
      ])
    ).toEqual([
      {
        name: "Sam",
        age: 30,
        aboutMe: "I have no personality! :D",
        interests: ["code", "unicorns"],
      },
    ]);
  });
  test("given an array of (n) objects without a spy, return array", () => {
    expect(
      removeSmarterAgents([
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "unicorns"],
        },
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "unicorns"],
        },
      ])
    ).toEqual([
      {
        name: "Sam",
        age: 30,
        aboutMe: "I have no personality! :D",
        interests: ["code", "unicorns"],
      },
      {
        name: "Sam",
        age: 30,
        aboutMe: "I have no personality! :D",
        interests: ["code", "unicorns"],
      },
    ]);
  });
  test("given an array of 1 object with a spy, return array - spy", () => {
    expect(
      removeSmarterAgents([
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "guacamole"],
        },
      ])
    ).toEqual([]);
  });
  test("given an array of (n) objects with a spy(s), return array - spy(s)", () => {
    expect(
      removeSmarterAgents([
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "guacamole"],
        },
        {
          name: "Sam",
          age: 30,
          aboutMe: "I have no personality! :D",
          interests: ["code", "guacamole"],
        },
      ])
    ).toEqual([]);
  });
});
