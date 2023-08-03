const User = require("../models/user.js")
const { encrypt } = require("./encrypt")

const initAdmin = async () => {
  User.findOrCreate({
    where: { role: "admin-default" },
    defaults: {
      image: "https://ui-avatars.com/api/?name=Mario+Dev?background=33709b&color=fff",
      name: "Dev Mario Rocha",
      email: "virgoroch852@gmail.com",
      phoneNumber: "+52 7891048530",
      password: await encrypt("dev852"),
      role: "admin-default"
    }
  })
}

module.exports = { initAdmin }