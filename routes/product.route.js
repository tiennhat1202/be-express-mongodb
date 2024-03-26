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

router.post("/add/", isAuthenticatedUser, authorizeRoles("admin"), addProduct);

router.get("/", isAuthenticatedUser, authorizeRoles("admin"), getProducts);

router.get(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getProductById
);

router.put(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  putProductById
);

router.delete(
  "/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteProductById
);

module.exports = router;
