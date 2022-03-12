const { deepEntries, deeplyEquals } = require("./4-recursion");

describe("deepEntries", () => {
  test("return an empty array when given empty object", () => {
    expect(deepEntries({})).toEqual([]);
  });
  test("return an array with 2 items given 1 key and object", () => {
    expect(deepEntries({ name: "Sam" })).toEqual([["name", "Sam"]]);
  });
  test("return an array with 4 items given 2 keys and objects", () => {
    expect(deepEntries({ name: "Sam", favBook: "Blood Meridian" })).toEqual([
      ["name", "Sam"],
      ["favBook", "Blood Meridian"],
    ]);
  });
  test("idk how to describe this... but make it work", () => {
    expect(deepEntries({ name: "Sam", pets: { name: "fido" } })).toEqual([
      ["name", "Sam"],
      ["pets", [["name", "fido"]]],
    ]);
  });
  test("even more nesting...", () => {
    expect(
      deepEntries({
        name: "Sam",
        favBook: {
          title: "Blood Meridian",
          author: { name: "Cormac McCarthy" },
        },
      })
    ).toEqual([
      ["name", "Sam"],
      [
        "favBook",
        [
          ["title", "Blood Meridian"],
          ["author", [["name", "Cormac McCarthy"]]],
        ],
      ],
    ]);
  });
});

describe("deeplyEquals", () => {});
