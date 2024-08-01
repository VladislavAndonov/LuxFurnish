import * as request from './requester.js'

const BASE_URL = "http://localhost:3030/jsonstore/furniture";

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const furniture = Object.values(result);

    return furniture
}

export const getOne = () => request.get(`${BASE_URL}/id`);