"use strict"
const { Router } = require("express")
const router = Router()

const authRoute = require("./auth/authRouter")
const couponRoute = require("./coupon/couponRouter")
const reviewRoute = require("./review/reviewRouter")

const userRoute = require("./user/userRouter") 
const adminRoute = require("./admin/adminRouter") 

const init = () => {
    // *** register routes here *** //
    router.use("/auth", authRoute)
    router.use("/coupon", couponRoute)
    router.use("/review", reviewRoute)
    // *** entities *** //
    router.use("/user", userRoute)
    router.use("/admin", adminRoute)
    return router
}

module.exports = { init }