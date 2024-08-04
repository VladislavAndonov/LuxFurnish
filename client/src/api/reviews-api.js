import requester from "./requester";

const BASE_URL = "http://localhost:3030/data/furniture/";

const buildURL = (productId) => `${BASE_URL}/products/${productId}/reviews`;

const create = async (productId, username, text) =>
    requester.post(buildURL(productId), { username, text });

const getAll = async (productId) => {
    // const result = await requester.get(buildURL(productId));
    // const reviews = Object.values(result);
    // return reviews;
    const params = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `author=_ownerId:users`,
    })

    return requester.get(`${BASE_URL}?${params.toString()}`);
};

export default {
    create,
    getAll,
};
