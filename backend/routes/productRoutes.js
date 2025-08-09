import express from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// List all products (admin & sales) and create product (admin only)
router
  .route("/")
  .post(protect, authorizeRoles("admin"), createProduct)
  .get(protect, authorizeRoles("admin", "sales"), getProducts);

// Single product view (admin & sales), update (admin only), delete (admin only)
router
  .route("/:id")
  .get(protect, authorizeRoles("admin", "sales"), getProduct)
  .put(protect, authorizeRoles("admin"), updateProduct)
  .delete(protect, authorizeRoles("admin"), deleteProduct);

export default router;
