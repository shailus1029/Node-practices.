const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
    {
        firstname: {
            type: String
        },
        lastname: {
            type: String
        },
        username: {
            type: String
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        mobile: {
            type: Number,
            unique: true
        },
        userId: {
            type: String,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);


const createUser = (body) => {
    const User = mongoose.model('Users', userSchema);
    const newUser = new User(body);
    return new Promise((resolve, reject) => {
        newUser.save((error, data) => {
            if (error) {
                reject({ error });
            } else {
                resolve(data);
            }
        });
    });
};

module.exports = {
    createUser
};