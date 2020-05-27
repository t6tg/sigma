var express = require("express");
var router = express.Router();
const userController = require("../controllers/fileController");
const passportJWT = require("../middleware/passportJWT");
const role = require("../middleware/checkRole");
/* GET users listing. */
router.post(
  "/addFile",
  [passportJWT.isLogin, role.isTeacherAndAdmin],
  userController.register
);
router.get(
  "/getFileByStudent",
  [passportJWT.isLogin, role.isStudent],
  userController.getStudent
);
router.get(
  "/getFileAll",
  [passportJWT.isLogin, role.isAdmin],
  userController.getTeacher
);
router.get(
  "/getFileByTeacher",
  [passportJWT.isLogin, role.isTeacher],
  userController.getTeacher
);

module.exports = router;
