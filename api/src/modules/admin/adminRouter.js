'use strict';
const router = require('express').Router()
const { getTableCoupons, editCoupon, deleteCoupon, createCoupon } = require("./adminService");

router.get('/dash/table', getTableCoupons)
router.post('/dash/create/coupon', createCoupon)
router.put('/dash/edit/coupon/:id', editCoupon)
router.delete('/dash/delete/coupon/:id', deleteCoupon)

module.exports = router;