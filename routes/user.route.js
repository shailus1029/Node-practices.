const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.post('/create', userController.createUser);
route.get('/userList', userController.usersList);

module.exports = route;