require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const http = require('http');

// Importing db connection configurations;
const db = require('./config/db-connection');

//call the database connectivity function;
db();

//initilizing our express app;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// adding route to server;
require('./routes')(app);

//creating http server;
const server = http.createServer(app);

//defining port
const PORT = 5000;

//listening to the port
server.listen(PORT, () => {
  console.log('Server is running on port:', PORT);
});
