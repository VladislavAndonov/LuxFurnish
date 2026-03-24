import jwt from "jsonwebtoken";
import config from "../config/config.js";
import AppError from "../errors/AppError.js";

export function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return next(new AppError("No authorization header", 401));
    }

    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
        return next(new AppError("Invalid authorization format", 401));
    }

    try {
        const decoded = jwt.verify(token, config.jwtSecret);

        req.user = decoded;

        next();
    } catch (err) {
        next(new AppError("Invalid or expired token", 401));
    }
}