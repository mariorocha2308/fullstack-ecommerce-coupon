'use strict';
const router = require('express').Router()
const { authRegister, authLogin } = require("./authService");

router.post('/register', authRegister)
router.post('/login', authLogin)

module.exports = router;