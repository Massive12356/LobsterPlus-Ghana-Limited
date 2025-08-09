import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    description: {type: String, required: true},
    wholesalePrice: {type: Number, required: true},
    retailPrice:{type: Number, required: true},
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
}, {timestamps: true});

export default mongoose.model('Product', productSchema);