import { Furniture } from "../models/Furniture.js";

const furnitureService = {
    async getAll(limit) {
        return await Furniture.find().sort({ "date": "desc" }).limit(limit);
    },
    async getOne(furnitureId) {
        return await Furniture.findById(furnitureId);
    },
    async create(furnitureData) {
        return await Furniture.create(furnitureData);
    },
    async update(furnitureId, furnitureData) {
        return await Furniture.findByIdAndUpdate(furnitureId, furnitureData, { new: true });
    },
    async delete(furnitureId) {
        return await Furniture.findByIdAndDelete(furnitureId);
    },
}

export default furnitureService;