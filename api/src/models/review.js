const { DataTypes } = require('sequelize');
const sequelize = require('./index')

const Review = sequelize.define('review', {
  // Model attributes are defined here
  userImage: {
    type: DataTypes.TEXT
  },
  creator: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Review;