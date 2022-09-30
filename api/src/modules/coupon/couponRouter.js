'use strict';
const router = require('express').Router()
const { getCoupons, findCoupons, getCoupon } = require("./couponService");

router.get('/', findCoupons)
router.get('/all', getCoupons)
router.get('/:code', getCoupon)

module.exports = router;