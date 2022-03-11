# Setup node project from start...

1. Create a package.json from the start

- Command: `npm init -y`

2. Install the Jest library so we can use it for our tests!

- Command: `npm install -D jest`

3. Setup test command:

Command

Add the following section to your package.json:

**nb** if you want jest to automatically re-run your tests whenever you change a file add the `--watch` flag to the end 

```json
{
  "scripts": {
    "test": "jest"
  }
}
```