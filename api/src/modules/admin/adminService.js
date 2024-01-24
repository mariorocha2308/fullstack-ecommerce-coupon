const { Op } = require("sequelize")
const Coupon = require("../../models/coupon")
const { uid } = require("../../helpers/initLocalData")

const getTableCoupons = (req, res) => {
  const { promoCode, page, pagesize } = req.query
  const offsetSize = (page - 1) * pagesize

  try {

    Coupon.findAndCountAll({
      offset: offsetSize, limit: pagesize,
      where: {
        [Op.and]: [ 
          promoCode && {promoCode: {[Op.iLike]: `%${promoCode}%`}}
        ]
      },
      attributes: ["id", "title", "type", "price", "discount", "isSuitable", "promoCode"],
    })
    .then(result => res.json(result))
    .catch(() => res.send({ error: "There are not table coupons" }))
  
  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const editCoupon = (req, res) => {
  const { id } = req.params
  const { title, type, price, discount, isSuitable, promoCode } = req.body

  try {

    Coupon.update({
      title, type, price, discount, isSuitable, promoCode
    },{where: {id}})
    .then(() => res.send({message: "Coupon updated successfully"}))
    .catch(() => res.send({ error: "This coupon cant be updated" }))
  
  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const deleteCoupon = (req, res) => {
  const { id } = req.params

  try {

    Coupon.destroy({
      where: {id}
    })
    .then(() => res.send({message: "Coupon deleted successfully"}))
    .catch(() => res.send({ error: "This coupon cant be deleted" }))
  
  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const createCoupon = (req, res) => {
  const { title, type, price, discount, description } = req.body

  try {
    Coupon.create({
      promoCode: uid(),
      isSuitable: true, 
      title, type, price, discount, description
    })
    .then(() => res.send({message: "Coupon created successfully"}))
    .catch(() => res.send({ error: "This coupon cant be created" }))

  } catch (error) {
    return res.send({ error: "Error in server" })
  }
}

module.exports = {
  getTableCoupons,
  editCoupon,
  deleteCoupon,
  createCoupon
}