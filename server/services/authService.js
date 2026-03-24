import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models/User.js";
import config from "../config/config.js";
import AppError from "../errors/AppError.js";


const authService = {
    async register({ email, password }) {
        const user = await User.findOne({ email });

        if (user) {
            throw new AppError("This email has already been used", 409);
        }

        const createdUser = await User.create({ email, password });

        return buildAuthResponse(createdUser);
    },

    async login({ email, password }) {
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            throw new AppError("Invalid credentials", 400);
        }

        const isPassValid = await bcrypt.compare(password, user.password);
        if (!isPassValid) {
            throw new AppError("Invalid credentials", 400);
        }

        return buildAuthResponse(user);
    },

    async logout() {
        return true;
    }
}

function buildAuthResponse(user) {
    const payload = {
        userId: user._id,
        email: user.email,
    };

    const accessToken = jwt.sign(payload, config.jwtSecret, { expiresIn: "30m" });

    return { ...payload, accessToken }
}

export default authService;