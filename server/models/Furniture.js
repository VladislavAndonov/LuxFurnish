import mongoose from "mongoose";

const { Schema } = mongoose;

const furnitureSchema = new Schema({
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

furnitureSchema.index({ category: 1, createdAt: -1 });

export const Furniture = mongoose.model("Furniture", furnitureSchema);