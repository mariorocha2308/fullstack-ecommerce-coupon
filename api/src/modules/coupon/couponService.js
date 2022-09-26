const { Op } = require('sequelize')
const Coupon = require('../../models/coupon')

const getCoupons = () => {
  return new Promise((resolve, reject) => {
    try {
      Coupon.findAll({raw : true, nest: true})
      .then(result => {
        resolve(result)
      })
    } catch (error) {
      reject({ error: "Database does not send all counpons" })
    }
  })
}

const findCoupons = (match) => {

  return new Promise((resolve, reject) => {
    try {
      Coupon.findAll({raw : true, nest: true, where: {
				[Op.or]: [
					{type: {[Op.iLike]: `%${match}%`}}, 
					{promoCode: {[Op.iLike]: `%${match}%`}}
				]
			}})
      .then(result => {
        resolve(result)
      })
    } catch (error) {
      reject({ error: "Database does not match coupons" })
    }
  })
}

const getCoupon = (code) => {

  return new Promise((resolve, reject) => {
    try {
      Coupon.findOne({raw : true, nest: true, where: { 
				promoCode: code
			}})
      .then(result => {
        resolve(result)
      })
    } catch (error) {
      reject({ error: "Database does not match coupons" })
    }
  })
}

module.exports = {
  getCoupons,
	findCoupons,
	getCoupon
};
