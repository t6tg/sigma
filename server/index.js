const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { PORT } = require("./config");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/sigma", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "*/*" }));

app.listen(PORT, () => {
  console.log(`[ server ] started at port : ${PORT}`);
});
