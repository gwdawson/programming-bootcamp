# Testing for Side Effects

Generally, when creating functions in JavaScript, it is a good idea to build **pure functions**.
A pure function is a function that:

- Given the same input, will always return the same output.
- Produces no side effects.

Side effects can include:

- Modifying any external variable or object property (e.g. a global variable, or a variable in the parent function scope chain)
- Logging to the console
- Writing to a file
- Writing to the network
- Triggering any external process
- Calling any other functions with side-effects

However, sometimes we have to create functions that _do_ have to cause side effects. An example could be a function that logs some output to the console. If this side effect is a key part of the functions behaviour, we should test for it.

## Using a spy to wrap an existing method

There is an example of how to spy on an existing function in the [Jest Docs](https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname).

> `const spy = jest.spyOn(object, "method")` creates a spy that wraps the existing function: `object.method`. The spy will behave exactly like the original method (including when used as a constructor), but you will have access to data about all calls.

Below is an example of spying on `console.log`, and checking whether it has been invoked:

```js
// in example.test.js
test("should log hello to the console", function () {
	const consoleSpy = jest.spyOn(console, "log");

	console.log("hello");

	expect(consoleSpy).toHaveBeenCalledTimes(1);
	expect(consoleSpy).toHaveBeenCalledWith("hello");

	consoleSpy.mockRestore();
});
```

## Jest Lifecycle Methods

Once we have set up a spy on an existing function, we will want to ensure that the amount of calls and all other properties are reset between each test. To do this, we can use the [beforeEach()](https://jestjs.io/docs/en/api#beforeeachfn-timeout) and [afterEach()](https://jestjs.io/docs/en/api#aftereachfn-timeout) methods to get Jest to run functions at certain points in the testing suite. For example, Jest will run the function passed to `beforeEach` before every subsequent `test` block.

In the example below, we wrap `console.log` in a spy before every `test` block, and remove it after every it block.

```js
describe("spying on console log", () => {
	let consoleSpy = null; // initialise variable to be accessible from all tests - its value will be reset between tests

	beforeEach(function () {
		consoleSpy = jest.spyOn(console, "log");
	});

	afterEach(function () {
		consoleSpy.mockRestore();
	});

	it("console log has been called once", () => {
		console.log("hello");
		expect(consoleSpy).toHaveBeenCalledTimes(1);
		expect(consoleSpy).toHaveBeenCalledWith("hello");
	});

	it("console log has not been called", () => {
		expect(consoleSpy).not.toHaveBeenCalled();
	});
});
```

Try running the example with Jest to see the results.
What happens when you remove the `afterEach`?
What about the `beforeEach`?
