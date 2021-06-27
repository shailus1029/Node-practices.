const errorTypes = {
    noPayload: { code: "NO PAYLOAD", message: "Payload is missing" },
    invalidEmail: { code: "INVALID EMAIL", message: "Invalid email" },
    invalidFirstname: { code: "MISSING FIRSTNAME", message: "Invalid firstname" },
    invalidPassword: { code: "INVALID PASSWORD", message: "Invalid Password" },
    invalidUsername: { code: "INVALID USERNAME", message: "Invalid username" },
    invalidMobileNumber: { code: "INVALID MOBILENUMBER", message: "Invalid mobile number" }
};

module.exports = {
    errorTypes
};