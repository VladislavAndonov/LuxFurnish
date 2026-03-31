import requester from "./api";

const host = import.meta.env.VITE_API_URL;

export const login = (email, password) => requester.post(`${host}/auth/login`, { email, password });
export const register = (email, password) => requester.post(`${host}/auth/register`, { email, password });

// PRODUCTS

export async function getAllProducts(filters = {}) {
    const params = new URLSearchParams();
    const {
        limit
        // TODO: add more filters
    } = filters

    if (limit) {
        params.append("limit", limit)
    }

    const queryString = params.toString()

    return requester.get(`${host}/products${queryString ? '?' + queryString : ''}`);
}

export async function getProductById(productId) {
    const product = await requester.get(`${host}/${productId}`);
    return product
}

// REVIEWS

export async function getAllReviews(productId) {
    const params = new URLSearchParams({
        productId,
    });

    return requester.get(`${host}/reviews?${params.toString()}`);
}

export async function addReview(productId, rating, comment) {
    return requester.post(`${host}/reviews`, { productId, rating, comment })
}

export async function editReview(reviewId, productId, rating, comment) {
    return requester.put(`${host}/reviews/${reviewId}`, { productId, rating, comment });
}

export async function deleteReview(reviewId) {
    return requester.del(`${host}/reviews/${reviewId}`);
}