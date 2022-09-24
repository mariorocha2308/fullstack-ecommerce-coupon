'use strict';
const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
const config = require('../config/config');

const sequelize = new Sequelize(config.DATABASE_NAME,
  config.DATABASE_USER,
  config.DATABASE_PASSWORD, {
  host: config.DATABASE_HOST,
  port: config.DATABASE_PORT,
  dialect: config.DATABASE_DIALECT,
  logging: false,
  pool: {
    max: 5,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;