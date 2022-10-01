const User = require('../models/user.js')
const { encrypt } = require('./encrypt')

const initAdmin = async () => {

  const existAdmin = await User.findOne({where: {role: 'admin-default'}})
  const hashPasswordAdmin = await encrypt("dev852")

  if (existAdmin === null) {
    User.create({
      image: 'https://ui-avatars.com/api/?name=Mario+Dev?background=33709b&color=fff',
      name: 'Dev Mario R.',
      email: 'virgoroch852@gmail.com',
      phoneNumber: '+52 7891048530',
      password: hashPasswordAdmin,
      role: 'admin-default'
    })
  }
}

module.exports = {
  initAdmin
}