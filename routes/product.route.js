const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  putProductById,
  deleteProductById,
} = require("../controller/product.controller");

router.post("/add/", addProduct);

router.get("/", getProducts);

router.get("/:id", getProductById);

router.put("/:id", putProductById);

router.delete("/:id", deleteProductById);

module.exports = router;
