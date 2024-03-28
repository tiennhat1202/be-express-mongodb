const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  addProduct,
  putProductById,
  deleteProductById,
} = require("../controllers/product.controller");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");

router.get("/admin/product-getall", getProducts);

router.get("/admin/product-getid/:id", getProductById);

router.post(
  "/admin/product-add",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  addProduct
);

router.put(
  "/admin/product-update/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  putProductById
);

router.delete(
  "/admin/product-del/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProductById
);

module.exports = router;
