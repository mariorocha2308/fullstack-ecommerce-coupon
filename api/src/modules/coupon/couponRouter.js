'use strict';
const router = require('express').Router()
const { getCoupons, findCoupons, getCoupon, filterCoupon } = require("./couponService");

router.get('/all', getCoupons)
router.get('/find', findCoupons)
router.get('/filter', filterCoupon)
router.get('/:code', getCoupon)

module.exports = router;