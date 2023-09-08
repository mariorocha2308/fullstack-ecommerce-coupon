const { Op } = require("sequelize")
const { compare, encrypt } = require("../../helpers/encrypt")
const { generateAccessToken } = require("../../helpers/jwt")
const User = require("../../models/user")

const authRegister = async (req, res) => {
  const { name, email, password, image } = req.body

  try {

    User.findOrCreate({
      where: {
        [Op.or]: [{name}, {email}]
      },
      defaults: {
        image, name, email, password: await encrypt(password), role: "user"
      }
    })
    .then(response => {
      if (!response[1]) {
        return res.send({ error: "An account with this email or name already exists" })
      }
      
      res.send({ message: "User was successfully registered" })
    })

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

const authLogin = (req, res) => {
  const { email, password } = req.body

  try {
    
    User.findOne({ 
      where: { email } 
    })
    .then(user => {
      if (!user) return res.send({ error: "Account doest not exists" })

      compare(password, user.dataValues.password)
      .then((isHash) => {
        if (!isHash) return res.send({ error: "Invalid password" })
        
        const profile = {
          image: user.image,
          uid: user.id,
          phone: user.phoneNumber,
          userName: user.name,
          email: user.email,
          role: user.role,
          userToken: generateAccessToken({ id: user.id, email: user.dataValues.email })
        }

        res.json(profile)
      })
    })

  } catch (err) {
    return res.send({ error: "Error in server" })
  }
}

module.exports = {
  authRegister,
  authLogin
};