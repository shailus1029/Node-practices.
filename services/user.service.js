const userModel = require('../models/user');

exports.createUser = async function (body) {
    return userModel.createUser(body).then(response => {
        return response;
    });
};