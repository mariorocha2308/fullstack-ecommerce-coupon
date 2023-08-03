'use strict';
const router = require('express').Router()
const { getCoupons, getCouponById, getHotSales } = require("./couponService");

router.get('/all', getCoupons)
router.get('/hotsales', getHotSales)
router.get('/:id', getCouponById)


module.exports = router;