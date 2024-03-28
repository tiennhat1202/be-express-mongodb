const express = require("express");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const {
  newOrder,
  getSingleOrder,
  myOrder,
  getAllOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order.controller");

router.post("/order-create", isAuthenticatedUser, newOrder);
router.get("/order-getId/:id", isAuthenticatedUser, getSingleOrder);
router.get("/order-me", isAuthenticatedUser, myOrder);
router.get(
  "/admin/order-getall",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllOrder
);
router.put(
  "/admin/order-update/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateOrder
);
router.delete(
  "/admin/order-del/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteOrder
);

module.exports = router;
