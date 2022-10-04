const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Review = sequelize.define('review', {
  // Model attributes are defined here
  image: {
    type: DataTypes.TEXT
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Review;