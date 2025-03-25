const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true},
    qualifications:{type: Number, required: true},
    dob:{type: Date, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;