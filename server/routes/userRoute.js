const express = require("express");
const router = express.Router();
const user = require("../controllers/userController");

// User Routes
router.get("/getStudent", user.getStudent);
router.get("/getTeacher", user.getTeacher);
router.post("/register", user.register);
router.get("/me", user.me);
router.post("/login", user.login);

module.exports = router;
