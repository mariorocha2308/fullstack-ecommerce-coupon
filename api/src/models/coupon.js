const { DataTypes } = require("sequelize")
const sequelize = require("./index")
const Review = require("./review")

const Coupon = sequelize.define("coupon", {
  // Model attributes are defined here
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  promoCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  discount: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  isSuitable: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
})

Coupon.belongsToMany(Review, { through: "coupons_reviews" })
Review.belongsToMany(Coupon, { through: "coupons_reviews" })

module.exports = Coupon