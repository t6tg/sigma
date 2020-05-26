const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");
const passportJWT = require("../middleware/passportJWT");
const role = require("../middleware/checkRole");

// User Routes
router.get("/getStudent", user.getStudent);
router.get("/getTeacher", user.getTeacher);
router.post("/register", user.register);
router.get("/me", user.me);
router.post("/login", user.login);

module.exports = router;
