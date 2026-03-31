import { useEffect, useReducer } from "react";
import { addReview, deleteReview, editReview, getAllReviews } from "../api/data";

export const useAddReview = () => addReview;
export const useDeleteReview = () => deleteReview;
export const useEditReview = () => editReview;

function reviewsReducer(state, action) {
    switch (action.type) {
        case "SET":
            return action.payload;

        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            return state.filter(r => r._id !== action.payload);

        case "UPDATE":
            return state.map(r =>
                r._id === action.payload._id
                    ? { ...r, ...action.payload }
                    : r
            );

        default:
            return state;
    }
}

export function useReviews(productId) {
    const [reviews, dispatch] = useReducer(reviewsReducer, []);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const data = await getAllReviews(productId);
                if (isMounted) {
                    dispatch({ type: "SET", payload: data });
                }
            } catch (err) {
                console.error("Error fetching reviews:", err.message);
            }
        })();

        return () => {
            isMounted = false;
        };
    }, [productId]);

    const add = (review) => dispatch({ type: "ADD", payload: review });
    const remove = (reviewId) => dispatch({ type: "DELETE", payload: reviewId });
    const update = (review) => dispatch({ type: "UPDATE", payload: review });

    return {
        reviews,
        add,
        remove,
        update,
    };
}
