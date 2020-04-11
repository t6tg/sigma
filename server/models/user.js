const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const schema = mongoose.Schema({
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  section: { type: Number, required: true },
  teacher: { type: String, trim: true, default: null },
  status: { type: Number, required: true, default: 0 },
  role: { type: String, trim: true, required: true, default: "student" },
});

schema.methods.encryptPassword = async function (password) {
  const salt = await bcrypt.genSalt(8);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

schema.methods.checkPassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password);
  return isValid;
};

const user = mongoose.model("User", schema);
module.exports = user;
