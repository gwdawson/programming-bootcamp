# NC Marketplace api for FE sprint

This is an express server for use with the [fe-nc-marketplace sprint](https://github.com/northcoders/fe-nc-marketplace)

The api and database have been created in this repo and you will need to host your own version of it to work with on this sprint.

Follow the instructions below to get it setup:

# Hosting this API on heroku

In order to use this API for your sprint you will need to fork this repo and host your own version of the app

## Hosting a PSQL DB using Heroku

This repo is setup to be hosted on heroku. Follow the steps below to get your own copy of the api up and running.

## 1. Install the Heroku CLI

Install the heroku cli if you haven't already.

```bash
npm i heroku -g
```

## 2. Create a Heroku App

Log into Heroku using their command line interface if you are not already logged in:

```bash
heroku login
```

Clone your fork of this repo and `cd` into the new directory. From there create an app on heroku using the cli.

```bash
heroku create your-app-name
```

Here `your-app-name` should be the name you want to give your application. If you don't specify an app name, you'll get a random one which can sometimes be a bit iffy.

This command will both create an app on Heroku for your account. It will also add a new `remote` to your git repository.
Check this by looking at your git remotes:

```bash
git remote -v
```

## 3. Push Your code up to Heroku

```bash
git push heroku main
```

## 4. Creating a Hosted Database

Go to the heroku site and log in.

- Select your application
- `Configure Add-ons`
- Choose `Heroku Postgres`

The free tier will be adequate for our purposes. This will provide you with a `postgreSQL` pre-created database!

Check that the database exists. Click `settings` on it, and view the credentials. Keep an eye on the URI. Don't close this yet!

## 5. Seeding the Production Database

Check that your database's url is added to the environment variables on Heroku:

```bash
heroku config:get DATABASE_URL
```

If you are in your app's directory, and the database is correctly linked as an add on to Heroku, it should display a DB URI string that is exactly the same as the one in your credentials.

Make sure to **run the seed prod script** from your `package.json`:

```bash
npm install

npm run seed-prod
```

## 6. Review Your App

View your hosted app by visiting your apps URL on heroku or using the `heroku open` command. You should see the docs for your API on the homepage and a path such as `/api/items` should return some results from the database.

```bash
heroku open
```

Any issues should be debugged with:

```bash
heroku logs --tail
```

### Seeding

There are `seed-dev` and `seed-prod` scripts for seeding the database. If you mess up your data and want to reset it at any point use the `seed-prod` script to return to the initial state.

## Docs

The documentation for the api is hosted on the path `/`. This contains a complete API reference with all of the endpoints available.
