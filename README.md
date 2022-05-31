## Assumptions

In this workshop, I assume

- You can install things on your computer
- You have basic knowledge about the shell: how to run commands, change the current directory, relative and absolute paths, etc.
- You have basic programming knowledge (e.g you know what a function is and how to use one in whatever language)

## Before starting

### Installation

1. Install Node.js version LTS (probably is 16.15.0) [(link)](https://nodejs.org/en/)
2. Confirm it's installed by opening your shell and typing `node --version`. It should show the version you installed.
3. Update npm with `npm install -g npm` (if this gives an error, you may need to use `sudo npm install -g npm`)

### Initializing the React project

4. In the shell, navigate to where you would like the project to be created and run `npx create-react-app inspire-workshop`. This will create a directory containing a basic React project titled "inspire-workshop".
5. `cd` to this directory and run `npm start`. Your web browser should open to show this spinning image: ![](./inspire-workshop/src/logo.svg)
6. Done! Your basic React project is set up.
