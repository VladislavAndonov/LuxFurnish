import { Review } from "../models/Review.js";

const reviewService = {
    async getAll(productId) {
        return await Review.find({ productId }).sort({ createdAt: -1 });
    },
    async create(reviewData) {
        return await Review.create(reviewData);
    },
    async update(reviewId, reviewData) {
        return await Review.findByIdAndUpdate(reviewId, reviewData, { new: true });
    },
    async delete(reviewId) {
        return await Review.findByIdAndDelete(reviewId);
    },
}

export default reviewService;