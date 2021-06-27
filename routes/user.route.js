const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.post('/create', userController.createUser);

module.exports = route;