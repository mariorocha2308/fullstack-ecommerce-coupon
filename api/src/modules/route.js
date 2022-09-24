'use strict';
const { Router } = require('express');
const couponRoute = require('./coupon/couponRouter');
const router = Router();

const init = () => {
    // *** register routes here *** //
    router.use('/coupon', couponRoute);
    return router;
};

module.exports = {init};