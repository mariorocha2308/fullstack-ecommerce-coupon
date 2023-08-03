const { DataTypes } = require("sequelize")
const sequelize = require("./index")

const User = sequelize.define("user", {
  // Model attributes are defined here
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING, 
    allowNull: false
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = User