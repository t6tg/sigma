const mongoose = require("mongoose");

const schema = mongoose.Schema({
  file_name: { type: String, required: true, trim: true },
  status: { type: Number, default: 0, required: true },
  teacher: { type: String, required: true, trim: true },
});

const problem = mongoose.model("problem", schema);

module.exports = problem;
