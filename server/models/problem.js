const mongoose = require("mongoose");

const schema = mongoose.Schema({
  problem_name: { type: String, required: true, trim: true },
  score: { type: Number, required: true },
  testcase: { type: Number, required: true },
  status: { type: Number, default: 0, required: true },
  language: { type: String, required: true, trim: true },
  teacher: { type: String, required: true, trim: true },
  time_limit: { type: Number, default: 1 },
  mem_limit: { type: Number, default: 35 },
});

const problem = mongoose.model("problem", schema);

module.exports = problem;
