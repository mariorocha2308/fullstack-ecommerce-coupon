const Coupon = require("../models/coupon")
const ShortUniqueId = require("short-unique-id")
const LoremIpsum = require("lorem-ipsum").loremIpsum
const { generateRandomTypes, generateRandomInteger } = require("./generator")

const initLocalData = () => {

  const uid = new ShortUniqueId({ 
    length: 10,
    dictionary: "alphanum_upper",
  })

  Coupon.count()
  .then(response => {
    if (!response) {
      for (let i = 0; i < 250; i++) {
        Coupon.create({
          title: "Coupon",
          type: generateRandomTypes(),
          promoCode: uid(),
          price: generateRandomInteger(5, 20),
          discount: generateRandomInteger(5, 75),
          description: LoremIpsum({
            units: "paragraphs"
          })
        })
      }
    }
  })
}

module.exports = { initLocalData }