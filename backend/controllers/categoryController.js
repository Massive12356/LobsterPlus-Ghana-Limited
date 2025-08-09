import Category from "../models/Category.js";

// Create a new category
export const createCategory = async (req, res) => {
  try {
    const category = new Category({ name: req.body.name });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all categories
export const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};
