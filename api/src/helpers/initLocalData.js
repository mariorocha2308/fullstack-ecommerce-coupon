const { generateRandomTypes, generateRandomInteger } = require('./generator')
const Coupon = require('../models/coupon')
const ShortUniqueId = require('short-unique-id');

const initLocalData = async () => {

  const uid = new ShortUniqueId({ 
    length: 10,
    dictionary: 'alphanum_upper',
  });
  const isData = await Coupon.findAll()

  if (isData.length === 0) {
    for (let i = 0; i < 250; i++) {
      Coupon.create({
        title: "Coupon",
        type: generateRandomTypes(),
        promoCode: uid(),
        price: generateRandomInteger(5, 20),
        discount: generateRandomInteger(5, 75)
      })
    }
  }
}

module.exports = {
  initLocalData
}