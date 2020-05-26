const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv");

const PORT = process.env.PORT || 3009;

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));

app.listen(PORT, () => {
  console.log(`[ server ] started at port : ${PORT}`);
});
