var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
const config = require("./config");
const passport = require("passport");

//mongo
mongoose.connect(`mongodb://localhost:27017/${config.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

// Error Handler
const errorHandler = require("./middleware/errorHandler");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//passport
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use(errorHandler);

module.exports = app;
