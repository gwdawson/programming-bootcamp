# Callback Heaven

In the early days of Node, callbacks were the main way of handling asynchronicity.
In this sprint, you will have to build async functions using your knowledge of callbacks, in order to make requests to our server.

### Learning Objectives

- Learn about asynchronous nature of javascript
- Understand how to use callback functions in Node
- Understand how to deal with the most common issues that arise from using callbacks

Our very own NC server has a series of endpoints from which you can gain a range of information about our adorable cats.

The server's endpoints are detailed below:

## Section 1 - Kitty Litter Cat Server

It's time to build a website for ALL THINGS CAT!

Your backend dev friend has set up a few end points, and provided a few instructions for how to use them.

Using the `request` function provided, please interact with the server to pass the tests (provided!).

`request` is a function that takes a path and a callback function as its arguments. It will invoke the callback function asynchronously, with either an error or a successful response as a consequence of interacting with the data found on that path.

**Note:** You do not need to delve into the server files found in the utils folder in order to complete this sprint. You will be able to receive all of the information you need via the response from the request function.

The endpoints, and their desired results, are outlined below.

### Available end-points:

- `/status` : responds with a status from the server, as 200 if the response is successful
- `/banner` : responds with a banner object
- `/owners` : responds with an array of owners
- `/owners/:owner/cats` : respond with an array of cats for a given owner
- `/pics/:catpic` : responds with a catpic source string. Each valid catpic _MUST_ include the word `cat`, or it will error out
- `/legacy-status` : responds with a successful response only some of the time but on other occasions will respond with an error
- `/outfits/:outfit` : makes a purchase of a given outfit item

### Section 1

#### `checkServerStatus()`

- this function should take a callback function as its only argument.
- your function should invoke the `request` function with the path `/status` and the callback function

#### `fetchBannerContent()`

- this function should take a callback function
- your function should make a request to the `/banner` end-point which responds with a banner object
- embarrassingly, we haven't got the copyright updated for ... a few years. Please update the `copyrightYear` to `2021`
- you should pass the updated banner object to the final callback function

#### `fetchAllOwners()`

- this function should take a callback function as its only argument.
- it should make a request to the server at the `/owners` endpoint.
- the server will respond with an array of capitalised owner names
- your callback function should be invoked with an array of lowercase owner names

#### `fetchCatsByOwner()`

- this function should take an owner name and a callback function as its arguments
- it should make a request to the server at the parametric endpoint `/owners/:owner/cats`.

_N.b., parametric endpoints, often denoted with `:` are generally placeholders for actual values. In this example, `/owners/:owner/cats` would be replaced with something akin to `/owners/vel/cats`, and respond with Vel's cats_

- the server should respond with an array of cats which you must pass to the callback function

#### `fetchCatPics()`

- this function should take an array of strings (names of cat pics) and a callback function
- for each cat name in the passed array, a request should be sent to `/pics/:catpic`
- each response will represent an actual catpic with the suffix `.jpg`
- the callback function should be invoked with an array of responses once all the catpics have been collated(the order does not matter)
- The server will respond with an error if the requested pic doesn't contain the word "cat". Therefore, if you receive an error, you must put `placeholder.jpg` in its place in the response array to act as a placeholder for the missing cat picture.

**Note:** You should make the request to receive the string containing `.jpg` rather than using a JS method!

#### `fetchAllCats()`

- this function should take a callback function as its only argument
- this function should make use of both `fetchAllOwners` and `fetchCatsByOwner` in order to retrieve an array of all the cats from the server
- Be mindful of the casing of your requests! `fetchCatsByOwner` only works with lowercase owner names
- you must finally pass the array of all those adorable cats to the callback function, sorted in alphabetical order

#### `fetchOwnersWithCats()`

- this function should take a callback function as its only argument
- this function should make use of `fetchAllOwners` and `fetchCatsByOwner` in order to build an
  array of objects, each with an `owner` and `cats` key.
- the order of the objects is critical, and must be preserved - however, sorting is incredibly inefficient. Maintain the correct order without sorting
- you get the drill by now, but you must pass the array of cats and owners to the callback function

#### `kickLegacyServerUntilItWorks()`

- this function takes a callback function as its only argument
- this function will need to make a request to the `/legacy-status` end-point
- the legacy server will only respond with a success some of the time.
  Your function must continue to make requests to the legacy server until it gets a successful response
- it should pass the status to the callback function
  **HINT** Your function may need to make a call to itself

#### `buySingleOutfit()`

One of the biggest problems that arises from dealing with callback functions is known as **inversion of control**
In all of the problems so far we are passing a callback function to our request function
however, we are not in control of invoking this function - this is done by the server.
In other words, we are not in **control** of invoking the callback function.

The function `buySingleOutfit` will need

- to take an outfit and a callback function as its arguments
- need to make a request to the `/outfits/:outfit` end-point in order to purchase a particular outfit -
  however, there is a big problem. The person who has designed the server for this end-point has accidentally
  triggered the purchase of the item multiple times - ouch, thats going to cost a lot.
- You need to use additional logic to prevent your final callback function from being invoked multiple times

## Section 2 - Project Generator

First, ensure that you have the latest version of `nodejs` installed. This is most easilly achieved by using [this nvm install script](https://github.com/nvm-sh/nvm#install--update-script) as per [these instructions on the nodejs website](https://nodejs.org/en/download/package-manager/#nvm)

Build a project generator. The goal is to be able to use the terminal command `$generate my_new_project` which should create a directory with the project name passed in your current location and fill it with the necessary files to start a basic JS project.
These should include:

- an index.js
- a spec folder
- an index.test.js
- a package.json set up with the basic dependencies and scripts
- a README.md file
- an eslint config file
- a .gitignore file
- a git repository initialised

In order to do this you will need to utilise the **File System** module available in Node. Only use the asynchronous methods - any ending in 'sync' are not allowed.

A big part of problem solving is reading documentation and establishing what you will need and how to use it - here is the [documentation for Node's File System module](https://nodejs.org/api/fs.html).

You'll also have to research how to install your program on your computer to make the generate command globally available from your terminal.

### Advanced Features

- Configure your generator to automatically run npm install when used, installing all the packages listed in the package.json.
- If called like so: `generate [project name][github http]`, it should automatically add the github http as a remote.
- It should perform an initial commit with the message 'initial commit' and push it to your github on the link provided.
- Explore how you could add interactivity purely with Node, i.e. ask the user to input the name of the project on the console or select between a choice of project templates.

## Section 3 - Reimplementing Generalised Asynchronous Functions

Re-implement the following functions from the much-loved Async library:

- [Map](https://caolan.github.io/async/v3/docs.html#map)
- [Filter](https://caolan.github.io/async/v3/docs.html#filter)
- [Some](https://caolan.github.io/async/v3/docs.html#some)
- [Waterfall](https://caolan.github.io/async/v3/docs.html#waterfall)

Each of these should be done with full asynchronous TDD.

You may wish to read the `async-testing-primer.md` in this repo, along with the existing tests for the functions you have just completed!
