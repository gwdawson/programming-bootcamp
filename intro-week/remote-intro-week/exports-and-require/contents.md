# Exports and Require

In `index.js`, we have multiple 'require' statements, each referencing a different file (which live inside the `examples` directory).

## Section 1

For each variable below, look at the relevant file in the `examples` directory and write a comment in `index.js` predicting what the variable holds (and so what will be logged). Then run `index.js` with Node and see if you were correct.

1. `somethingFromFile1`
2. `somethingFromFile2`

- think carefully about what the datatypes will be for 3, 4 and 5

3. `somethingFromFile3`
4. `somethingFromFile4`
5. `somethingFromFile5`

6. `somethingFromFile6`

## Section 2

Still running `index.js` with Node, attempt the following:

1. Using only `somethingFromFile2` (_not_ file-1!), get `Vel` printed to the console

2. Using only `somethingFromFile3`, get `Hello` printed to the console

3. Now using only `somethingFromFile5` (not file-3!), get `Hello` printed to the console

## Section 3

Head through the `directories` 0-6 in the `challenges` directory. In each directory there will be a `source.js` and a `destination.js`, but you might have to do some digging to find them 🔎

One of these files will contain your instructions. A `destination.js` file should only `require` from a source file within its numbered directory.
Eg. The destination file in `challenges/0` should _not_ `require` from a source file in `challenges/2`
