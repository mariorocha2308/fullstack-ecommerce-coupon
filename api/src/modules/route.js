'use strict';
const { Router } = require('express');
const router = Router();

const authRoute = require('./auth/authRouter');
const couponRoute = require('./coupon/couponRouter');
const userRoute = require('./user/userRouter'); 
const reviewRoute = require('./review/reviewRouter')

const init = () => {
    // *** register routes here *** //
    router.use('/auth', authRoute);
    router.use('/coupon', couponRoute);
    router.use('/user', userRoute);
    router.use('/review', reviewRoute)
    return router;
};

module.exports = {init};