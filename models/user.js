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

const usersList = () => {
    const User = mongoose.model("Users", userSchema);
    return new Promise((resolve, reject) => {
        User.find({}, (error, data) => {
            if (error) {
                return reject(error);
            } else {
                return resolve(data);
            }
        });
    });
};

const getUser = (id) => {
    const User = mongoose.model("Users", userSchema);
    return new Promise((resolve, reject) => {
        User.findOne({ userId: id }, (error, data) => {
            if (error) {
                reject(error);
            } else {
                return resolve(data);
            }
        });
    });
};

module.exports = {
    createUser,
    usersList,
    getUser
};