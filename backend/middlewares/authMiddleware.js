import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware to verify token and attach user to req
export const protect = async (req, res, next) => {
  // Check if Authorization header exists and split by space
  const token = req.headers.authorization?.split(" ")[1]; // Extract token after "Bearer "

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify token using JWT_SECRET from .env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find user by decoded id and attach user info (excluding password)
    req.user = await User.findById(decoded.id).select("-password");

    next(); // Proceed to next middleware or route handler
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
  }
};
