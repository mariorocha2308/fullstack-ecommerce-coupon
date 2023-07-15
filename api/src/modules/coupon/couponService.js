const { Op } = require('sequelize')
const Coupon = require('../../models/coupon')
const Review = require('../../models/review')
const User = require('../../models/user')

const getCoupons = (req, res) => {
  const { type, discount, price, page, pagesize } = req.query

  const offsetSize = (page - 1) * pagesize
  const [startDiscount, endDiscount] = discount ? discount.split(',') : ''
  const [startPrice, endPrice] = price ? price.split(',') : ''

  try {
    Coupon.findAndCountAll({ include: [Review, User], offset: offsetSize, limit: pagesize, where: {
      [Op.and]: [ 
        type ? {type: {[Op.iLike]: `%${type}%`}} : '',
				discount ? {discount: {[Op.between] : [startDiscount, endDiscount]}} : '',
        price ? {price: {[Op.between] : [startPrice , endPrice]}} : ''
			]
		}})
    .then(result => res.json(result))
    .catch(() => res.send({ error: "" }))
  } catch (error) {
    return res.send({ error: "" })
  }
}

const getCoupon = (req, res) => {
  const { id } = req.params

  try {
    Coupon.findOne({where: { id }})
    .then(result => res.json(result))
    .catch(() => res.send({ error: "" }))
  } catch (error) {
    return res.send({ error: "" })
  }
}

const getHotSales = (_, res) => {
  try {
    Coupon.findAll({where: {
      discount: {[Op.gt]: 50},
      price: {[Op.lt]: 10},
    }, include: [Review, User] })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "" }))
  } catch (error) {
    return res.send({ error: "" })
  }
}

module.exports = {
  getCoupons,
	getCoupon,
  getHotSales
};
