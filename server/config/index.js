require("dotenv").config();

module.exports = {
  PORT: process.env.PORT,
  DB_NAME: process.env.MONGO_DBNAME,
  JWT_SECRET: process.env.JWT_SECRET,
};
