const userService = require('../services/user.service');
const uuid = require("uuid");
const { handleError } = require("../utils/errorHandler");

exports.createUser = (req, res) => {
    let errors = [];
    let isError = false;
    const body = req.body && req.body.data ? req.body.data : {};

    return new Promise((resolve, reject) => {
        if (Object.keys(body).length === 0) {
            handleError("noPayload", errors);
            return res.status(400).json({ errors: errors });
        }
        if (!body.firstname) {
            handleError("invalidFirstname", errors);
            isError = true;
        }
        if (!body.email) {
            isError = true;
            handleError("invalidEmail", errors);
        }
        if (!body.password) {
            isError = true;
            handleError("invalidPassword", errors);
        }
        if (!body.username) {
            isError = true;
            handleError("invalidUsername", errors);
        }
        if (isError) {
            return reject(errors);
        } else {
            return resolve(true);
        }
    }).then(resolved => {
        body.userId = uuid.v4();
        return userService.createUser(body);
    }).then(data => {
        res.status(200).json({ success: true, data: data });
    }).catch(err => {
        res.status(400).json({ success: false, errors: err });
    });
};