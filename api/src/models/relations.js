const Coupon = require("./coupon")
const Order = require("./order")
const Review = require("./review")
const User = require("./user")

module.exports = function relations() {
  Order.belongsToMany(User, { through: "user_orders" })
  User.hasOne(Order, { through: "user_orders" })

  Coupon.belongsToMany(Review, { through: "coupons_reviews" })
  Review.belongsToMany(Coupon, { through: "coupons_reviews" })
}
