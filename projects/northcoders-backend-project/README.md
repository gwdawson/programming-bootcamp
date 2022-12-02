## Northcoders Backend Project

![](./assets/banner.jpg)

This backend API provides you with an extensive amount of data about articles and users for the purpose of accessing all application data programmatically.

## Useful Links

- [x] [Live API](https://northcoders-news-api-v2.herokuapp.com/api/)
- [x] [Northcoders](https://northcoders.com/)

## Tools and technologies

```json
{
  "Languages": {
    "JavaScript": true
  },
  "Libraries": {
    "Express": true,
    "Dotenv": true,
    "Cors": true,
    "Pg": true,
    "Husky": true,
    "Jest": true,
    "Jest-extended": true,
    "Pg-format": true,
    "Supertest": true
  }
}
```

## Getting started

```yaml
$ git clone https://github.com/gwdawson/northcoders-backend-project.git
# Clones the repository into the current directory.

$ cd northcoders-backend-project
# Changes the current directory to the northcoders-backend-project directory.

$ npm install
# Installs all the dependencies.

$ echo 'PGDATABASE=nc_news' > .env.development
$ echo 'PGDATABASE=nc_news_test' > .env.test
# Creates a .env.development and .env.test file.

you can run several commands:

$ npm start
# Starts the development server.

$ npm run setup-dbs
# Creates the database.

$ npm run seed
# Seeds the database.

$ npm run seed:prod
# Seeds the database for production.

$ npm test
# Starts the test runner.

$ npm run prepare
# Setup for husky.
```

# License

All repositories distributed under the NULL License. See [`NULL`]() for more information.
