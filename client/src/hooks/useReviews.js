import { useEffect, useReducer } from "react";
import reviewsApi from "../api/reviews-api";

export function useCreateReview() {
    const createHandler = (productId, review) =>
        reviewsApi.create(productId, review);

    return createHandler;
}

function reviewsReducer(state, action) {
    switch (action.type) {
        case "GET_ALL":
            return action.payload.slice();

        case "ADD_COMMENT":
            return [action.payload, ...state];

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
