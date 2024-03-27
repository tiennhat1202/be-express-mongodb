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

router.post(
  "/admin/product-add",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  addProduct
);

router.get(
  "/admin/product-getall",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getProducts
);

router.get(
  "/admin/product-getid/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getProductById
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
