const multer = require("multer");
const fs = require("fs");
const Product = require("../models/Product");

// Multer configuration
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    await fs.exists("./uploads/product", (exist) => {
      if (!exist) {
        fs.mkdir("./uploads/product", { recursive: true }, (err) => {
          cb(err);
        });
      }
    });
    cb(null, "./uploads/product");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + file.originalname.replace(/ /g, ""));
  },
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/svg" ||
    file.mimetype === "image/svg+xml"
  ) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid Mime Type, only JPG, JPEG, PNG and SVG allowed"),
      false
    );
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

exports.uploadImage = async (req, res, next) => {
  try {
    upload.single("productImg")(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          error: "Invalid File Type, only PDF, DOC and JPEG allowed",
          success: false,
        });
      }
      if (req["file"]["path"] !== undefined) {
        console.log(req.file);
        next();
        // return res.status(200).json({
        //   path: req.file.path,
        //   success: true,
        // });
      } else {
        return res.status(400).json({
          Error: "Upload Failed. Try Again.",
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

exports.createProduct = async (req, res) => {
  req.body.photo = req.file.path;
  const { name, description, price, category, stock, photo } = req.body;

  if (!name || !description || !price || !category || !stock || !photo) {
    return res.status(400).json({
      success: false,
      error: "Please include all fields",
    });
  }
  const productData = new Product(req.body);

  const product = await productData
    .save()
    .then((data) => {
      if (data) {
        return res.status(200).json({
          success: true,
          msg: "Product successfully created",
          data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
      return res.status(400).json({
        success: false,
        error: "Product not created",
      });
    });
};
