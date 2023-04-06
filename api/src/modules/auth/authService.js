const { Op } = require('sequelize')
const User = require('../../models/user')
const { compare, encrypt } = require('../../helpers/encrypt')
const { generateAccessToken } = require('../../helpers/jwt')

const authRegister = async (req, res) => {
  const {image, name, email, password, phoneNumber } = req.body
  const encryptPassword = await encrypt(password)

  try {
    const existUser = await User.findOne({raw : true, nest: true, where: {
      [Op.or]: [{name}, {email}, {phoneNumber}]
    }})

    if (existUser) {
      compare(password, existUser.password)
      .then((isHash) => {
        if (isHash === true) return res.send({ error: 'There is a registered user' })
        else if (isHash === false) return res.send({ error: 'Account already exists' })
      })
    }

    if (!existUser) {
      User.create({ image, name, email, password: encryptPassword, phoneNumber, role: 'user'})
      .then(() => res.send({ message: 'Successfully registered' }))
      .catch(() => res.send({ error: 'User cant be created' }))
    }
  } catch (error) {
    return res.send({ error: 'Failed' })
  }
}

const authLogin = async (req, res) => {
  const { userTag, password } = req.body

  try {
    const isAccount = await User.findOne({raw : true, nest: true, where: {email: userTag}})

    if (isAccount) {
      compare(password, isAccount.password)
      .then((isHash) => {
        if (isHash === true) {

          const token = generateAccessToken({id: isAccount.id, email: isAccount.email})

          const profile = {
            image: isAccount.image,
            userName: isAccount.name,
            email: isAccount.email,
            role: isAccount.role,
            userToken: token
          }

          return res.json(profile)
        } else if (isHash === false) res.send({ error: 'Invalid password' })
      })
    }

    if (!isAccount) {
      return res.send({ error: 'The account does not exist' })
    }
  } catch (error) {
    return res.send({ error: 'Error in server' })
  }
}

module.exports = {
  authRegister,
  authLogin
};