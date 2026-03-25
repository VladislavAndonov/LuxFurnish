import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import AppError from "../errors/AppError.js";

const furnitureController = Router();

furnitureController.get("/", async (req, res) => {

    const limit = parseInt(req.query.limit, 10) || undefined;

    const furniture = await furnitureService.getAll(limit);

    res.json(furniture)
})

furnitureController.post("/", async (req, res) => {
    const { name, description, price, material, category } = req.body;

    const furniture = await furnitureService.create({ name, description, price, material, category });

    res.json(furniture)
})

furnitureController.put("/:id", async (req, res) => {
    const { name, description, price, material, category } = req.body;

    if (!furniture) {
        throw new AppError("Furniture not found", 400);
    }

    const furniture = await furnitureService.update(req.params.id, { name, description, price, material, category });

    res.json(furniture);
})

furnitureController.get("/:id", async (req, res) => {
    const furniture = await furnitureService.getOne(req.params.id);

    if (!furniture) {
        throw new AppError("Missing required user fields", 400);
    }

    res.json(furniture)
})

furnitureController.delete("/:id", async (req, res) => {
    await furnitureService.delete(req.params.id);

    res.status(204).end()
})

export default furnitureController