const catchAsyncError = require("../middleware/catchAsyncError");
const User = require("../models/userModels");
const bcrypt = require('bcrypt');
const ErrorHandler = require("../utils/errorhandlers");


//Create Account
const userRegister = catchAsyncError(async(req, res, next) => {
    const {fullName, email, role, qualifications, dob, password, confirmPassword} = req.body;

    if(password !== confirmPassword){
        return next(new ErrorHandler("Password do not match", 400))
    };

    const hashedPassword = await bcrypt.hash(password, confirmPassword, 10);

    const user = await User.create({
        fullName,
        email,
        role,
        qualifications,
        dob,
        password: hashedPassword,
    });

    //Generate JWT Token
    const token = user.getJwtToken();

    res.cookie('token', 
        token, {
        httpOnly: true,
        secure: true,
        sameSite: 'Strict',
        maxAge: 24 * 60 * 60 * 1000    
    });

    res.status(201).json({
        success: true,
        message: "User registered successfully",
        token,
    });
});

module.exports = {
    userRegister,
}