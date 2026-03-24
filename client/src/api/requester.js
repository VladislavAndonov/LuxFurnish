import { getAccessToken } from "../utils/authUtils";

async function requester(method, url, data) {
    const accessToken = getAccessToken();

    const options = {
        method,
        headers: {},
    };

    if (accessToken) {
        options.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    if (data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 401) {
        sessionStorage.clear();
        window.location.href = "/login";
        return;
    }

    if (response.status === 204) return;

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export default {
    get: (url) => requester("GET", url),
    post: (url, data) => requester("POST", url, data),
    put: (url, data) => requester("PUT", url, data),
    del: (url) => requester("DELETE", url),
};