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

exports.getUser = async function (id) {
    return userModel.getUser(id).then(response => {
        return response;
    });
};