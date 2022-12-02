# Prescription Prompt Back-End Project

This project is the backend for our Final Project, it has been designed with the intended purpose to be link with our frontend project to end up with a fully functioning app.

This server can be used to create users, add Medications and list all current medications. Future additions will see a chat integration between concerned 3rd party members and current app users as well as the ability to see more information by integrating the NHS api.

It has been tested thoroughly to ensure a secure and reliable experience and it has been built as efficiently as possible.

# Cloning the Repo

In order to clone the repository, you must enter the following commands into the terminal:

```bash
$ git clone https://github.com/prescription-prompt/official-final-project-backend.git
$ cd official-final-project-backend
$ code .
```

# Tools Required

The list of dependencies used for this project are as follows:

```bash
Express.js - Server Implementation
MongoDB - Used for backend Database
Mongoose - Setting up Database Interaction
DotEnv - Set Up connection with MongoDB
Jest & SuperTest - Testing the Server
```

# Installing Dependencies

To ensure all the right dependencies are added, just run the following command into the VS code Terminal:

```bash
$ npm install
```

This command should install all the dependencies used to create this project and should get you set up to use the repository.

# Running the Server and Tests

To run the server all you need to do is run this command in your terminal after installing all of your dependencies:

```bash
$ npm run
```

Finally to run your tests you need to run one command in your terminal:

```bash
$ npm test
```

# Creating your .env Files

You will need to create two .env files for this project: .env.test and .env.development. Into each, add MONGODB_URI=<Your_MongoDB_connection_URI>, with the correct database name for that environment. Double check that these .env files are .gitignored in order to avoid any future issues.

# Node.js & MongoDB

- NodeJS: v16.14
- MongoDB: v4.6
- Mongoose: v6.3
