const request = require('./request.js');

// Use request to make a request to 'https://icanhazdadjoke.com/search' in order to fetch a list of jokes

// Print the list of jokes to the terminal using console.log
// Try using the documentation (https://icanhazdadjoke.com/api) to see if you can dynamically alter the number of jokes coming back from the request.
// This uses URL queries. E.g. `https://icanhazdadjoke.com/search?term=bananas` or `https://icanhazdadjoke.com/search?term=bananas&limit=3`

request(`https://icanhazdadjoke.com/search?term=bananas`, (err, response) => {
  for (const i in response.results) {
    console.log(response.results[i].joke);
  }
});
