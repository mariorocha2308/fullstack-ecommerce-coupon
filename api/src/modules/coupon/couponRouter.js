'use strict';
const router = require('express').Router()
const { getCoupons } = require("./couponService");

router.get('/all', async (_, res) => {
  getCoupons()
  .then(result => {
    return res.json(result)
  })
});

module.exports = router;