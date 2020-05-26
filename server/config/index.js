require("dotenv").config();
module.exports = {
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET: process.env.JWT_SECRET,
};
