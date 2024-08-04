import requester from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/furniture/";

const buildURL = (productId) => `${BASE_URL}/products/${productId}/reviews`;

const create = async (productId, username, text) =>
    requester.post(buildURL(productId), { username, text });

const getAll = async (productId) => {
    const result = await requester.get(buildURL(productId));
    
    const reviews = Object.values(result);
    
    return reviews;
};

export default {
    create,
    getAll,
};
