const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, DB_NAME } = require("./config");
const errorHandler = require("./middleware/errorHandler");
const userRoute = require("./routes/userRoute");
const indexRoute = require("./routes/indexRoute");

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", indexRoute);
app.use("/users", userRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[ server ] started at port : ${PORT}`);
});

module.exports = app;
