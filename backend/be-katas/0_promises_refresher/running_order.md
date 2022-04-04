# Promises Refresher

This repository is designed to remind us how to use promises in JavaScript. There are some functions written for you in the `utils` folder that you are required to use to write your own functions in `main.js` as described in the "Tasks" sections bellow.

The tests have been written for you in `__tests__/promises.test.js`.

> _Hint: Never nest your `.then(() => {})` blocks!_

## Functions available to you for use in these tasks

`getSuperHeroes()` //=> _returns a *promise* which resolves with an array of superheroes._

`getArchEnemies(heroes)` //=> _takes an array of uppercase heroes and returns a promise that will resolve with an array of each heroes arch enemy. It only has a limited knowledge of enemies and if the enemy of that hero is not know the value will be `null`._

`getLoginDetails()` //=> _returns a promise that will resolve with an object containing batman's username and encrypted password._

`decryptPassword(password)` //=> _returns a promise that will resolve with a decrypted password or reject if password is incorrect_

`downloadPersonalInfo(username, password)` //=> _returns a promise that will resolve or reject if username and password are correct_

`flipWeightedCoin(num)` //=> _returns a promise that will only resolve if the number is > 0.3_

`getFile(filename)` //=> _returns a promise that will resolve to the file contents i.e. getFile(1) returns 'File contents of 1'_

`readFileWithPromise(path)` //=> _returns a promise that will read a file at the passed path with utf8 encoding. If the file exists will resolve with a string of the files contents. If no file exists will reject with an error._

`getPizzaShopInfo(shopName)` //=> _returns a promise the will find information on the passed pizza shop and resolve with that pizza shop obj. If the shop doesn't exist, the promise will reject._

`checkPizzaShopOpen(shopName)` //=> _returns a promise that will will either resolve with the pizza shop's opening information or reject saying that the shop doesn't exist._

`callPizzaShop(phoneNumber, isOpen)` //=> _returns a promise which will resolve with your pizza if the shop is open and the phone number is correct._

`cookHealthyMeal()` //=> _returns a promise which resolves with a deliciously healthy meal and you feel much better for it!_

_All the tests have been written for you in the `__tests__` folder and can be run with `npm test`. Use these tests to help build up the functionality required for each function._

## Tasks

1. Write a function `fetchSuperHeroes` that invokes `getSuperHeroes` and returns a promise which resolves to an array of the heroes in uppercase.

2. Write a function `fetchEnemies`. It will need to use your `fetchSuperHeroes` function to retrieve an array of heroes. It will then need to invoke `getArchEnemies` with this array of hero names. `getArchEnemies` will return a promise which resolves to an array of those hero's enemies. However, our comic knowledge just isn't up to scratch. Some of the enemies are not known and will come back as `null`. Make `fetchEnemies` return a promise that resolves to an array of enemies with any null values removed.

## Advanced Tasks

This section looks at a couple of useful static Promise methods. Mainly [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) and [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

Checkout `Promise.all` which is a static method that takes an array of promises and resolves once all those promises have resolved.

3. Make use of `Promise.all` to write a function `orderPizza` that takes a shop name. This function will need to make two requests at the same time. Invoke `getPizzaShopInfo` and `checkPizzaShopOpen` simultaneously. They both accept a shop name and will resolve if it is valid, other-wise they will reject. Once you have the resolution of both these promises, if the shop is currently open, you should invoke `callPizzaShop` which takes a phone number and whether the shop is open. If the shop isn't open invoke `cookHealthyMeal` which resolves to a healthy meal.

**hint** Think about what the value of the `Promise.all` once it has resolved. How can you access the required information from both promises?

4. Another asynchronous issue is that when we are making requests in parallel, we'd like to keep track of the order we made them and ensure they come back in the same order. Write a function `readJSONFiles` which takes an array of file paths. It should invoke `readFileWithPromise` with each given file path from the array in parallel. Once you have all the resolutions of the file contents, they should be parsed back into JS objects. Your function should return a promise which resolves to an array of these objects, maintaining the order in which the files were requested.

Promises take care of a lot of issues for us like making sure that the onSuccess is called once, that only the success or error handler is called as well as protecting the result from being manipulated after it has fulfilled/failed. One thing a Promise cannot do is guard against never completing. In this case we might want some kind of race condition where one promise might resolve after a certain period of time. That way, if the other promise hasn't 'beaten' it, it enables us to handle situations where the request never completes.

5. Use `Promise.race` to write a function `handleNonCompleteRequest` that takes a number between 0 - 0.9999 and calls `flipWeightedCoin` with that number. If that number is over 0.3, `flipWeightedCoin` will never resolve and so therefore your function should resolve after 2000ms,returning a promise that resolves to `'House wins!'`. If it is below 0.3 then return a promise that resolves to `'You win!'`.

6. Write a function `hackBatman`. It will need to use the `getLoginDetails` function which will return a promise which resolves to an object with username and password properties. The password is encrypted so you will then need to use this password with `decryptPassword`. `decryptPassword` takes an encrypted password as an argument. If it is the correct encrypted password, then it will resolve with the decrypted password. Otherwise it will reject. Finally you need to use `downloadPersonalInfo` passing the username and decrypted password as separate arguments. Again if the username and password are correct, this function will resolve to the personal info of batman. If either of these are wrong, the promise this function returns will reject. Your function should return a promise that will resolve to this personal info.
