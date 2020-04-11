isTeacher = (req, res, next) => {
  const { role } = req.user;
  if (role == "teacher") {
    next();
  } else {
    res.status(403).json({
      error: {
        message: "You don't have permission in this page",
      },
    });
  }
};

isAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role == "admin") {
    next();
  } else {
    res.status(403).json({
      error: {
        message: "You don't have permission in this page",
      },
    });
  }
};

isStudent = (req, res, next) => {
  const { role } = req.user;
  if (role == "student") {
    next();
  } else {
    res.status(403).json({
      error: {
        message: "You don't have permission in this page",
      },
    });
  }
};

isTeacherAndAdmin = (req, res, next) => {
  const { role } = req.user;
  if (role == "admin" || role == "teacher") {
    next();
  } else {
    res.status(403).json({
      error: {
        message: "You don't have permission in this page",
      },
    });
  }
};
module.exports = { isTeacher, isAdmin, isStudent, isTeacherAndAdmin };
