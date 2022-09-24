// https://www.npmjs.com/package/create-express-template
'use strict';
const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const bodyParser = require("body-parser");
const routerConfig = require('./modules/route');
const config = require('./config/config');
const sequelize = require('./models/index')
const { initLocalData } = require('./helpers/initLocalData');

// let whitelist = ['http://localhost:3000']

let configCors = {
  origin: '*'
  // origin: function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
}

const init = async () => {
  // *** express instance *** //
  const app = express();

  // parse requests of content-type - application/json
  app.use(bodyParser.json());
  // parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(configCors));
  app.use(morgan("dev"))
  
  sequelize.sync({force: false})
  .then(async () => {
    await initLocalData()
  })
  
  app.listen(config.SERVER_PORT, () => {
    console.log(`Listening on port ${config.SERVER_PORT} in ${config.NODE_ENV} mode`);
  });
  
  app.use("/api/v1/", routerConfig.init());
  // define a route handler for the default home page
  app.get( "/", (_, res) => {
    return res.sendStatus(200).json({ message: "Welcome to express-create application!" });
  });
};

init();