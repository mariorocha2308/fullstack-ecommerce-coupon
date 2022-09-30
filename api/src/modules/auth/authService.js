const User = require('../../models/user')
const bcrypt = require('bcryptjs')

const authRegister = async (req, res) => {
  const {image, name, email, password, phoneNumber } = req.body

  try {
    const isRegister = await User.findOne({raw : true, nest: true, where: {
      name: name.toLowerCase(), email, phoneNumber
    }})

    if (isRegister.password) {
      bcrypt.compareSync(isRegister.password, password)
    }

    if (isRegister === null) {
      return User.create({
        image, name, email, password: bcrypt.hashSync(password, 8), phoneNumber
      })
      .then(() => res.send('User created successfully'))
      .catch(() => res.send({ error: 'User cant be created' }))
    } else {
      return res.send({ error: "user exist" })
    }
  } catch (error) {
    res.send({ error: "" })
  }
}

// const authLogin = (match) => {

//   return new Promise((resolve, reject) => {
//     try {
//       Coupon.findAll({raw : true, nest: true, where: {
// 				[Op.or]: [
// 					{type: {[Op.iLike]: `%${match}%`}}, 
// 					{promoCode: {[Op.iLike]: `%${match}%`}}
// 				]
// 			}})
//       .then(result => {
//         resolve(result)
//       })
//     } catch (error) {
//       reject({ error: "Database does not match coupons" })
//     }
//   })
// }

module.exports = {
  authRegister
};