const { DataTypes } = require("sequelize")
const sequelize = require("./index")

const Review = sequelize.define("review", {
  // Model attributes are defined here
  id: {
    allowNull: false,
    defaultValue: DataTypes.UUIDV1,
    primaryKey: true,
    type: DataTypes.UUID,
  },
  userImage: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
})

module.exports = Review