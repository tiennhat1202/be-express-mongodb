const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPasswordUser,
  resetPasswordUser,
  getUserDetail_User,
  updatePassword,
  updateProfile,
  getAllUser_Admin,
  getUserDetail_Admin,
  deleteUser_Admin,
  updateUserRole_Admin,
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
router.get("/common/me", isAuthenticatedUser, getUserDetail_User);
router.put("/common/me/change-profile", isAuthenticatedUser, updateProfile);
router.put("/common/me/change-password", isAuthenticatedUser, updatePassword);

router.get(
  "/common/admin/user-getall",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUser_Admin
);
router.get(
  "/common/admin/user-getid/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getUserDetail_Admin
);
router.put(
  "/common/admin/user-update-role/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole_Admin
);
router.delete(
  "/common/admin/user-del/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser_Admin
);

module.exports = router;
