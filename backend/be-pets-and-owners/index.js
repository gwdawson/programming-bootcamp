const express = require('express');
const fs = require('fs/promises');
const app = express();
const axios = require('axios');
const { getOwner, patchOwnerById, postNewOwner, addPetToOwner } = require('./controllers/owners.controller.js');
const { removePet } = require('./controllers/pets.controller.js');

app.use(express.json());

// Advanced
app.use((req, res, next) => {
  const date = new Date(Date.now());
  const data = `${req.method} | ${req.originalUrl} | ${date}\n`;
  fs.appendFile('data/log.txt', data);
  next();
});

// Task 1
app.get('/api/owners/:id', getOwner);

// Task 2
app.get('/api/owners', (req, res) => {
  fs.readdir('data/owners', 'utf8')
    .then((filenames) => {
      const promises = [];
      filenames.forEach((file) => {
        const readFile = fs.readFile(`data/owners/${file}`, 'utf8');
        promises.push(readFile);
      });
      return Promise.all(promises);
    })
    .then((data) => {
      let allData = [];
      data.forEach((item) => {
        allData.push(JSON.parse(item));
      });
      res.send({ owners: allData });
    })
    .catch((err) => {
      res.status(500).send(`Internal server error.`);
      throw err;
    });
});

// Task 3
// Error handle if no owner exists without nesting
app.get('/api/owners/:id/pets', (req, res) => {
  const id = req.params.id;
  fs.readdir(`./data/pets/`, 'utf8')
    .then((petFiles) => {
      const promises = petFiles.map((petFile) => {
        return fs.readFile(`./data/pets/${petFile}`, 'utf8');
      });
      return Promise.all(promises);
    })
    .then((pets) => {
      pets = pets.map((pet) => JSON.parse(pet));
      pets = pets.filter((pet) => pet.owner === `o${id}`);
      const owner = req.originalUrl.split('/')[3];
      res.send({ pets });
    })
    .catch((err) => {
      res.status(500).send(`Internal server error.`);
      throw err;
    });
});

// Task 4
app.get('/api/pets', (req, res) => {
  fs.readdir('./data/pets', 'utf-8')
    .then((petFiles) => {
      let promises = [];
      petFiles.forEach((petFile) => {
        promises.push(fs.readFile(`./data/pets/${petFile}`, 'utf-8'));
      });
      return Promise.all(promises);
    })
    .then((pets) => {
      pets = pets.map((pet) => JSON.parse(pet));
      const temperament = req.query.temperament;
      if (temperament === undefined) res.send({ pets });
      else {
        pets = pets.filter((pet) => pet.temperament === temperament);
        res.send({ pets });
      }
    })
    .catch((err) => {
      res.status(500).send(`Internal server error.`);
      throw err;
    });
});

// Task 5
// rewrite
app.get('/api/pets/:id', (req, res) => {
  const id = req.params.id;
  axios
    .get('http://localhost:3000/api/pets')
    .then((response) => {
      let selectedPet = response.data.pets.filter((pet) => `p${id}` === pet.id);
      if (selectedPet.length !== 0) {
        res.send({ pet: selectedPet[0] });
      } else {
        res.status(404).send(`Pet ${id} does not exist.`);
      }
    })
    .catch((err) => {
      res.status(500).send(`Internal server error.`);
      throw err;
    });
});

app.patch('/api/owners/:id', patchOwnerById);

app.post('/api/owners', postNewOwner);

app.post('/api/owners/:id/pets', addPetToOwner);

app.delete('/api/pets/:id', removePet);

module.exports = { app };
