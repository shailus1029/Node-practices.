const userService = require('../services/user.service');
const uuid = require("uuid");

exports.createUser = (req, res) => {
    let errors = [];
    let isError = false;
    const body = req.body && req.body.data ? req.body.data : {};

    return new Promise((resolve, reject) => {
        return resolve(true);
    }).then(resolved => {
        body.userId = uuid.v4();
        return userService.createUser(body);
    }).then(data => {
        res.status(200).json({ success: true, data: data });
    }).catch(err => {
        res.status(400).json({ success: false, errors: err });
    });
};