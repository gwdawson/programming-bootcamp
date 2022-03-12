const https = require('https');
const fs = require('fs');

function makeCall(path, callback) {
  const search = {
    hostname: 'nc-leaks.herokuapp.com',
    path: `/api/${path}`,
    method: 'GET',
  };
  const request = https.get(search, (res) => {
    let packets = '';
    function getCallback() {
      return () => {
        return callback(packets);
      };
    }
    res.on('data', (data) => {
      const stringData = data.toString();
      packets += stringData;
    });
    res.on('end', getCallback());
  });

  request.end();
}

function getInstructions(packets) {
  const parsedData = JSON.parse(packets);
  const contents = `${parsedData.instructions}\n${parsedData.tips}`;
  fs.writeFile('./INSTRUCTIONS.md', contents, (err) => {
    if (err) console.log(err);
    console.log('You Win!');
  });
}

function getPeopleDaddy(callback = defaultCallback) {
  makeCall('people', getPeople);
  function getPeople(packets) {
    const parsedData = JSON.parse(packets);
    const people = parsedData.people.filter((person) => {
      return person.job.workplace === 'northcoders';
    });
    const employees = JSON.stringify(people);
    fs.writeFile('./northcoders.json', employees, callback);
  }
}
function getInterests(callback = defaultCallback) {
  fs.readFile('./northcoders.json', 'utf-8', (err, data) => {
    const employees = JSON.parse(data);
    const people = [];
    employees.forEach((employee) => {
      const path = `people/${employee.username}/interests`;
      makeCall(path, employeeInterests);
    });
    function employeeInterests(packets) {
      person = JSON.parse(packets);
      people.push(person);
      if (employees.length === people.length) {
        fs.writeFile('./interests.json', JSON.stringify(people), callback);
      }
    }
  });
}

function getPets(callback = defaultCallback) {
  fs.readFile('./northcoders.json', 'utf-8', (err, data) => {
    const employees = JSON.parse(data);
    const people = [];
    let count = 0;

    employees.forEach((employee) => {
      const path = `people/${employee.username}/pets`;
      makeCall(path, employeePets);
    });

    function employeePets(packets) {
      person = JSON.parse(packets);
      if (person.hasOwnProperty('person')) people.push(person);
      if (++count === employees.length) {
        fs.writeFile('./pets.json', JSON.stringify(people), callback);
      }
    }
  });
}

function scavengeForNcData() {
  getPeopleDaddy((err) => {
    getInterests();
    getPets();
  });
}

function defaultCallback(err) {
  if (err) console.log(err);
  console.log('You WIn1');
}

// makeCall('confidential', getInstructions);
// getPeopleDaddy();
// getInterests();
// getPets();
scavengeForNcData();
