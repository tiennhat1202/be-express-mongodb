const express = require("express");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const {
  createProductReview,
  getProductReviews,
  deleteProductReview,
} = require("../controllers/review.controller");

router.put("/review-add", isAuthenticatedUser, createProductReview);
router.get("/review-getall", getProductReviews);
router.delete("/review-del", isAuthenticatedUser, deleteProductReview);

module.exports = router;
