'use strict';
const router = require('express').Router()
const { verifyToken } = require('../../helpers/verifyToken');
const { postReview, putReview, deleteReview } = require("./reviewService");

router.use(verifyToken)

router.post('/post', postReview)
router.put('/put/:id', putReview)
router.delete('/delete/:id', deleteReview)

module.exports = router;