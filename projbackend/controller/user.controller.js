const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    User.findOne({ email: req.body.email }, (err, email) => {
      if (email) {
        return res.status(400).json({
          success: false,
          err: "Email already exist",
        });
      }
    });

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        req.body.password
      )
    ) {
      return res.status(400).json({
        success: false,
        err: "Password should be atleast Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
      });
    }

    const userSubmitData = new User(req.body);

    const user = await userSubmitData
      .save()
      .then((data) => {
        return res.status(200).json({
          success: true,
          msg: "User successfully created",
          data: data,
        });
      })
      .catch(() => {
        return res.status(400).json({
          success: false,
          msg: "User not created",
        });
      });
  } catch (err) {
    return res.status(400).json({
      success: false,
      msg: "User not created",
    });
  }
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: "No email found...",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        success: false,
        err: "Password does not match!",
      });
    }

    // Create token
    const token = jwt.sign({ _id: user._id }, "demo@123");
    res.cookie("token", token, { maxAge: 360000 });

    const { _id, firstname, email } = user;
    return res.json({
      token: token,
      _id: _id,
      name: firstname,
      email: email,
      message: "User successfully logged In!",
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    success: false,
    message: "User signed out successfully!",
  });
};

exports.getUser = (req, res) => {
  try {
    const { _id } = req.body;
    User.findOne({ _id }, (err, user) => {
      if (err) {
        return res.status(400).json({
          success: false,
          err: "No user found...",
        });
      }

      user.salt = undefined;
      user.encry_password = undefined;
      return res.status(200).json({
        success: true,
        data: user,
      });
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: "No user found...",
    });
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      err: "No user found...",
    });
  }
};

exports.updateUser = async (req, res) => {
  User.findOne({ _id: req.body._id }, async (err, user) => {
    if (err) {
      return res.status(400).json({
        success: false,
        err: "No user found...",
      });
    }

    if (req.body.firstname) {
      user.firstname = req.body.firstname;
    }
    if (req.body.lastname) {
      user.lastname = req.body.lastname;
    }
    if (req.body.email) {
      user.email = req.body.email;
    }
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedData = await User.findOneAndUpdate(
      { _id: req.body._id },
      user,
      (err, user) => {
        if (err) {
          return res.status(400).json({
            success: false,
            err: "No user found...",
          });
        }
        return res.status(200).json({
          success: true,
          message: "User data successfully updated",
        });
      }
    );
  });
};
