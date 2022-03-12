const deepEntries = (obj) => {
  const toReturn = [];

  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      toReturn.push([key, deepEntries(obj[key])]);
    } else {
      toReturn.push([key, obj[key]]);
    }
  }
  return toReturn;
};

const deeplyEquals = (a, b) => {};

const flat = () => {};

module.exports = { deeplyEquals, flat, deepEntries };
