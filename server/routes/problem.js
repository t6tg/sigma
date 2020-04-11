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
  [
    body("problem_name")
      .not()
      .isEmpty()
      .withMessage("Problem Name is not Empty")
      .isLength({ min: 3 })
      .withMessage("Problem Name of at least 3 characters"),
    body("score").not().isEmpty().withMessage("Score is Not Empty"),
    body("testcase").not().isEmpty().withMessage("Test Case is Not Empty"),
    body("language").not().isEmpty().withMessage("Language is Not Empty"),
  ],
  problemController.addProblem
);

router.get(
  "/getWithTeacher",
  [passportJWT.isLogin, role.isTeacher],
  problemController.getWithTeacher
);

router.get(
  "/getProblemStudent",
  [passportJWT.isLogin, role.isStudent],
  problemController.getProblemStudent
);

module.exports = router;
