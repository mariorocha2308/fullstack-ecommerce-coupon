'use strict';
const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  `postgresql://${config.PGUSER}:${config.PGPASSWORD}@${config.PGHOST}:${config.PGPORT}/${config.PGDATABASE}`,
  { logging: false, native: false }
);

module.exports = sequelize;