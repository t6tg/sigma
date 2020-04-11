const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const passportJWT = require("../middleware/passportJWT");
const role = require("../middleware/checkRole");
const problemController = require("../controllers/problemController");

router.get(
  "/getAll",
  [passportJWT.isLogin, role.isAdmin],
  problemController.getProblemAll
);

router.post(
  "/addProblem",
  [passportJWT.isLogin, role.isTeacherAndAdmin],
  problemController.addProblem
);

router.get(
  "/getWithTeacher",
  [passportJWT.isLogin, role.isTeacher],
  problemController.getWithTeacher
);

module.exports = router;
