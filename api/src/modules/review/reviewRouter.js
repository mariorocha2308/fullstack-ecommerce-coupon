'use strict';
const router = require('express').Router()
const { postReview } = require("./reviewService");

router.post('/create', postReview)
// router.put(('/update/:id', putReview))
// router.delete(('/remove/:id', deleteReview))

module.exports = router;