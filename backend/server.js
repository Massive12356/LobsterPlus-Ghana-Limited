// Import the Express framework to create the API server
import express from "express";

// Import dotenv to load environment variables from the .env file
import dotenv from "dotenv";

// Import CORS middleware to allow cross-origin requests (e.g., frontend talking to backend)
import cors from "cors";

// Import your route files (modular routes for authentication, products, and categories)
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

// Import the MongoDB connection function
import connectDB from "./config/db.js";

// Load environment variables from .env into process.env
dotenv.config();

// Initialize the Express application
const app = express();

// Connect to MongoDB using the connectDB function
connectDB();

// Enable CORS so that your frontend (e.g., localhost:5173) can call this backend (e.g., localhost:5000)
app.use(cors());

// Middleware to parse JSON request bodies (e.g., for POST/PUT requests)
app.use(express.json());

// Define the API route for user authentication (e.g., login, register)
app.use("/api/auth", authRoutes);

// Define the API route for product operations (create, read, update, delete)
app.use("/api/products", productRoutes);

// Define the API route for category operations (create, list)
app.use("/api/categories", categoryRoutes);

// Define the port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log when server starts successfully
});
