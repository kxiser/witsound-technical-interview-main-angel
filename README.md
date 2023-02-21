# Introduction
This repository is intended for a technical test of Witsound Technologies.

# Tasks

The test consists of two small parts: Server and Client.
Try to code with clean architectures and patterns like SOLID in mind.

## Server
The expected tasks are:
- Creation of 2 http endpoints in our server. They should be able to resolve our client's requests.

- These two routes are already created and stored in `server/routes/index.ts`. The expected work for each route is:

  - http post `/name`: save a name in the DB. Validate that the name does not start with Z.
  - http get `/name`: get and return all the names of the DB.
  
It is a generally a good idea to store the handlers of the different routes in the "controllers" folder.
SQLite will be used to store a list of names (everything is already installed and prepared, you just need to program it).
Important note: keep an architecture that future proof the mutability of the DB. Feel free to create other components or folders if needed.


### Help with SQLite

There is a file called `server/db/example.ts`. This file shows how to access the database in case you don't have previous experience with SQLite. The file can be executed with: ```yarn tsx server/db/example.ts```

## Client
The expected tasks are:
- Creation of a form using React and Typescript with a single text field called "name" and a submit button.

- Clicking the submit button should make an http post request to our server `http://localhost:3000/name`.

- After making the post request, make a get request to `http://localhost:3000/name`. This should reuturn the list of names stored in the DB. 

The entire environment is already prepared and it is stored in the "Client" folder. 
Don't worry too much about the style of the form and the way of showing the list of names.





# Requirements

- Nodejs. The latest LTS should be fine.

# How to start

1. Clone this repository.

2. Install the dependencies with `yarn install`.

3. Run the project with `yarn start`. This command will start two servers:

      - Client: [localhost:8000](http://localhost:8000).
      - Server: [localhost:3000](http://localhost:3000).

**It is NOT necessary to restart the server when files are changed, the system will do it automatically.**

# Technologies used in this project

- TSX as runtime to run the server without having to transpile the Typescript.
- Express as http server.
- better-sqlite as a library to access SQLite database.
- React as front-end library.
- Vite as a React and Typescript transpiler.



