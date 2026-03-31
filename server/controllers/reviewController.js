import { Router } from "express";
import AppError from "../errors/AppError.js";
import reviewService from "../services/reviewService.js";

const reviewController = Router();

reviewController.get("/", async (req, res, next) => {
    try {
        const { productId } = req.query
        const reviews = await reviewService.getAll({ productId });

        res.json(reviews);

    } catch (err) {
        next(err)
    }
})

reviewController.post("/", async (req, res, next) => {
    try {
        const userId = req.user._id;
        const { productId, rating, comment } = req.body;

        if (!rating) {
            throw new AppError("Missing review rating", 404);
        }

        const review = await reviewService.create({ userId, productId, rating, comment });

        res.json(review)
    } catch (err) {
        next(err);
    }
})

reviewController.put("/:id", async (req, res, next) => {
    try {
        const oldReview = await reviewService.getOne(req.params.id);
        const userId = req.user._id;

        if (!oldReview) {
            throw new AppError("Review not found", 404);
        }

        if (userId !== oldReview.userId.toString()) {
            throw new AppError("Unauthorized", 403);
        }

        const { productId, rating, comment } = req.body;

        if (!rating) {
            throw new AppError("Missing review rating", 404);
        }

        const newReview = await reviewService.update(req.params.id, { productId, rating, comment })

        res.json(newReview)

    } catch (err) {
        next(err);
    }
})

reviewController.delete("/:id", async (req, res, next) => {
    try {
        const review = await reviewService.getOne(req.params.id);

        if (!review) {
            throw new AppError("Review not found", 404);
        }

        if (req.user._id !== review.userId.toString()) {
            throw new AppError("Unauthorized", 403);
        }

        await reviewService.delete(req.params.id)

        res.status(204).end();

    } catch (err) {
        next(err);
    }
})

export default reviewController