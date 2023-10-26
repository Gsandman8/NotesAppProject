// Creates an express server and assigns app as the express server object.
const express = require('express');
const app = express();
//Links the routes/index.js file
const routes = require('./routes');
//Sets the port to 4000 or the environment variable PORT
const PORT = process.env.PORT || 4000;
//Creates the req.body object
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use the routes/index.js file for all routes
app.use(routes);
//Allows use to use all contents of the public folder
app.use(express.static(__dirname + "/public"));
//Activates the server at the PORT
app.listen(PORT, () => {
    console.log(`API server now on port https://localhost:${PORT} !`);
  });