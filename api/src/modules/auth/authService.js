const { Op } = require('sequelize')
const User = require('../../models/user')
const { compare, encrypt } = require('../../helpers/encrypt')
const { generateAccessToken } = require('../../helpers/jwt')

const authRegister = async (req, res) => {
  const { name, email, password } = req.body
  const encryptPassword = await encrypt(password)

  try {
    const existUser = await User.findOne({raw : true, nest: true, where: {
      [Op.or]: [{name}, {email}]
    }})

    if (existUser) {
      compare(password, existUser.password)
      .then((isHash) => {
        if (isHash === true) return res.send({ error: 'There is a registered user' })
        else if (isHash === false) return res.send({ error: 'Account already exists' })
      })
    }

    if (!existUser) {
      User.create({ name, email, password: encryptPassword, role: 'user'})
      .then(() => res.send({ message: 'Successfully registered' }))
      .catch(() => res.send({ error: 'User cannot be created' }))
    }
  } catch (error) {
    return res.send({ error: 'Error in server' })
  }
}

const authLogin = async (req, res) => {
  const { email, password } = req.body

  try {
    const isAccount = await User.findOne({raw : true, nest: true, where: {email}})

    if (isAccount) {
      compare(password, isAccount.password)
      .then((isHash) => {
        if (isHash === true) {

          const token = generateAccessToken({id: isAccount.id, email: isAccount.email})

          const profile = {
            image: isAccount.image,
            phone: isAccount.phoneNumber,
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