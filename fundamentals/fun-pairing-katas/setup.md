# Set Up Guide

## Install the necessary extensions

## To get this repo onto your computer

- On the command line, navigate to the folder you want this repo to be in.
- When pairing, one of you should click 'Fork' in the top right of the Northcoders' repo.
- Once you have forked your own version of this repo, both of you should clone that version to your local machine.
- To do this, on the command line type `git clone`, paste in the repo address, and press enter.

## To commit your code

- Add the files you want to commit to the staging area by typing `git add` followed by the files and folders you wish to commit (for example, `git add index.js`).
- To commit, type `git commit -m 'my beautiful commit message'` followed by a short description of the functionality you have achieved since your last commit.
- Resolve any issues that are preventing you from committing.
- To push to github, type `git push origin main`.

## To pull from a repo your pair has worked on

- Ensure you are in the project git folder on your computer.
- Ensure your pair's push has succeeded.
- Type `git pull origin main` to pull any changes that have been made to your repo.

## Setup your node project from scratch

Make sure you are in your project directory!

1. Create a `package.json` from the start

- **Command**: `npm init -y`

2. Install the Jest library so we can write our tests

- **Command**: `npm install --save-dev jest`

3. Setup test script:

Add the following section to your package.json:

```json
{
  "scripts": {
    "test": "jest --watch"
  }
}
```

## Node commands

- To run your tests: `npm test`

You can see what these commands are aliases for by checking your package.json.

## Files in your repository

- _node_modules_ hold all the dependencies / libraries that your project relies on (for example, jest, for testing).
- `.gitignore` contains the names of all your files that you don't want committed to github. This includes node_modules, as we don't want to commit tonnes of unnecessary code that we can easily fetch with npm install.
- `__tests__`is the folder for your tests - `range.test.js` tests your function in `range.js`, etc.
- `package.json` contains information used by npm to organise your project.
- `package-lock.json` contains the information needed to link your node modules.
- `README.md` is instructions for using and running a project! READ IT! Every repo should have one. You can open it in Preview (right click) for a prettier version (using the markdown type formatting).
