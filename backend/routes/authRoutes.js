import express from "express";
import {
  register,
  login,
  getProfile,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
router.post("/register", register);

// @desc    Login user & get token
// @route   POST /api/auth/login
// @access  Public
router.post("/login", login);

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
router.get("/profile", protect, getProfile);

export default router;
