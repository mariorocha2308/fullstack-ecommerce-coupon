const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  SERVER_PORT: process.env.PORT || "",
  NODE_ENV: process.env.NODE_ENV || "",
  SECRET_ACCESS_TOKEN: process.env.SECRET_ACCESS_TOKEN || "",
  PGUSER: process.env.PGUSER || "",
  PGPASSWORD: process.env.PGPASSWORD || "",
  PGHOST: process.env.PGHOST || "",
  PGPORT: process.env.PGPORT || "",
  PGDATABASE: process.env.PGDATABASE || "",
}
