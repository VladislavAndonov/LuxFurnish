import { useEffect, useReducer } from "react";
import reviewsApi from "../api/reviews-api";

export function useCreateReview() {
    return async (productId, review) => {
        return await reviewsApi.create(productId, review);
    };
}

export function useDeleteReview() {
    return async (productId, reviewId) => {
        return await reviewsApi.del(productId, reviewId);
    };
}

export function useEditReview() {
    return async (productId, reviewId, text) => {
        return await reviewsApi.edit(productId, reviewId, text);
    };
}

function reviewsReducer(state, action) {
    switch (action.type) {
        case "GET_ALL":
            return action.payload;

        case "CREATE_REVIEW":
            return [...state, action.payload];

        case "DELETE_REVIEW":
            return state.filter(review => review._id !== action.payload);

            case "EDIT_REVIEW":
                return state.map(existingReview => {

                    if (existingReview._id === action.payload._id) {
                        return {
                            ...existingReview,
                            text: action.payload.text,
                        };
                    } else {
                        return existingReview;
                    }
                });            

        default:
            return state;
    }
}

export function useGetAllReviews(productId) {
    const [reviews, dispatch] = useReducer(reviewsReducer, []);

    useEffect(() => {
        async function fetchReviews() {
            try {
                const result = await reviewsApi.getAll(productId);
                dispatch({ type: "GET_ALL", payload: result });
            } catch (err) {
                console.error("Error fetching reviews:", err.message);
            }
        }

        fetchReviews();
    }, [productId]);

    return [reviews, dispatch];
}
