const { Op } = require("sequelize")
const Coupon = require("../../models/coupon")
const Review = require("../../models/review")

const getCoupons = (req, res) => {
  const { type, discount, price, page, pagesize } = req.query

  const offsetSize = (page - 1) * pagesize
  const [startDiscount, endDiscount] = discount && discount.split(",")
  const [startPrice, endPrice] = price && price.split(",")

  try {

    Coupon.findAndCountAll({ 
      offset: offsetSize, limit: pagesize, 
      where: {
        [Op.and]: [ 
          type && {type: {[Op.iLike]: `%${type}%`}},
          discount && {discount: {[Op.between] : [startDiscount, endDiscount]}},
          price && {price: {[Op.between] : [startPrice , endPrice]}}
        ]
      },
      attributes: ["id", "title", "type", "price", "discount"],
    })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "There are not coupons" }))

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const getCouponById = (req, res) => {
  const { id } = req.params

  try {

    Coupon.findOne({
      where: { id },
      include: Review,
      attributes: ["id", "title", "type", "price", "discount", "description"],
    })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "Coupon does not exist" }))

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const getHotSales = (req, res) => {

  try {

    Coupon.findAll({
      where: {
        discount: {[Op.gt]: 50},
        price: {[Op.lt]: 10},
      },
      attributes: ["id", "title", "type", "price", "discount"],
    })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "There are not coupons" }))
  
  } catch (err) {
    return res.send({ error: "Error in server" })
  }

}

module.exports = {
  getCoupons,
	getCouponById,
  getHotSales
}
