const { timeStamp } = require('console');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true},
    role:{type: String, required: true},
    qualifications:{type: [Number, String], required: true},
    dob:{type: Date, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true}
},{timeStamp: true});

// Generate JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({id: this._id}, JWT_SECRET, {expiresIn: '1d'})
};

const User = mongoose.model('User', userSchema);

module.exports = User;