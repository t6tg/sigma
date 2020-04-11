const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
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

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const problemRouter = require("./routes/problem");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//passport
app.use(passport.initialize());

app.use("/", indexRouter);
app.use("/user", usersRouter);
app.use("/problem", problemRouter);
app.use(errorHandler);

module.exports = app;
