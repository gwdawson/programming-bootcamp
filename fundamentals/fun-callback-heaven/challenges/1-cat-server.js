const request = require('../utils/server');

function checkServerStatus(func) {
  request(`/status`, (err, response) => {
    func(err, response);
  });
}

function fetchBannerContent(func) {
  request(`/banner`, (err, response) => {
    response.copyrightYear = 2021;
    func(err, response);
  });
}

function fetchAllOwners(func) {
  request(`/owners`, (err, response) => {
    const newResponse = response.map(user => user.toLowerCase());
    func(err, newResponse);
  });
}

function fetchCatsByOwner(name, func) {
  request(`/owners/${name}/cats`, (err, response) => {
    func(err, response);
  });
}

function fetchCatPics(names, func) {
  if (names.length === 0) return func(null);
  const results = [];
  names.forEach(name => {
    request(`/pics/${name}`, (err, response) => {
      if (err) results.push('placeholder.jpg');
      else {
        results.push(response);
        if (names.length === results.length) func(null, results);
      }
    });
  });
}

function fetchAllCats(func) {
  const catArray = [];
  fetchAllOwners((err, owners) => {
    owners.forEach(owner => {
      fetchCatsByOwner(owner, (err, response) => {
        catArray.push(response);
        if (catArray.length === owners.length) {
          func(err, catArray.flat().sort());
        }
      });
    });
  });
}

function fetchOwnersWithCats(func) {
  const catObjects = [];
  fetchAllOwners((e, owners) => {
    console.log('o', owners);
    owners.forEach(owner => {
      fetchCatsByOwner(owner, (e, cats) => {
        console.log(owner, '+', cats);
        catObjects.push({ owner: owner, cats: cats });
        if (catObjects.length === owners.length) func(e, catObjects);
      });
    });
  });
}

function kickLegacyServerUntilItWorks() {}

function buySingleOutfit() {}

module.exports = {
  buySingleOutfit,
  checkServerStatus,
  kickLegacyServerUntilItWorks,
  fetchAllCats,
  fetchCatPics,
  fetchAllOwners,
  fetchBannerContent,
  fetchOwnersWithCats,
  fetchCatsByOwner
};
