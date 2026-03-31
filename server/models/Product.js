import mongoose from "mongoose";

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    material: {
        type: String
    },
    category: {
        type: String
    },
}, { timestamps: true })

productSchema.index({ category: 1, createdAt: -1 });

export const Product = mongoose.model("Product", productSchema);