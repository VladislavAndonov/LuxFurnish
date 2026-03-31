import mongoose from 'mongoose';

const { Schema } = mongoose;

const reviewSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        reqiured: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        reqiured: true
    },
    rating: {
        type: Number,
        min: [1, "Minimum rating is 1"],
        max: [5, "Maximum rating is 5"],
        reqiured: true
    },
    comment: {
        type: String,
        maxLength: [200, "Comment is too long"]
    }
}, { timestamps: true });

reviewSchema.index({ userId: 1, productId: 1 }, { unique: true });

export const Review = mongoose.model("Review", reviewSchema);