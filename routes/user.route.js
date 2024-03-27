const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPasswordUser,
  resetPasswordUser,
  getUserDetails,
  updatePassword,
  updateProfile,
} = require("../controllers/user.controller");
const {
  isAuthenticatedUser,
  authorizeRoles,
} = require("../middleware/authMiddleware");

router.post("/common/register", registerUser);
router.post("/common/login", loginUser);
router.get("/common/logout", logoutUser);
router.post("/common/forgot", forgotPasswordUser);
router.put("/common/reset/:token", resetPasswordUser);
router.get("/common/me", isAuthenticatedUser, getUserDetails);
router.put("/common/me/change-profile", isAuthenticatedUser, updateProfile);
router.put("/common/me/change-password", isAuthenticatedUser, updatePassword);

module.exports = router;
