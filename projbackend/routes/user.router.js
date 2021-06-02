const express = require("express");
const {
  signup,
  signin,
  signout,
  getUser,
  getAllUser,
  updateUser,
  validateToken,
} = require("../controller/user.controller");
const router = express.Router();

// router.get("/get",);
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/getuser", validateToken, getUser);
router.get("/getalluser", getAllUser);
router.put("/updateuser", updateUser);

module.exports = router;
