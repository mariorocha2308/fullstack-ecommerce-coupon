const User = require('../models/user.js')
const bcrypt = require('bcryptjs');

const initAdmin = async () => {

  const existAdmin = await User.findOne({raw : true, nest: true, where: {role: 'admin-default'}})

  if (existAdmin === null) {
    return User.create({
      image: 'https://ui-avatars.com/api/?name=Mario+Dev?background=33709b&color=fff',
      name: 'Dev Mario R.',
      email: 'virgoroch852@gmail.com',
      phoneNumber: '+52 7891048530',
      password: bcrypt.hashSync("dev852", 8),
      role: 'admin-default'
    })
  }
}

module.exports = {
  initAdmin
}