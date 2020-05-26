var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.json({
    msg: "Sigma Grader Powered By Grader Thailand [ https://grader.in.th ]",
  });
});

module.exports = router;
