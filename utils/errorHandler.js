const { errorTypes } = require("./constant");

function handleError(errType, arr) {
    return arr.push({
        code: errorTypes[errType].code,
        message: errorTypes[errType].message
    });
}

module.exports = {
    handleError
};