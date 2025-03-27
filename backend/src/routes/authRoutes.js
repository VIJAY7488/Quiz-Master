const express = require('express');
const { userRegister } = require('../controllers/authControllers');

const authRouter = express.Router();

authRouter.post('/auth/register', userRegister);

module.exports = authRouter;