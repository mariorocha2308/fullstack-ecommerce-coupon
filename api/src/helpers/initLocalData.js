const { generateRandomTypes, generateRandomInteger } = require('./generator')
const Coupon = require('../models/coupon')
const Generator = require("ids-generator");
const generator = new Generator();

const initLocalData = async () => {

  const isData = await Coupon.findAll()

  if (isData.length === 0) {
    for (let i = 0; i < 180; i++) {
      Coupon.create({
        title: "Coupon",
        type: generateRandomTypes(),
        promoCode: `${generator.generate(6, "all").toUpperCase()}`,
        price: generateRandomInteger(5, 20),
        stock: generateRandomInteger(1, 6),
        discount: generateRandomInteger(5, 75)
      })
    }
  }
}

module.exports = {
  initLocalData
}