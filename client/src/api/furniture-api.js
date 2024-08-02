import * as request from './requester.js'

const BASE_URL = "http://localhost:3030/jsonstore/furniture/products";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products
}

export const getOne = (productId) => request.get(`${BASE_URL}/${productId}`);

const furnitureAPI = {
    getAll,
    getOne
}

export default furnitureAPI;