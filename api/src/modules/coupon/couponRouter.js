'use strict';
const router = require('express').Router()
const { getCoupons, getCouponById, getHotSales, getListCoupons } = require("./couponService");

router.get('/all', getCoupons)
router.get('/hotsales', getHotSales)
router.post('/listof', getListCoupons)
router.get('/:id', getCouponById)


module.exports = router;