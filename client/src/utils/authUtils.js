export function getAccessToken() {
    const token = sessionStorage.getItem("accessToken");

    if (!token) return null;

    try {
        return JSON.parse(token);
    } catch {
        return null;
    }
}