const bcrypt = require("bcryptjs")

const encrypt = async (textPlain) => {
  return await bcrypt.hash(textPlain, 10)
}

const compare = async (passwordPlain, hashPassword) => {
  return await bcrypt.compare(passwordPlain, hashPassword)
}

module.exports = {
  encrypt,
  compare
}