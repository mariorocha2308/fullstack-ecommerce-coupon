'use strict';
const router = require('express').Router()
const { getCoupons } = require("./couponService");

router.get('/all', async (_, res) => {
  
  const response = await getCoupons()
  return res.sendStatus(200).json(response)
});

module.exports = router;