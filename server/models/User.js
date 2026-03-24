import mongoose from 'mongoose';
import bcrypt from "bcrypt"
import config from '../config/config.js';
import { EMAIL_REGEX } from '../validators/email.js';


const { Schema } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function (value) {
                return EMAIL_REGEX.test(value)
            },
            message: "Email format is invalid."
        },
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [6, "Password must be at least 6 characters."],
        select: false,
    }
}, { timestamps: true });

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const hash = await bcrypt.hash(this.password, config.saltRounds);
    this.password = hash;
});

export const User = mongoose.model("User", userSchema);