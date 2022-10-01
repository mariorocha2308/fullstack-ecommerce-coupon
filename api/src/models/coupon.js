const { DataTypes } = require('sequelize');
const sequelize = require('./index')
// const User = require('./user')

const Coupon = sequelize.define('coupon', {
  // Model attributes are defined here
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
  stock: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  discount: {
    type: DataTypes.SMALLINT,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Coupon;