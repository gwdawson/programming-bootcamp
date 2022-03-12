Detective, here are your tasks for the rest of today:

# Introduction

We'll fetch data from the server about Northcoders employees and store it locally.

## Challenges

### Task 1

Write a function called `getPeople` that will retrieve list of all the available people on the `northcoders` server . This should:

1. Use node's `https` module to make a request to `https://nc-leaks.herokuapp.com/api/people`.
2. Once you have the response as a useable object, look through the people to find anyone who has `northcoders` as the workplace.
3. Save these `northcoders` employees to a file called `northcoders.json` - remember that the data argument of `fs.writeFile` must be of type string\* so you may need to manipulate the data before saving it.

\* _Or Buffer, Typedarray or DataView but these won't be as relevant to you!_

> Note: If you have `prettier` installed, you can go into this `.json` file, press save and prettier can format your data in a more readable way.

#### Task 2

Write a function called `getInterests` that uses the newly found usernames for each northcoder to retrieve information on everyone's interests. This function should:

1. Use `fs` to read the `northcoders.json` file you created in task 1
2. For every person, use their `username` and make a request to `https://nc-leaks.herokuapp.com/api/people/:username/interests` to get their interests.
3. Each response will be an object with a person key. Collect up the data at this `person` key into an array.
4. Once you have all responses in the array, save it to a file called `interests.json`.

### Task 3

Write a function called `getPets` that does the same as the Task 2 but for pets. The endpoint is `https://nc-leaks.herokuapp.com/api/people/:username/pets`;

> Note: Some of the users do not have pets and so the server will respond with a person but an empty pets array! These responses should not be included in the `pets.json`.

### Task 4

Automation is great. Create a function called `scavengeForNcData` that uses all of the functions you created in Tasks 1-3 to automate your hunt for data.

> Note: Remember `getInterests` and `getPets` must only be used when you can be sure that the `northcoders.json` has finished being created. Considering these are all asynchronous functions, how can you ensure this?

## Additional Challenges

Use a library such as [`superagent`](https://github.com/visionmedia/superagent) to make your requests easier to handle. Refactor your pets in interests requests to use superagent instead of node's http module.

Hello again, Detective. Save the instructions to a file to decrypt your tasks.
