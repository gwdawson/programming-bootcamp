// 1

function removeAgents(arr) {
  const filtered = arr.filter((item) => {
    if (item.profession !== "mole") {
      return item;
    }
  });
  return filtered;
}

// 2

function makeNameTags(arr) {
  const mapped = arr.map((item) => {
    return `${item.title} ${item.forename} ${item.surname}, ${item.company}`;
  });
  return mapped;
}

// 3

function createPoll(arr) {
  const logged = {};
  arr.forEach((item) => {
    if (logged.hasOwnProperty(item)) {
      logged[item]++;
      return;
    }
    logged[item] = 1;
  });
  return logged;
}

// 4

function removeSmarterAgents(arr) {
  const filtered = arr.filter((value) => {
    aboutMeIndex = [];
    interestsIndex = [];
    const about = value.aboutMe.toLowerCase();
    if (about.indexOf("m") !== -1) {
      aboutMeIndex.push(about.indexOf("m"));
      if (about.indexOf("o") !== -1) {
        aboutMeIndex.push(about.indexOf("o"));
        if (about.indexOf("l") !== -1) {
          aboutMeIndex.push(about.indexOf("l"));
          if (about.indexOf("e") !== -1) {
            aboutMeIndex.push(about.indexOf("e"));
          }
        }
      }
    }
    value.interests.forEach((item) => {
      const interests = item.toLowerCase();
      if (interests.indexOf("m") !== -1) {
        interestsIndex.push(interests.indexOf("m"));
        if (interests.indexOf("o") !== -1) {
          interestsIndex.push(interests.indexOf("o"));
          if (interests.indexOf("l") !== -1) {
            interestsIndex.push(interests.indexOf("l"));
            if (interests.indexOf("e") !== -1) {
              interestsIndex.push(interests.indexOf("e"));
            }
          }
        }
      }
    });
    if (aboutMeIndex.length !== 4 && interestsIndex.length !== 4) return value;
  });
  return filtered;
}

module.exports = {
  removeAgents,
  makeNameTags,
  createPoll,
  removeSmarterAgents,
};
