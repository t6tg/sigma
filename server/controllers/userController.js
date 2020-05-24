const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

exports.login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      const error = new Error("Not found this user");
      error.statusCode = 404;
      throw error;
    }
    // check password
    const isValid = await user.checkPassword(password);
    console.log(isValid);
    if (!isValid) {
      const error = new Error("Password is incorrect");
      error.statusCode = 401;
      throw error;
    }
    const token = await jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      config.JWT_SECRET,
      { expiresIn: "2h" }
    );
    // decode expire date
    const expires_in = jwt.decode(token);

    res.status(200).json({
      access_token: token,
      expires_in: expires_in.exp,
      token_type: "Bearer",
    });
  } catch (error) {
    next(error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { username, password, name, section, role } = req.body;
    const usernameExist = await User.findOne({ username: username });
    if (usernameExist) {
      const error = new Error(
        "This username is already in use , Please try again later"
      );
      error.statusCode = 404;
      throw error;
    }
    const user = new User();
    user.username = username;
    user.password = await user.encryptPassword(password);
    user.name = name;
    if (!role) {
      user.role = "student";
    } else {
      user.role = role;
    }
    user.section = section;

    await user.save();
    res.status(200).json({
      message: "Register Successful",
    });
  } catch (error) {
    next(error);
  }
};

exports.getStudent = async (req, res, next) => {
  try {
    const user = await User.find({ role: "student" });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

exports.getTeacher = async (req, res, next) => {
  try {
    const teacher = await User.find({ role: "teacher" });
    res.status(200).json({
      data: teacher,
    });
  } catch (error) {
    next(error);
  }
};

exports.me = async (req, res, next) => {
  try {
    const { _id, name, role, section, teacher, username } = req.user;
    res.status(200).json({
      user: {
        id: _id,
        username,
        name,
        role,
        section,
        teacher,
      },
    });
  } catch (error) {
    next(error);
  }
};
