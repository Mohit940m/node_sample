const express = require("express");
const router = express.Router();
const {
  createUser,
  loginUser,
  getProfile,
  editProfile,
  resetPassword,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);
router.put("/profile", protect, editProfile);
router.post("/reset-password", protect, resetPassword);

module.exports = router;