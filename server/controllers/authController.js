import { Router } from "express";

import authService from "../services/authService.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import AppError from "../errors/AppError.js";

const authController = Router();

authController.post("/register", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new AppError("Missing required user fields", 400);
        }

        const result = await authService.register({ email, password });

        res.json(result);

    } catch (err) {
        next(err)
    }
});

authController.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new AppError("Missing required user fields", 400);
        }

        const result = await authService.login({ email, password });

        res.json(result);


    } catch (err) {
        next(err)
    }
});

authController.get("/me", authMiddleware, (req, res) => {
    const { userId, email } = req.user;
    res.json({ userId, email });
});

export default authController