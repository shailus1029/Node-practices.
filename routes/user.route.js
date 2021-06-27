const express = require("express");
const route = express.Router();

route.get('/test', function (req, res) {
    console.log("testing route");
    res.send({
        success: true,
        message: "api is working successfully"
    });
});

module.exports = route;