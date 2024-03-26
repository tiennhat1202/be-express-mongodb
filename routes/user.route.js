const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPasswordUser,
  resetPasswordUser,
} = require("../controllers/user.controller");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.post("/password/forgot", forgotPasswordUser);
router.put("/password/reset/:token", resetPasswordUser);

module.exports = router;
