import { useEffect, useState } from "react";
import reviewsApi from "../api/reviews-api";

export function useCreateReview() {
    const createHandler = (productId, review) =>
        reviewsApi.create(productId, review);

    return createHandler;
}

export function useGetAllReviews(productId) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await reviewsApi.getAll(productId)

            setReviews(result)
        })();
    }, [productId]);

    return [reviews, setReviews]
}
