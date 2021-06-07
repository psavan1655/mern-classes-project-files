const express = require("express");
const {
  createProduct,
  uploadImage,
} = require("../controller/product.controller");
const router = express.Router();

router.post("/create", uploadImage, createProduct);
// router.post("/image", uploadImage);

module.exports = router;
