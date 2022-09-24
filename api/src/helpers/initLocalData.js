const { generateRandomTypes, generateRandomInteger } = require('./generator')
const Coupon = require('../models/coupon')
const Generator = require("ids-generator");
const generator = new Generator();

const initLocalData = async () => {

  const isData = await Coupon.findAll()

  if (isData.length === 0) {
    for (let i = 0; i < 150; i++) {
      Coupon.findOrCreate({
        title: "Coupon",
        type: generateRandomTypes(),
        promoCode: `${generator.generate(8, "all").toUpperCase()}`,
        price: generateRandomInteger(5, 20),
        stock: generateRandomInteger(1, 6),
        discountPercent: generateRandomInteger(5, 75)
      })
    }
  }
}

module.exports = {
  initLocalData
}