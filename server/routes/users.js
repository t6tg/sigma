var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const passportJWT = require("../middleware/passportJWT");
const role = require("../middleware/checkRole");
/* GET users listing. */
router.post("/login", userController.login);
router.post(
  "/register",
  [passportJWT.isLogin, role.isTeacherAndAdmin],
  userController.register
);
router.get(
  "/getStudent",
  [passportJWT.isLogin, role.isAdmin],
  userController.getStudent
);
router.get(
  "/getTeacher",
  [passportJWT.isLogin, role.isAdmin],
  userController.getTeacher
);

module.exports = router;
