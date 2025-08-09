import Product from "../models/Product.js";

// create product
export const createProduct = async(req,res) =>{
    try {
        const newProduct = new Product(req.body);
        await newProduct.save()
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: err.message})
    }
};

// Get all Product

export const getProducts = async(req,res) =>{
    const products = await Product.find().populate('category');
    res.json(products);
}

// Get a single Product
export const getProduct = async(req,res) =>{
    const product = await Product.findById(req.params.id).populate('category');
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.json(product);
}

// Update product
export const updateProduct = async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete product
export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
};