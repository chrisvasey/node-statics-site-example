# Example of a static site in Node.js
This repo is a very basic example of serving a static HTML pages using Node.js and Express.js.
It has two routes:
- / which shows the home.html
- /about which shows the about.html

The static pages themselves are stored in the /pages directory of the project and the CSS and JavaScript file that is loaded on them both are saved int he /assets directory.

## Getting started
First run the clone command in your terminal:
```
git clone git@github.com:chrisvasey/node-statics-site-example.git
```
Inside the directory install Express and Path package by running:
```
npm install
```
Once installed, run:
```
node index.js
```
By default this will start a web server on http://localhost:3333
You can change this by changing the "port" variable in the index.js file
