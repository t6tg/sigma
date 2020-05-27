const Problem = require("../models/problem.js");
const { validationResult } = require("express-validator");

exports.getProblemAll = async (req, res, next) => {
  try {
    const problem = await Problem.find();
    res.status(200).json({
      data: problem,
    });
  } catch (error) {
    next(error);
  }
};

exports.addFile = async (req, res, next) => {
  try {
    const {
      problem_name,
      score,
      language,
      testcase,
      time_limit,
      mem_limit,
    } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error();
      error.status = 422;
      error.validation = errors.array();
      throw error;
    }
    const { username } = req.user;
    const problem = new Problem();
    problem.problem_name = problem_name;
    problem.score = score;
    problem.language = language;
    problem.teacher = username;
    problem.testcase = testcase;
    time_limit ? (problem.time_limit = time_limit) : (problem.time_limit = 1);
    mem_limit ? (problem.mem_limit = mem_limit) : (problem.mem_limit = 35);
    await problem.save();
    res.status(200).json({
      message: "Add Problem Successful",
    });
  } catch (error) {
    next(error);
  }
};

exports.getProblemStudent = async (req, res, next) => {
  try {
    const problem = await Problem.find({ status: 1 });
    res.status(200).json({
      data: problem,
    });
  } catch (error) {
    next(error);
  }
};
