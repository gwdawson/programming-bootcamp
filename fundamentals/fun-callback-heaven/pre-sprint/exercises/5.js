const fs = require('fs');
const request = require('./request');

// Create a writeJoke function that fetches a joke and writes the joke to a file called joke.txt
// Should take a callback function that is invoked when the file is created

function writeJoke(callBack) {
  request('https://icanhazdadjoke.com', callBack);

  fs.writefile('./jokes.txt', callBack.response.joke);
}

writeJoke((err, response) => console.log(response));
