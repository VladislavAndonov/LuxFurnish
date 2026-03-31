import { Product } from "../models/Product.js";

const productService = {
    async getAll(limit) {
        return await Product.find().sort({ createdAt: -1 }).limit(limit);
    },
    async getOne(productId) {
        return await Product.findById(productId);
    },
    async create(productData) {
        return await Product.create(productData);
    },
    async update(productId, productData) {
        return await Product.findByIdAndUpdate(productId, productData, { runValidators: true, new: true });
    },
    async delete(productId) {
        return await Product.findByIdAndDelete(productId);
    },
}

export default productService;