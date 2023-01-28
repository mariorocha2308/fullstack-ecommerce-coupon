'use strict';
const router = require('express').Router()
const { getCoupons, findCoupons, getCoupon, getHotSales } = require("./couponService");

router.get('/all', getCoupons)
router.get('/find', findCoupons)
router.get('/hotsales', getHotSales)
router.get('/:code', getCoupon)


module.exports = router;