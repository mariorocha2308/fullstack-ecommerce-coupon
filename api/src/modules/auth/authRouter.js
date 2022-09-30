'use strict';
const router = require('express').Router()
const { authRegister } = require("./authService");

router.post('/register', authRegister)

module.exports = router;