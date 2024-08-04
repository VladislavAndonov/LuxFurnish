async function requester(method, url, data) {
    const options = {};

    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
        options.headers = {
            ...options.headers,
            "X-Authorization": accessToken,
        };
    }

    if (method !== "GET") {
        options.method = method;
    }

    if (data) {
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json",
        };

        options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const put = requester.bind(null, "PUT");
export const del = requester.bind(null, "DELETE");

export default {
    get,
    post,
    put,
    del,
};

// import { clearUserData, getUserData } from "./util";

// const host = "http://localhost:3030";

// export default async function request(url, options) {
//   try {
//     const response = await fetch(host + url, options);

//     if (!response.ok) {
//       if (response.status === 403) {
//         clearUserData();
//       }
//       const error = await response.json();
//       throw new Error(error.message);
//     }

//     if (response.status === 204) {
//       return response;
//     } else {
//       return response.json();
//     }
//   } catch (error) {
//     alert(error.message);
//     throw error;
//   }
// }

// function createOptions(method = "get", data) {
//   const options = {
//     method,
//     headers: {},
//   };

//   if (data) {
//     options.headers["Content-Type"] = "application/json";
//     options.body = JSON.stringify(data);
//   }

//   const userData = getUserData();
//   if (userData != null) {
//     options.headers["X-Authorization"] = userData.token;
//   }

//   return options;
// }

// export async function get(url) {
//   return request(url, createOptions());
// }

// export async function post(url, data) {
//   return request(url, createOptions("post", data));
// }

// export async function put(url, data) {
//   return request(url, createOptions("put", data));
// }

// export async function del(url) {
//   return request(url, createOptions("delete"));
// }
