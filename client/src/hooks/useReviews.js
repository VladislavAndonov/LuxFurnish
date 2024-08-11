import { useEffect, useReducer } from "react";
import reviewsApi from "../api/reviews-api";

export function useCreateReview() {
    const createHandler = (productId, review) =>
        reviewsApi.create(productId, review);

    return createHandler;
}

export function useDeleteReview() {
    const deleteHandler = (productId, review) =>
        reviewsApi.del(productId, review);

    return deleteHandler;
}

function reviewsReducer(state, action) {
    switch (action.type) {
        case "GET_ALL":
            return action.payload.slice();

        case "CREATE_REVIEW":
            return [action.payload, ...state];

        case "DELETE_REVIEW":
            return state.filter((review) => review._id !== action.payload);

        default:
            return state;
    }
}

export function useGetAllReviews(productId) {
    const [reviews, dispatch] = useReducer(reviewsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await reviewsApi.getAll(productId);

            dispatch({ type: "GET_ALL", payload: result });
        })();
    }, [productId]);

    return [reviews, dispatch];
}