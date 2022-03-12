const fs = require('fs');
const request = require('superagent');

request.get('nc-leaks.herokuapp.com/api/people').then((data) => {
  const employees = data.body.people.filter((person) => person.job.workplace === 'northcoders');

  fs.writeFile('./sa-northcoders.json', JSON.stringify(employees), (err) => {
    if (err) console.log(err);
    saGetInterests(employees);
    saGetPets(employees);
  });

  return data.body;
});

function saGetInterests(employees) {
  const interests = [];

  employees.forEach((employee) => {
    request.get(`nc-leaks.herokuapp.com/api/people/${employee.username}/interests`).then((data) => {
      interests.push(data.body);
      if (interests.length === employees.length) {
        fs.writeFile('./sa-interests.json', JSON.stringify(interests), defaultCallback);
      }
    });
  });
}

function saGetPets(employees) {
  const pets = [];
  let count = 0;

  employees.forEach((employee) => {
    request
      .get(`nc-leaks.herokuapp.com/api/people/${employee.username}/pets`)
      .then((data) => {
        if (data.body.hasOwnProperty('person')) pets.push(data.body);

        checkAndWrite();
      })
      .catch((err) => {
        checkAndWrite();
      });
  });

  function checkAndWrite() {
    if (++count === employees.length) {
      fs.writeFile('./sa-pets.json', JSON.stringify(pets), defaultCallback);
    }
  }
}

function defaultCallback(err) {
  if (err) console.log(err);
  console.log('You WIn1');
}
