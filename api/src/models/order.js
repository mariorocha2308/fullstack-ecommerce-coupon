const { DataTypes } = require("sequelize")
const sequelize = require("./index")

const Order = sequelize.define("order", {
  // Model attributes are defined here
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  uidUser: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  couponsRef: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Order