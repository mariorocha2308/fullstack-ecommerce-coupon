const { Op } = require('sequelize')
const Coupon = require('../../models/coupon')
const Review = require('../../models/review')
const User = require('../../models/user')

const getCoupons = (_, res) => {
  try {
    Coupon.findAll({ include: [Review, User] })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "" }))
  } catch (error) {
    return res.send({ error: "" })
  }
}

const findCoupons = (req, res) => {
  const { match } = req.query

  try {
    Coupon.findAll({where: {
			[Op.or]: [
				{type: {[Op.iLike]: `%${match}%`}}, 
				{promoCode: {[Op.iLike]: `%${match}%`}}
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

const filterCoupon = (req, res) => {
  const { type, discount, price } = req.query
  // const [startDiscount, endDiscount] = discount?.split('-') ?? []
  // const [startPrice, endPrice] = price?.split('-') ?? []

  try {
    Coupon.findAll({where: {
      [Op.or]: [
				{type: {[Op.iLike]: `%${type}%`}}, 
				{discount: {[Op.between] : [30, 70]}},
				// {price: {[Op.between] : [startPrice , endPrice ]}}
			]
    }})
    .then(result => res.json(result))
    .catch(() => res.send({ error: "" }))
  } catch (error) {
    return res.send({ error: "" })
  }
}

module.exports = {
  getCoupons,
	findCoupons,
	getCoupon,
  filterCoupon
};
