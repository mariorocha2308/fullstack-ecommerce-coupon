'use strict';
const router = require('express').Router()
const { getCoupons, findCoupons, getCoupon } = require("./couponService");

router.get('/', (req, res) => {
  const { match } = req.query

  findCoupons(match)
  .then(result => {
    return res.json(result)
  })
})

router.get('/all', (_, res) => {
  getCoupons()
  .then(result => {
    return res.json(result)
  })
})


router.get('/:code', (req, res) => {
  const { code } = req.params
  
  getCoupon(code)
  .then(result => {
    return res.json(result)
  })
})

module.exports = router;