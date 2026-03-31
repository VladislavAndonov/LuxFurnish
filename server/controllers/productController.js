import { Router } from "express";
import productService from "../services/productService.js";
import AppError from "../errors/AppError.js";

const productController = Router();

productController.get("/", async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit, 10) || undefined;

        const products = await productService.getAll(limit);

        res.json(products)
    } catch (err) {
        next(err)
    }
})

productController.post("/", async (req, res, next) => {
    try {
        const { name, description, price, material, category } = req.body;

        if (!name || !description || !price || !material || !category) {
            throw new AppError("Missing required product fields", 400);
        }

        const product = await productService.create({ name, description, price, material, category })

        res.json(product)

    } catch (err) {
        next(err);
    }
})

productController.get("/:id", async (req, res, next) => {
    try {
        const product = await productService.getOne(req.params.id);

        if (!product) {
            throw new AppError("Product not found", 400);
        }

        res.json(product);

    } catch (err) {
        next(err);
    }
})

productController.put("/:id", async (req, res, next) => {
    try {
        const oldProduct = await productService.getOne(req.params.id);

        if (!oldProduct) {
            throw new AppError("Product not found", 404);
        }

        const { name, description, price, material, category } = req.body;

        if (!name || !description || !price || !material || !category) {
            throw new AppError("Missing required product fields", 400);
        }

        const newProduct = await productService.update(req.params.id, { name, description, price, material, category })

        res.json(newProduct)

    } catch (err) {
        next(err);
    }
})

productController.delete("/:id", async (req, res, next) => {
    try {
        const product = await productService.getOne(req.params.id);

        if (!product) {
            throw new AppError("Product not found", 404);
        }

        await productService.delete(req.params.id)

        res.status(204).end();

    } catch (err) {
        next(err);
    }
})

export default productController