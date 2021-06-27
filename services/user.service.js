const { response } = require('express');
const userModel = require('../models/user');

exports.createUser = async function (body) {
    return userModel.createUser(body).then(response => {
        return response;
    });
};

exports.usersList = async function () {
    return userModel.usersList().then(response => {
        return response;
    });
};