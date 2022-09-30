'use strict';
const { Router } = require('express');
const authRoute = require('./auth/authRouter');
const couponRoute = require('./coupon/couponRouter');
const userRoute = require('./user/userRouter'); 
const router = Router();

const init = () => {
    // *** register routes here *** //
    router.use('/auth', authRoute);
    router.use('/coupon', couponRoute);
    router.use('/user', userRoute);
    return router;
};

module.exports = {init};