const userService = require('../services/user.service');
const uuid = require("uuid");
const { handleError } = require("../utils/errorHandler");
const { logData } = require("../utils/logger");

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
        logData(req.url, {}, data, new Date(), "guest-user", {});
        res.status(200).json({ success: true, data: data });
    }).catch(err => {
        logData(req.url, {}, { error: true, err }, new Date(), "guest-user", {});
        res.status(400).json({ success: false, errors: err });
    });
};

exports.usersList = (req, res) => {
    return new Promise((resolve, reject) => {
        return resolve(true);
    }).then(resolved => {
        return userService.usersList();
    }).then(data => {
        logData(req.url, {}, data, new Date(), "guest-user", {});
        const filterdData = data.map(user => {
            let obj = {};
            obj.id = user._id;
            obj.userId = user.userId;
            obj.firstname = user.firstname;
            obj.lastname = user.lastname;
            obj.email = user.email;
            obj.username = user.username;
            return obj;
        });
        res.status(200).json({ success: true, userList: filterdData });
    }).catch(error => {
        logData(req.url, {}, { error: true, err }, new Date(), "guest-user", {});
        res.status(400).json({ success: false, errors: error });
    });
};

exports.getUser = (req, res) => {
    return new Promise((resolve, reject) => {
        return resolve(true)
    }).then(resolved => {
        return userService.getUser(req.params.userId);
    }).then(data => {
        res.status(200).json({ success: true, userDetails: data });
    }).catch(error => {
        res.status(400).json({ success: false, errors: error });
    })
}